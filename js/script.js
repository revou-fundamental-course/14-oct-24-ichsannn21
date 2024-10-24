//ini Javascript
document.getElementById("name").textContent = `ich`;

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // tampilan data form yang dimasukkan
    const currentTime = document.getElementById("currentTime");
    currentTime.textContent = new Date().toString();
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputDob").textContent = dob;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputMessage").textContent = message;
  });
});