var arr = [
  { dp: "a.png", story: "a2.png" },
  { dp: "b.png", story: "b2.png" },
  { dp: "c.png", story: "c2.png" },
  { dp: "d.png", story: "d2.png" },
  { dp: "e.png", story: "e2.png" },
  { dp: "f.png", story: "f2.png" },
  { dp: "g.png", story: "g2.png" },
];

var stories = document.querySelector(".stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
            </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  console.log(arr[dets.target.id].story);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 1000);
});
