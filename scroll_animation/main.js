const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
  const triggerBtton = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if (boxTop < triggerBtton) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
