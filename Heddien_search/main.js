let btn = document.getElementsByClassName("btn");
let search = document.querySelector(".search");
let input = document.querySelector(".input");

btn[0].addEventListener("click", (e) => {
  e.preventDefault();
  search.classList.toggle("active");
  input.focus();
});
