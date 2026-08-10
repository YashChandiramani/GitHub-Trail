const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

const DATA_FILE = path.join(
    __dirname,
    "student.json"
);


// ===============================
// Middleware
// ===============================

app.use(express.json());

app.use(express.static(__dirname));


// ===============================
// Register Student
// ===============================

app.post("/register", (req, res) => {

    try {

        const newStudent = req.body;


        // Read existing students

        let students = [];

        if (fs.existsSync(DATA_FILE)) {

            const data =
                fs.readFileSync(
                    DATA_FILE,
                    "utf8"
                );

            students =
                data.trim()
                    ? JSON.parse(data)
                    : [];
        }


        // Generate next ID

        const nextId =
            students.length > 0
                ? Math.max(
                    ...students.map(
                        student =>
                            Number(student.id) || 0
                    )
                ) + 1
                : 1;


        // Create student object

        const student = {

            id: nextId,

            full_name:
                newStudent.full_name,

            email:
                newStudent.email,

            mobile:
                newStudent.mobile,

            branch:
                newStudent.branch,

            password:
                newStudent.password
        };


        // Add student

        students.push(student);


        // Save student.json

        fs.writeFileSync(
            DATA_FILE,
            JSON.stringify(
                students,
                null,
                4
            ),
            "utf8"
        );


        console.log(
            "New student registered:",
            student
        );


        res.status(201).json({

            message:
                "Student registered successfully",

            student: student

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({

            message:
                "Failed to save student"

        });

    }

});


// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});