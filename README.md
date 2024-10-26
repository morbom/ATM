# ATM State Machine

## 1: Introduction
Hello everyone! Today, I will talk about an ATM state machine made with JavaScript. This design helps us manage different states of the ATM effectively.

## 2: Overview of the State Machine
First, let’s understand what a state machine is. A state machine consists of:
- **States**: Different conditions the system can be in.
- **Actions**: Tasks that can be performed.
- **Transitions**: Changes from one state to another.

In our ATM, there are two main states:
- **Authorized**: The user can perform transactions.
- **Unauthorized**: The user must log in to access functionalities.

## 3: Transition Table
Next, we have a transition table that outlines the actions for each state:
- In the **unauthorized** state, the user can only log in.
- In the **authorized** state, the user can:
  - Log out
  - Deposit money
  - Withdraw money
  - Check their balance

## 4: Action Checkers
Each action has a **checker function**. This function verifies if the action can be performed based on:
- The current balance
- The password

For example, the withdrawal action checks if there is enough money.

## 5: ATM Functionality
The ATM functions are organized in a factory function called `createATM`. This function:
- Initializes the ATM with a starting state, balance, and password.
- Provides methods to handle actions and retrieve the current state.

## 6: Example Usage
Here’s how we use the ATM:
1. Set up the ATM with a password and balance.
2. Define a series of actions to simulate user interaction.
3. Process each action and view results in the console.

## 7: Code Walkthrough
- **Define States**: We start by defining our states and the transition table.
- **Create ATM Function**: We then create the ATM function to manage state changes based on user actions.
- **Run Actions**: Finally, we execute some actions to demonstrate how it works.

## 8: Conclusion
In conclusion, this ATM state machine effectively manages user actions and ensures that actions occur in the appropriate states. This design pattern can be applied to various systems that require state management.

## 9: Questions
Thank you for listening! I’m happy to answer any questions you may have.
