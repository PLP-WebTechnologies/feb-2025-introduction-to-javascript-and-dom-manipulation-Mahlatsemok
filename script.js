function onChange() {
    let element = document.getElementById("change-text");
    element.innerHTML = "You clicked the button!";
}

function changeStyle() {
    const body = document.getElementById("body");
    body.style.backgroundColor = "black";
    body.style.color = "white";
}


const readMoreBtn = document.querySelector(".readMoreBtn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", () => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
