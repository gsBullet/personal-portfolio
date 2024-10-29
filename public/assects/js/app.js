// toggle button

const toggleBtn = document.querySelector(".toggle-btn");
const linksContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  linksContainer.classList.toggle("show");
});

// kinks

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((ele) => ele.classList.remove("active"));
    link.classList.add("active");
  });
});

const btn = document.querySelector(".contact-btn");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

btn.addEventListener("click", async () => {
  if (
    firstName.value.length &&
    lastName.value.length &&
    email.value.length &&
    message.value.length
  ) {
    await fetch("/.netlify/functions/sendMail", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
    
        
        return alert(data);
      })
      .catch((err) => console.log(err));
  } else {
    return alert("Please fill in all fields");
  }
});
