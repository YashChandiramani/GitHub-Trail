const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "students.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]", "utf8");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function readStudents() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function writeStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2), "utf8");
}

// Register student
app.post("/api/register", (req, res) => {
  const { name, email, password, course } = req.body;

  if (!name || !email || !password || !course) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const students = readStudents();

  const existingStudent = students.find(
    student => student.email.toLowerCase() === email.toLowerCase()
  );

  if (existingStudent) {
    return res.status(409).json({ message: "Email is already registered." });
  }

  const student = {
    id: Date.now(),
    name,
    email,
    password,
    course
  };

  students.push(student);
  writeStudents(students);

  res.status(201).json({
    message: "Registration successful!",
    student: {
      name: student.name,
      email: student.email,
      course: student.course
    }
  });
});

// Login student
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const students = readStudents();

  const student = students.find(
    s =>
      s.email.toLowerCase() === email.toLowerCase() &&
      s.password === password
  );

  if (!student) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  res.json({
    message: "Login successful!",
    student: {
      name: student.name,
      email: student.email,
      course: student.course
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
