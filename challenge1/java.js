// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "samara"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othma",
//   "Amani",
//   "Samia",
//   "Anwer",
// ];
// let numOfAdmins = myAdmins.indexOf("Stop");
// document.write(`<div>We have ${numOfAdmins} Admins</div><hr>`);
// for (let i = 0; i < numOfAdmins; i++) {
//   document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
//   document.write(`<h1>Team Members: </h1>`);
//   let k = 1;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === myAdmins[i][0]) {
//       document.write(`<p>- ${k++} ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`<hr>`);
// }
// //Challenge 2
// function showDetails(p1, p2, p3) {
//   let name, age, avilable;
//   typeof p1 === "string"
//     ? (name = p1)
//     : typeof p2 === "string"
//     ? (name = p2)
//     : (name = p3);
//   typeof p1 === "number"
//     ? (age = p1)
//     : typeof p2 === "number"
//     ? (age = p2)
//     : (age = p3);
//   typeof p1 === "boolean"
//     ? (avilable = p1)
//     : typeof p2 === "boolean"
//     ? (avilable = p2)
//     : (avilable = p3);
//   avilable ? (avilable = "avilable") : (avilable = "not avilable");
//   console.log(
//     `Hello ${name}, Your age is ${age}, You are ${avilable} for work.`
//   );
// }
// showDetails("abdou", 15, true);
// showDetails(true, 15, "abdou");
// showDetails(15, "abdou", false);

// // challenge 3

// // let names = function (...name) {
// //   return `String [${name.join("], [")}] => Done`;
// // };

// let names = (...name) => `String [${name.join("], [")}] => Done`;

// let up = (x) => x.toUpperCase();

//page challenge

//header
let header = document.createElement("header");
let logo = document.createElement("h1");
let menu = document.createElement("ul");
let logoText = document.createTextNode("Elzero");
document.body.style.backgroundColor = "#f1f1f1";
logo.className = "Logo";
logo.appendChild(logoText);
menu.innerHTML = `<li>Home</li>
<li>About</li>
<li>Service</li>
<li>Contact</li>`;
menu.className = "menu";

header.appendChild(logo);
header.appendChild(menu);
document.body.appendChild(header);

let lis = document.getElementsByTagName("li");
for (let i = 0; i < 4; i++) {
  lis[i].style.marginRight = "50px";
}
header.style.cssText =
  "background-color: white;height: 60px;display: flex;justify-content: space-between; align-items: center;";
menu.style.cssText =
  "display: flex;list-style: none;justify-content:space-between; ";
logo.style.color = "#024e63";
logo.style.marginLeft = "40px";

let content = document.createElement("div");
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let info = document.createTextNode("product");

  span.innerHTML = `${i + 1}`;
  product.appendChild(span);
  span.style.cssText =
    "display: block;font-size:20px;font-weight:bold;margin-bottom: 20px;margin-top: 40px";
  product.appendChild(info);
  product.className = "product";
  product.style.cssText =
    "background-color: white;text-align: center;height:150px";
  content.appendChild(product);
}
document.body.appendChild(content);

content.style.cssText =
  "display: grid;grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));row-gap: 20px;column-gap: 20px;margin-top:40px;";
let product = document.querySelectorAll(".product");

let footer = document.createElement("div");
let footerText = document.createTextNode("Copyright 2021");

footer.appendChild(footerText);
document.body.appendChild(footer);

footer.style.cssText =
  "background-color: #024e63;height: 60px;display: flex;justify-content: center; align-items: center;margin-top:40px;color:white";
