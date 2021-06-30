// Variables and Constants
const quesList = document.querySelector(".question-list");
const small = document.querySelectorAll(".small");
const distance = document.querySelectorAll(".distance");
const ShowAnswer = document.getElementsByTagName("small");

// EventListener
quesList.addEventListener("click", toggleAnswer);
let showAns = false;
// Function
function toggleAnswer(e) {
  if (small) {
    console.log("nomay");
    if (!showAns) {
      small.forEach((item) => item.classList.add("small-content"));
      distance.forEach((content) => {
        content.classList.add("show");
        content.classList.remove("close");
      });

      showAns = true;
    } else {
      small.forEach((item) => item.classList.remove("small-content"));
      distance.forEach((content) => {
        content.classList.remove("show");
        content.classList.add("close");
      });

      showAns = false;
    }
  }
}
