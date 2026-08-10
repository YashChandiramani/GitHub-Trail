// ===============================
// Registration Data Handler
// ===============================

const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const student = {

        full_name:
            document.querySelector(
                "input[name='full_name']"
            ).value.trim(),

        email:
            document.querySelector(
                "input[name='email']"
            ).value.trim(),

        mobile:
            document.querySelector(
                "input[name='mobile_no']"
            ).value.trim(),

        branch:
            document.querySelector(
                "input[name='branch']"
            ).value.trim(),

        password:
            document.querySelector(
                "input[name='password']"
            ).value
    };


    try {

        const response = await fetch(
            "http://localhost:3000/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );


        const result = await response.json();


        if (response.ok) {

            alert("Registration Successful!");

            console.log(
                "Student saved successfully:",
                result
            );

            registrationForm.reset();

            document
                .querySelectorAll("input")
                .forEach(input => {
                    input.style.border = "";
                });

        } else {

            alert(
                result.message ||
                "Registration failed"
            );
        }


    } catch (error) {

        console.error(
            "Server error:",
            error
        );

        alert(
            "Unable to connect to server."
        );
    }

});