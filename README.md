# A T M 
 
 
# Slide 1: Introduction
Hello everyone! Today, I will talk about an ATM state machine made with JavaScript. This helps us manage different states of the ATM.

# Slide 2: Overview of the State Machine
First, let’s understand what a state machine is. A state machine has states, actions, and transitions. In our ATM, there are two main states: authorized and unauthorized. The user can move between these states by logging in, logging out, depositing, or withdrawing money.

# Slide 3: Transition Table
Next, we have a transition table. This table shows the actions for each state. For example:
- In the unauthorized state, the user can only log in.
- In the authorized state, the user can log out, deposit money, withdraw money, or check their balance.

# Slide 4: Action Checkers
Each action has a checker function. This function checks if the action can happen based on the current balance and password. For example, the withdrawal action checks if there is enough money.

# Slide 5: ATM Functionality
We put the ATM functions in a factory function called `createATM`. This function sets up the ATM with a starting state, balance, and password. It also has methods to handle actions and get the current state.

# Slide 6: Example Usage
Here’s how we use the ATM:
1. We set up the ATM with a password and balance.
2. We list a series of actions to show how a user interacts with it.
3. Each action is processed, and we see the results in the console.

# Slide 7: Code Walkthrough
- We start by defining our states and the transition table.
- Then, we create the ATM function to manage state changes based on user actions.
- Finally, we run some actions to show how it works.

# Slide 8: Conclusion
In conclusion, this ATM state machine helps manage user actions and makes sure actions happen in the right states. This can be used in many systems that need state management.

# Slide 9: Questions
Thank you for listening! I’m happy to answer any questions you have.
