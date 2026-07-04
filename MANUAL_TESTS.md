## TC-001: Verify Sign Up Page Loads

### Preconditions

- Application is running.

### Steps

1. Open the application.
2. Navigate to the Sign Up page.

### Expected Result

- The Sign Up form is displayed.
- Name, Last Name, Email, Password, and Confirm Password fields are visible.
- The "Sign Up" button is visible.
- The "Log In" link is visible.

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

- All entered values are accepted.
- No validation errors are displayed.

---

## TC-003: Verify Invalid Name Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Name: 1234@

### Steps

1. Enter an invalid Name.

### Expected Result

- Validation message is displayed or invalid input is rejected.

---

## TC-004: Verify Invalid Last Name Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Last Name: 3324@32!

### Steps

1. Enter an invalid Last Name.

### Expected Result

- Validation message is displayed or invalid input is rejected.

---

## TC-005: Verify Email Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Field: Value
Email: jh324

### Steps

1. Enter an invalid email address.

### Expected Result

- Email validation message is displayed.
- Form cannot be submitted.

---

## TC-006: Verify Password Validation

### Preconditions

- User is on the Sign Up page.

### Test Data

Password: 32G |

### Steps

1. Enter an invalid password.

### Expected Result

- Password validation message is displayed.
- Password requirements are shown to the user.

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

### Expected Result

- Validation message indicates that passwords do not match.

---

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

---

## TC-009: Verify Sign Up with Invalid Data

### Preconditions

- User is on the Sign Up page.

### Test Data

Use the invalid data defined in the test plan.

### Steps

1. Enter invalid information into the form.
2. Click the "Sign Up" button.

### Expected Result

- Registration is prevented.
- Appropriate validation messages are displayed.

---

## TC-010: Verify Sign Up with Mismatched Passwords

### Preconditions

- User is on the Sign Up page.

### Test Data

Password: JohnJohnson123
Confirm Password: JohnJohnson12

### Steps

1. Fill all fields with valid information.
2. Enter different values for Password and Confirm Password.
3. Click the "Sign Up" button.

### Expected Result

- Registration is prevented.
- Password mismatch validation message is displayed.

---

## TC-011: Verify Successful Registration Page

### Preconditions

- Registration has been completed successfully.

### Steps

1. Complete a successful registration.

### Expected Result

- Success page is displayed.
- User receives confirmation that registration was successful.

---

## TC-012: Verify Log In Link

### Preconditions

- User is on the Sign Up page.

### Steps

1. Locate the **Log In** link.
2. Click the link.

### Expected Result

- User is redirected to the Log In page successfully.
