const fs = require("fs");

let passed = true;

console.log("================================");
console.log(" Registration Form Test Suite");
console.log("================================\n");

// TC-01
if (fs.existsSync("registration.html")) {
    console.log("TC-01: registration.html exists : PASS");
} else {
    console.log("TC-01: registration.html exists : FAIL");
    passed = false;
}

// Read HTML
let html = "";

if (fs.existsSync("registration1.html")) {
    html = fs.readFileSync("registration1.html", "utf8");
}

// TC-02
if (html.includes('<input type="text" name="full_name"')) {
    console.log("TC-02: Full Name field exists : PASS");
} else {
    console.log("TC-02: Full Name field exists : FAIL");
    passed = false;
}

// TC-03
if (html.includes('<input type="email" name="email"')) {
    console.log("TC-03: Email field exists : PASS");
} else {
    console.log("TC-03: Email field exists : FAIL");
    passed = false;
}

// TC-04
if (html.includes('name="password"')) {
    console.log("TC-04: Password field exists : PASS");
} else {
    console.log("TC-04: Password field exists : FAIL");
    passed = false;
}

// TC-05
if (html.includes('type="submit"')) {
    console.log("TC-05: Submit button exists : PASS");
} else {
    console.log("TC-05: Submit button exists : FAIL");
    passed = false;
}

console.log("\n================================");

if (passed) {
    console.log("ALL TEST CASES PASSED");
    process.exit(0);
} else {
    console.log("SOME TEST CASES FAILED");
    process.exit(1);
}