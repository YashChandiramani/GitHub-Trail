const fs = require("fs");

let passed = true;

// TC-01 : Check registration.html
if (fs.existsSync("registration.html")) {
    console.log("TC-01 : registration.html exists : PASS");
}
else {
    console.log("TC-01 : registration.html exists : FAIL");
    passed = false;
}

// TC-02 : Check style.css
if (fs.existsSync("style.css")) {
    console.log("TC-02 : style.css exists : PASS");
}
else {
    console.log("TC-02 : style.css exists : FAIL");
    passed = false;
}

// TC-03 : Check script.js
if (fs.existsSync("script.js")) {
    console.log("TC-03 : script.js exists : PASS");
}
else {
    console.log("TC-03 : script.js exists : FAIL");
    passed = false;
}

// TC-04 : Check student.json
if (fs.existsSync("student.json")) {
    console.log("TC-04 : student.json exists : PASS");
}
else {
    console.log("TC-04 : student.json exists : FAIL");
    passed = false;
}

// Read JSON
const students = JSON.parse(
    fs.readFileSync("student.json", "utf8")
);

const student = students[0];

// TC-05 : Name Validation
if (student.full_name.trim() !== "") {
    console.log("TC-05 : Name Validation : PASS");
}
else {
    console.log("TC-05 : Name Validation : FAIL");
    passed = false;
}

// TC-06 : Email Validation
if (student.email.includes("@")) {
    console.log("TC-06 : Email Validation : PASS");
}
else {
    console.log("TC-06 : Email Validation : FAIL");
    passed = false;
}

// TC-07 : Mobile Validation
if (student.mobile.length === 10) {
    console.log("TC-07 : Mobile Validation : PASS");
}
else {
    console.log("TC-07 : Mobile Validation : FAIL");
    passed = false;
}

// TC-08 : Branch Validation
if (student.branch !== "") {
    console.log("TC-08 : Branch Validation : PASS");
}
else {
    console.log("TC-08 : Branch Validation : FAIL");
    passed = false;
}

// TC-09 : Password Validation
if (student.password.length >= 6) {
    console.log("TC-09 : Password Validation : PASS");
}
else {
    console.log("TC-09 : Password Validation : FAIL");
    passed = false;
}

// TC-10 : Registration Successful
if (passed) {
    console.log("TC-10 : Registration Successful : PASS");
    console.log("\nBuild SUCCESS");
    process.exit(0);
}
else {
    console.log("TC-10 : Registration Successful : FAIL");
    console.log("\nBuild FAILED");
    process.exit(1);
}