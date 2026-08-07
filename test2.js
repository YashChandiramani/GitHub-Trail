const fs = require("fs");
let passed = true;
console.log("regsitration test");
if(fs.existsSync("registration1.html")){
    console.log("TC-01 : registration.html exists : PASS");
}
else{
    console.log("TC-01: registration.html exists : FAIL");
    passed = false;
}