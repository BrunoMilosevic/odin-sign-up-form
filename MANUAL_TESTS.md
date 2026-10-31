## Application location

https://brunomilosevic.github.io/odin-sign-up-form/

## TC-001: Verify Sign Up Page Loads

### Steps

1. Open the website.

### Expected Result

- The Sign Up form is displayed.
- Name, Last Name, Email, Password, and Confirm Password fields are visible.
- The "Sign Up" button is visible.
- The "Log In" link is visible.

### Actual Result

Everything on the site is visible

### Test Status

Pass

---

## TC-002: Verify Valid Input in All Fields

### Preconditions

- User is on the Sign Up page.

### Test Data

Name: John
Last Name: Johnson
Email: johnjohnson@gmail.com
Password: JohnJohnson123
Confirm Password: JohnJohnson123

### Steps

1. Enter a valid Name.
2. Enter a valid Last Name.
3. Enter a valid Email.
4. Enter a valid Password.
5. Enter the same password into Confirm Password.

### Expected Result

Validation errors are not displayed.

### Actual Result

Validation errors are not displayed

### Test Status

Pass

---

## TC-003: Verify Invalid Name Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Name: 1234@

### Steps

1. Enter an invalid Name.
2. Enter valid data in other input fields
3. Click on a "Create Account" button.

### Expected Result

- Red border is displayed around "Name" input field

### Actual Result

- Red border is not displayed around "Name" input field

### Test Status

Fail

---

## TC-004: Verify Invalid Last Name Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Last Name: 3324@32!

### Steps

1. Enter an invalid Last Name.
2. Enter valid data in other input fields
3. Click on a "Create Account" button.

### Expected Result

- Red border is displayed around "Last Name" input field

### Actual Result

- Red border is not displayed around "Last Name" input field

### Test Status

Fail

---

## TC-005: Verify Email Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Email: jh324

### Steps

1. Enter an invalid email address.
2. Enter valid data in other input fields
3. Click on a "Create Account" button.

### Expected Result

- Red border is displayed around "Email" input field
- Form cannot be submitted.

### Actual Result

- Red border is displayed around "Email" input field
- Form can be submitted

### Test Status

Fail

## TC-006: Verify Password Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Password: 32G

### Steps

1. Enter an invalid password.
2. Enter valid data in other input fields
3. Click on a "Create Account" button.

### Expected Result

- Red border is displayed around "Password" input field
- Password requirements are shown to the user.

### Actual Result

- Red border is displayed around "Password" input field
- Password requirements are not shown to the user

### Test status

Fail

---

## TC-007: Verify Password Confirmation Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Password: JohnJohnson123
Confirm Password: 32g

### Steps

1. Enter a valid password.
2. Enter a different value into Confirm Password.
3. Click on a "Create Account" button.

### Expected Result

- Validation message indicates that passwords do not match.

### Actual Result

- Validation message indicates that passwords do not match.

### Test status

Pass

## TC-008: Verify Successful Registration

### Preconditions

- User is on the Sign Up page.

### Test Data

Name: John
Last Name: Johnson
Email: johnjohnson@gmail.com
Password: JohnJohnson123
Confirm Password: JohnJohnson123

### Steps

1. Fill in all fields with valid data.
2. Click the "Sign Up" button.

### Expected Result

- Registration is successful.
- User is redirected to the Successful Registration page.

### Actual Result

- Registration is successful
- User is redirected to the Successful Registration page.

### Test Status

Pass

## TC-009: Verify Sign Up with Invalid Data

### Preconditions

- User is on the Sign Up page.

### Test Data

Use the invalid data defined in the test plan.

### Steps

1. Enter invalid information into the form.
2. Click the "Create Account" button.

### Expected Result

- Registration is prevented.
- Appropriate validation messages are displayed.

### Actual Result

- Registration is not prevented and no validation messages are displayed

### Test Status

Fail

## TC-010: Verify Sign Up with Mismatched Passwords

### Preconditions

- User is on the Sign Up page.

### Test Data

Password: JohnJohnson123
Confirm Password: JohnJohnson12

### Steps

1. Fill all fields with valid information.
2. Enter different values for Password and Confirm Password.
3. Click the "Create Account" button.

### Expected Result

- Registration is prevented.
- Password mismatch validation message is displayed.

### Actual Result

- Registration is prevented and password mismatch validation message is displayed

### Test Status

Pass

## TC-011: Verify Successful Registration Page

### Preconditions

- Registration has been completed successfully with valid data.

### Steps

1. Complete a successful registration with valid data.

### Expected Result

- Success page is displayed.
- User receives confirmation that registration was successful.

### Actual Result

- Success page is displayed and confirmation on registration was successful

### Test Status

Pass

## TC-012: Verify Log In Link

### Preconditions

- User is on the Sign Up page.

### Steps

1. Locate the "Log In" link under the "Create Account" button.
2. Click the link.

### Expected Result

- User is redirected to the Log In page successfully.

### Actual Result

- User is redirected to the Log In page

### Test Status

Pass
