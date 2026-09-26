const registerTab = document.getElementById("registerTab");
const loginTab = document.getElementById("loginTab");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  message.textContent = "";
});

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  message.textContent = "";
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
    course: document.getElementById("course").value
  };

  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok) {
    message.textContent = result.message;
    message.style.color = "green";

    registerForm.reset();

    setTimeout(() => {
      loginTab.click();
      document.getElementById("loginEmail").value = data.email;
    }, 800);
  } else {
    message.textContent = result.message;
    message.style.color = "red";
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value
  };

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok) {
    localStorage.setItem(
      "loggedInStudent",
      JSON.stringify(result.student)
    );

    window.location.href = "/welcome.html";
  } else {
    message.textContent = result.message;
    message.style.color = "red";
  }
});
