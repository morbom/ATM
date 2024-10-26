// Define the states of the ATM
const authorized = { state: 'authorized' };   // User is authorized to perform transactions
const unauthorized = { state: 'unauthorized' }; // User is not authorized and needs to log in

// Define the transition table for state actions
const transitionTable = {
    // Actions available in the unauthorized state
    unauthorized: [
        {
            action: 'login', // Action to log in
            checker: (param, pwd, curBal) => [param === pwd, curBal, null], // Check if the provided password matches
            nextState: authorized // Next state if login is successful
        }
    ],
    // Actions available in the authorized state
    authorized: [
        {
            action: 'logout', // Action to log out
            checker: (param, pwd, curBal) => [true, curBal, null], // Always successful, no parameters needed
            nextState: unauthorized // Next state after logging out
        },
        {
            action: 'deposit', // Action to deposit money
            checker: (param, pwd, curBal) => [true, curBal + param, null], // Always successful, increase balance
            nextState: authorized // Stay in authorized state after deposit
        },
        {
            action: 'withdraw', // Action to withdraw money
            checker: (param, pwd, curBal) => [curBal >= param, curBal - param, null], // Check if balance is sufficient
            nextState: authorized // Stay in authorized state after withdrawal
        },
        {
            action: 'balance', // Action to check balance
            checker: (param, pwd, curBal) => [true, curBal, curBal], // Always successful, returns current balance
            nextState: authorized // Stay in authorized state after checking balance
        }
    ]
};

// Factory function to create an ATM instance
function createATM(initState, initBalance, password, transitionTable) {
    let state = initState; // Initialize the current state
    let balance = initBalance; // Initialize the current balance

    // Function to process actions
    function next(action, param) {
        const transitions = transitionTable[state.state]; // Get possible transitions for the current state
        for (let { action: transitionAction, checker, nextState } of transitions) {
            // Check if the action matches the transition action
            if (action === transitionAction) {
                const [passed, newBalance, res] = checker(param, password, balance); // Execute the checker function
                if (passed) { // If the action is allowed
                    balance = newBalance; // Update the balance
                    state = nextState; // Transition to the next state
                    return [true, res]; // Return success and any result
                }
            }
        }
        return [false, null]; // Return failure if action is not allowed
    }

    // Function to get the current state
    function getState() {
        return state.state; // Return the current state name
    }

    // Return an object with methods to interact with the ATM
    return {
        next,
        getState
    };
}

// Example usage of the ATM state machine
const password = 'hacker'; // Define the correct password
const initBalance = 10; // Initialize balance
const atm = createATM(unauthorized, initBalance, password, transitionTable); // Create ATM instance

// Define a series of actions to simulate user interaction
const actions = [
    ['withdraw', 5],   // Attempt to withdraw $5
    ['login', 'foo'],   // Attempt to log in with incorrect password
    ['login', 'hacker'], // Attempt to log in with correct password
    ['withdraw', 15],   // Attempt to withdraw $15 (should fail)
    ['deposit', 20],    // Deposit $20
    ['withdraw', 15],   // Withdraw $15
    ['balance', null],  // Check balance
    ['logout', null]    // Log out
];

// Process each action and log the results
actions.forEach(([action, param]) => {
    const [success, res] = atm.next(action, param); // Process the action
    // Log the success status, current state, and any result
    console.log(`Success=${success} ${atm.getState()}${res !== null ? ' ' + res : ''}`);
});
