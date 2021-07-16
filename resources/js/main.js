// var divs = ["lime", "earth-tech", "jal", "busena"];
// var visibleDivId = null;
// function divVisibility(divId) {
//   if (visibleDivId === divId) {
//     visibleDivId = null;
//   } else {
//     visibleDivId = divId;
//   }
//   hideNonVisibleDivs();
// }
// function hideNonVisibleDivs() {
//   var i, divId, div;
//   for (i = 0; i < divs.length; i++) {
//     divId = divs[i];
//     div = document.getElementById(divId);
//     if (visibleDivId === divId) {
//       div.style.display = "block";
//     } else {
//       div.style.display = "none";
//     }
//   }
// }

var divs = ["lime", "earth-tech", "jal", "busena"];

var toggle = document.getElementById("lime-btn");
var content = document.getElementById("lime");

toggle.addEventListener("click", function () {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});
