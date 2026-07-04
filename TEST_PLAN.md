## 1. Objective

Test the functionality of the sign up form for the project. Check the input elements, login page and successful registration page

## 2. Scope

### In Scope

- UI
- Input Elements
- Sign Up button
- Login page availability
- Success page availability

### Out Of Scope

- Cross browser functionality
- Mobile support
- Performance benchmarking
- Login functionality
- Account activation via email

## 3. Features to test

- UI loads (Sign up form page is displayed)
- Input elements (user is able to type in input elements)
- Email validation functionalty (Input checks if email is properly typed)
- Password validation functionality (Input checks if password meets set criteria)
- Password confirmation functionality (Input checks if password and confirm password input match)
- Sign up button functionality
- Successfull registration page is displayed
- Log In page link is visible and user is able to click on it to be directed to the Log in Page

## 4. Test Strategy

Manual testing of the mentioned features will be performed. After manual testing is done, automation testing will be perfomed

## 5. Test Enviroment

OS: Ubuntu 24.04
Browser: Google Chrome Version 148.0.7778.167

## 6. Test Data

### Valid

Name: John
Last Name: Johnson
Email: johnjohnson@gmail.com
Password: JohnJohnson123 (8 characters, one uppercase, one lowercase, one number)
Confirm Password: JohnJohnson123

### Invalid

Name: 1234@
Last Name: 3324@32!
Email: jh324
Password: 32G
Confirm Password 32g

## 7. Test Scenarios

1. Visibilty of the Sign Up Form
2. Inputing valid data in the input fields
3. Inputting invalid data in the input fields
4. Clicking the sign up button with valid data
5. Clicking the sign up button with invalid data
6. Clicking the sign up button when passwords don't match
7. Clicking the "Log In" page link

## 8. Automation plan

Automation will be implemented using Playwright
