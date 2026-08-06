const form = document.querySelector("form");

const fullName = document.querySelector("input[name='full_name']");
const email = document.querySelector("input[name='email']");
const mobile = document.querySelector("input[name='mobile_no.']");
const branch = document.querySelector("input[name='branch']");
const password = document.querySelector("input[name='password']");
const confirmPassword = document.querySelector("input[name='confirm_password']");

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

function validateName() {

    const regex = /^[A-Za-z ]{3,}$/;

    if (fullName.value.trim() === "") {

        showError(fullName, "Name is required");
        return false;
    }

    if (!regex.test(fullName.value.trim())) {

        showError(fullName, "Enter a valid name");
        return false;
    }

    showSuccess(fullName);
    return true;
}

function validateEmail() {

    const regex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.value.trim() === "") {

        showError(email, "Email is required");
        return false;
    }

    if (!regex.test(email.value.trim())) {

        showError(email, "Invalid Email");
        return false;
    }

    showSuccess(email);
    return true;
}

function validateMobile() {

    const regex = /^[6-9]\d{9}$/;

    if (mobile.value.trim() === "") {

        showError(mobile, "Mobile number required");
        return false;
    }

    if (!regex.test(mobile.value.trim())) {

        showError(mobile, "Enter valid 10 digit number");
        return false;
    }

    showSuccess(mobile);
    return true;
}

function validateBranch() {

    if (branch.value.trim().length < 2) {

        showError(branch, "Enter valid branch");
        return false;
    }

    showSuccess(branch);
    return true;
}

function validatePassword() {

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value === "") {

        showError(password, "Password required");
        return false;
    }

    if (!regex.test(password.value)) {

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

    if (password.value !== confirmPassword.value) {

        showError(confirmPassword, "Passwords do not match");
        return false;
    }

    showSuccess(confirmPassword);
    return true;
}

fullName.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
mobile.addEventListener("keyup", validateMobile);
branch.addEventListener("keyup", validateBranch);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validateConfirmPassword);

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const valid =
        validateName() &&
        validateEmail() &&
        validateMobile() &&
        validateBranch() &&
        validatePassword() &&
        validateConfirmPassword();

    if (!valid) return;

    const student = {

        fullName: fullName.value,
        email: email.value,
        mobile: mobile.value,
        branch: branch.value,
        password: password.value
    };

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    alert("Registration Successful!");

    form.reset();

    document
        .querySelectorAll("input")
        .forEach(input => {

            input.style.border = "";
        });

});