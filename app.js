const btn = document.querySelector(".btn");
const img = document.querySelector(".img");

const icons = document.querySelectorAll(".icon");
const user = document.querySelector(".user");
const email = document.querySelector(".email");
const date = document.querySelector(".date");
const geoLocation = document.querySelector(".location");
const phone = document.querySelector(".phone");
const password = document.querySelector(".password");

const userIntro = document.querySelector(".user-intro");
const userName = document.querySelector(".user-name");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => {
      const randomUser = data.results[0];
      img.src = randomUser.picture.large;
      console.log(data);
      userName.innerHTML = randomUser.name.first + " " + randomUser.name.last;
      user.dataset.value = randomUser.name.first + " " + randomUser.name.last;
      email.dataset.value = randomUser.email;
      console.log(email.dataset.value);
      date.dataset.value = randomUser.dob.date;
      geoLocation.dataset.value = randomUser.location.city + ', ' + randomUser.location.country;
      phone.dataset.value = randomUser.phone;
      password.dataset.value = randomUser.login.password;
    });
});

document.body.addEventListener("click", (e) => {
  if (e.target.id === "icon") {
    const userValue = e.target.parentElement.dataset.value;
    const userTitle = e.target.parentElement.dataset.title;

    userName.innerHTML = userValue;
    userIntro.innerHTML = userTitle;
    console.log(userValue, userTitle);
    icons.forEach((el) => el.classList.remove("active"));
    e.target.parentElement.classList.add("active");
  }
});
