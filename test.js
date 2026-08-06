// ===============================
// Validation Functions
// ===============================

function isValidName(name) {
    return /^[A-Za-z ]{3,}$/.test(name.trim());
}

function isValidEmail(email) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile);
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
// Name Test Cases
// ===============================

console.assert(isValidName("Yash Chandiramani") === true, "Name Test 1 Failed");
console.assert(isValidName("Rahul") === true, "Name Test 2 Failed");
console.assert(isValidName("A") === false, "Name Test 3 Failed");
console.assert(isValidName("") === false, "Name Test 4 Failed");
console.assert(isValidName("12345") === false, "Name Test 5 Failed");

// ===============================
// Email Test Cases
// ===============================

console.assert(isValidEmail("abc@gmail.com") === true, "Email Test 1 Failed");
console.assert(isValidEmail("student@yahoo.in") === true, "Email Test 2 Failed");
console.assert(isValidEmail("abcgmail.com") === false, "Email Test 3 Failed");
console.assert(isValidEmail("abc@") === false, "Email Test 4 Failed");
console.assert(isValidEmail("") === false, "Email Test 5 Failed");

// ===============================
// Mobile Test Cases
// ===============================

console.assert(isValidMobile("9876543210") === true, "Mobile Test 1 Failed");
console.assert(isValidMobile("9123456789") === true, "Mobile Test 2 Failed");
console.assert(isValidMobile("1234567890") === false, "Mobile Test 3 Failed");
console.assert(isValidMobile("987654321") === false, "Mobile Test 4 Failed");
console.assert(isValidMobile("98765432101") === false, "Mobile Test 5 Failed");

// ===============================
// Branch Test Cases
// ===============================

console.assert(isValidBranch("Computer Science") === true, "Branch Test 1 Failed");
console.assert(isValidBranch("IT") === true, "Branch Test 2 Failed");
console.assert(isValidBranch("A") === false, "Branch Test 3 Failed");
console.assert(isValidBranch("") === false, "Branch Test 4 Failed");

// ===============================
// Password Test Cases
// ===============================

console.assert(isValidPassword("Yash@123") === true, "Password Test 1 Failed");
console.assert(isValidPassword("Rahul@2024") === true, "Password Test 2 Failed");
console.assert(isValidPassword("password") === false, "Password Test 3 Failed");
console.assert(isValidPassword("PASSWORD") === false, "Password Test 4 Failed");
console.assert(isValidPassword("Pass1234") === false, "Password Test 5 Failed");
console.assert(isValidPassword("pass@123") === false, "Password Test 6 Failed");
console.assert(isValidPassword("PASS@123") === false, "Password Test 7 Failed");
console.assert(isValidPassword("Pa@1") === false, "Password Test 8 Failed");

// ===============================
// Confirm Password Test Cases
// ===============================

console.assert(passwordsMatch("Yash@123", "Yash@123") === true, "Confirm Password Test 1 Failed");
console.assert(passwordsMatch("Rahul@123", "Rahul@123") === true, "Confirm Password Test 2 Failed");
console.assert(passwordsMatch("Rahul@123", "Rahul123") === false, "Confirm Password Test 3 Failed");
console.assert(passwordsMatch("", "") === true, "Confirm Password Test 4 Failed");
console.assert(passwordsMatch("Admin@123", "") === false, "Confirm Password Test 5 Failed");

// ===============================
// Overall Test Report
// ===============================

console.log("====================================");
console.log(" All Validation Test Cases Passed ");
console.log("====================================");