//HTMLCollection

Array.from(document.getElementsByClassName("target")).forEach((div) => {
  div.addEventListener("click", function () {
    alert("Clicked");
  });
});

//Using Static NodeList
//   Array.from(document.querySelectorAll(".target")).forEach((div) => {
//     div.addEventListener("click", function () {
//       alert("Clicked");
//     });
//   });

const newDiv = document.createElement("div");
newDiv.classList.add("target", "after");
newDiv.textContent = ".target AFTER Attaching Listener";
document.querySelector(".boxes").append(newDiv);
