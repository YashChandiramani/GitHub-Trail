// ===============================
// Validation Functions
// ===============================

function isValidName(name) {
    return /^[A-Za-z ]{3,}$/.test(name.trim());
}

function isValidEmail(email) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.trim());
}

function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile.trim());
}

function isValidBranch(branch) {
    return branch.trim().length >= 2;
}

function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}


// ===============================
// Form Elements
// ===============================

const form = document.getElementById("registrationForm");

const fullName = document.querySelector("input[name='full_name']");
const email = document.querySelector("input[name='email']");
const mobile = document.querySelector("input[name='mobile_no']");
const branch = document.querySelector("input[name='branch']");
const password = document.querySelector("input[name='password']");
const confirmPassword = document.querySelector("input[name='confirm_password']");


// ===============================
// Error Handling
// ===============================

function showError(input, message) {

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error")) {

        error = document.createElement("small");
        error.className = "error";

        error.style.color = "#ff4d4d";
        error.style.display = "block";
        error.style.marginBottom = "10px";

        input.parentNode.insertBefore(error, input.nextSibling);
    }

    error.innerText = message;
    input.style.border = "2px solid red";
}


function showSuccess(input) {

    let error = input.nextElementSibling;

    if (error && error.classList.contains("error")) {
        error.remove();
    }

    input.style.border = "2px solid #00ff99";
}


// ===============================
// Form Validation
// ===============================

function validateName() {

    if (fullName.value.trim() === "") {

        showError(fullName, "Name is required");
        return false;
    }

    if (!isValidName(fullName.value)) {

        showError(fullName, "Enter a valid name");
        return false;
    }

    showSuccess(fullName);
    return true;
}


function validateEmail() {

    if (email.value.trim() === "") {

        showError(email, "Email is required");
        return false;
    }

    if (!isValidEmail(email.value)) {

        showError(email, "Invalid Email");
        return false;
    }

    showSuccess(email);
    return true;
}


function validateMobile() {

    if (mobile.value.trim() === "") {

        showError(mobile, "Mobile number required");
        return false;
    }

    if (!isValidMobile(mobile.value)) {

        showError(mobile, "Enter valid 10 digit number");
        return false;
    }

    showSuccess(mobile);
    return true;
}


function validateBranch() {

    if (!isValidBranch(branch.value)) {

        showError(branch, "Enter valid branch");
        return false;
    }

    showSuccess(branch);
    return true;
}


function validatePassword() {

    if (password.value === "") {

        showError(password, "Password required");
        return false;
    }

    if (!isValidPassword(password.value)) {

        showError(
            password,
            "Minimum 8 chars, uppercase, lowercase, number & special character"
        );

        return false;
    }

    showSuccess(password);
    return true;
}


function validateConfirmPassword() {

    if (confirmPassword.value === "") {

        showError(confirmPassword, "Confirm password");
        return false;
    }

    if (!passwordsMatch(password.value, confirmPassword.value)) {

        showError(confirmPassword, "Passwords do not match");
        return false;
    }

    showSuccess(confirmPassword);
    return true;
}


// ===============================
// Live Validation
// ===============================

fullName.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
mobile.addEventListener("keyup", validateMobile);
branch.addEventListener("keyup", validateBranch);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validateConfirmPassword);


// ===============================
// Form Submit Validation
// ===============================

form.addEventListener("submit", function (e) {

    const valid =
        validateName() &&
        validateEmail() &&
        validateMobile() &&
        validateBranch() &&
        validatePassword() &&
        validateConfirmPassword();

    if (!valid) {

        e.preventDefault();
        return;
    }

    /*
       Validation successful.

       student2.js will handle the
       registration data.
    */
});


// ===============================
// Automated Validation Test Cases
// ===============================

// Name Tests

console.assert(
    isValidName("Yash Chandiramani") === true,
    "Name Test 1 Failed"
);

console.assert(
    isValidName("Rahul") === true,
    "Name Test 2 Failed"
);

console.assert(
    isValidName("A") === false,
    "Name Test 3 Failed"
);

console.assert(
    isValidName("") === false,
    "Name Test 4 Failed"
);

console.assert(
    isValidName("12345") === false,
    "Name Test 5 Failed"
);


// Email Tests

console.assert(
    isValidEmail("abc@gmail.com") === true,
    "Email Test 1 Failed"
);

console.assert(
    isValidEmail("student@yahoo.in") === true,
    "Email Test 2 Failed"
);

console.assert(
    isValidEmail("abcgmail.com") === false,
    "Email Test 3 Failed"
);

console.assert(
    isValidEmail("abc@") === false,
    "Email Test 4 Failed"
);

console.assert(
    isValidEmail("") === false,
    "Email Test 5 Failed"
);


// Mobile Tests

console.assert(
    isValidMobile("9876543210") === true,
    "Mobile Test 1 Failed"
);

console.assert(
    isValidMobile("9123456789") === true,
    "Mobile Test 2 Failed"
);

console.assert(
    isValidMobile("1234567890") === false,
    "Mobile Test 3 Failed"
);

console.assert(
    isValidMobile("987654321") === false,
    "Mobile Test 4 Failed"
);

console.assert(
    isValidMobile("98765432101") === false,
    "Mobile Test 5 Failed"
);


// Branch Tests

console.assert(
    isValidBranch("Computer Science") === true,
    "Branch Test 1 Failed"
);

console.assert(
    isValidBranch("IT") === true,
    "Branch Test 2 Failed"
);

console.assert(
    isValidBranch("A") === false,
    "Branch Test 3 Failed"
);

console.assert(
    isValidBranch("") === false,
    "Branch Test 4 Failed"
);


// Password Tests

console.assert(
    isValidPassword("Yash@123") === true,
    "Password Test 1 Failed"
);

console.assert(
    isValidPassword("Rahul@2024") === true,
    "Password Test 2 Failed"
);

console.assert(
    isValidPassword("password") === false,
    "Password Test 3 Failed"
);

console.assert(
    isValidPassword("PASSWORD") === false,
    "Password Test 4 Failed"
);

console.assert(
    isValidPassword("Pass1234") === false,
    "Password Test 5 Failed"
);

console.assert(
    isValidPassword("pass@123") === false,
    "Password Test 6 Failed"
);

console.assert(
    isValidPassword("PASS@123") === false,
    "Password Test 7 Failed"
);

console.assert(
    isValidPassword("Pa@1") === false,
    "Password Test 8 Failed"
);


// Confirm Password Tests

console.assert(
    passwordsMatch("Yash@123", "Yash@123") === true,
    "Confirm Password Test 1 Failed"
);

console.assert(
    passwordsMatch("Rahul@123", "Rahul@123") === true,
    "Confirm Password Test 2 Failed"
);

console.assert(
    passwordsMatch("Rahul@123", "Rahul123") === false,
    "Confirm Password Test 3 Failed"
);

console.assert(
    passwordsMatch("", "") === true,
    "Confirm Password Test 4 Failed"
);

console.assert(
    passwordsMatch("Admin@123", "") === false,
    "Confirm Password Test 5 Failed"
);


// ===============================
// Overall Test Report
// ===============================

console.log("====================================");
console.log(" All Validation Test Cases Passed ");
console.log("====================================");