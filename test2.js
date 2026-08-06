const fs = require("fs");
let passed = true;
console.log("regsitration test");
if(fs.existSync("registration.html")){
    console.log("TC-01 : registration.html exists : PASS");
}
else{
    console.log("TC-01: registration.html exists : FAIL");
    passed = false;
}