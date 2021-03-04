# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/jparciga/83341911fbc8cd716be12af50c0e496a) for further instructions

# Mini-Challenge 1: Core Concepts and Styling

## Before you start:

1. Read carefully [the instructions for the project](https://gist.github.com/jparciga/83341911fbc8cd716be12af50c0e496a), please make sure that you clearly understand all the requirements.
2. Fork [this repo](https://github.com/wdonet/react-certification-2021). Please make sure that your new repo is publicly accesible.

> \*_NOTE:_ You should use the provided codebase only as a guide for structuring your application. Feel free to add, remove, or change anything if you consider it necessary.\*

## The challenge:

1. Create the UI layout for your app, it should include the following elements:

- 1.1 Header: Similar to the one in our [demo app](https://react-certification-2020.netlify.app/). For now, the search field, theme toggle, login button, and other navigation links should be disabled, i.e., you only need to create the corresponding UI elements without the functionality.
- 1.2 Content: The content view corresponding to the section that will be renderered (in this case, the Home View).

2. Create the **Home View** and display the list of items from [this mock file](https://gist.github.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5).
3. Apply css styles to your components using the [styled-components](https://styled-components.com/) approach.

## Acceptance Criteria

- [ ] The header is rendered correctly.
- [ ] A list of videos obtained from a mock file is displayed in the **Home View**.
- [ ] CSS styles are applied correctly using the styled-components approach.

## Bonus Points

- [ ] No warnings or errors are logged in the browser console.
- [ ] The UI is responsive

# Mini-Challenge 2: Intro to Testing

## Answer the following questions first

1. Using `create-react-app`, what do we need to set up for testing?
   - Only create files with .test.js extension or spec.js and run the command **npm test**.
   - If needed it could be setted the coverage and some rules to define with files ara included in the tests.
2. What components are worth to test in your development?
   I could say that all, what can be tested in a component is:  
    - If it render: Test that any component render correctly, verify syntax errors. 
    - The output: Go an step further and verify that the output is correct. 
    - Test the state, that change correct 
    - Test the events: Like onClick, onChange, etc. 
    - Edge cases: Anything that could have edge cases like an array that could be empty.
3. Can you apply TDD once you already created components?
   - Yes, TDD refers to write and correct the failed tests before writing new code, so you can test the components are worth it do see that the expect behavior is accomplish, increase the coverage and decrease the number of errors.

## The Challenge

> \*_NOTE:_ Apply TDD as much as you can.\*

1. Find any sub-routine, extract that logic into a separate file and test it out.
2. Run test coverage and save results into a .txt file at ./ - root level. Can you make the total coverage to be above of 60%?

## Acceptance Criteria

- [ ] Meaningful test cases were implemented for components and sub-routines logic.
- [ ] All the test cases were successful.

## Bonus Points

- [ ] Test coverage is above 60%.
