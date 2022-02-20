const addTask = document.getElementById("add");
const input = document.getElementById("task");
const tasks = document.querySelector(".tasks");
let toDo = [];
let id = 0;
localId = 0;

for (let T of Object.values(localStorage)) {
  addToPage(T, localId);
  localId++;
}
id = localId + 1;
function add(task) {
  addToPage(task, id);
  localStorage.setItem(`task${id}`, task);
  id++;
}
function addToPage(text, id) {
  const divTask = document.createElement("div");
  divTask.innerHTML = `<div class="task">
      <div class="text">${text}</div>
      <span class="delete" num = "${id}">Delete</span>
      </div>`;
  addRemove(divTask.children[0].children[1]);
  tasks.appendChild(divTask);
}
function addRemove(ele) {
  //   console.log(ele);
  ele.addEventListener("click", () => {
    localStorage.removeItem(`task${ele.getAttribute("num")}`);
    ele.parentElement.remove();
  });
}
addTask.addEventListener("click", (e) => {
  e.preventDefault();
  add(input.value);
});

// addTask.addEventListener("click", (e) => {
//   e.preventDefault();
//   const divTask = document.createElement("div");
//   divTask.innerHTML = `<div class="task">
//   <div class="text">${input.value}</div>
//   <span class="delete">Delete</span>
// </div>`;
//   tasks.appendChild(divTask);
//   let dels = document.querySelectorAll(".delete");
//   dels.forEach((del) => {
//     del.addEventListener("click", () => {
//       del.parentElement.remove();
//     });
//   });
// });
