let position = 0;
let sliders = document.querySelectorAll(".slideritem");
let total = sliders.length;
console.log(total);

let btnprev = document.getElementById("btnprev");
let btnnext = document.getElementById("btnnext");

btnprev.addEventListener("click", function () {
  preveiousslide();
});

btnnext.addEventListener("click", function () {
  nextslide();
});

function updateposition() {
    
  sliders.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });

  sliders[position].classList.add("active");

  //dot
  dots.forEach((dot) => {
    dot.classList.remove("dotactive");
  });
  dots[position].classList.add("dotactive");
}

function preveiousslide() {
  if (position == 0) {
    position = total - 1;
  } else {
    position--;
  }

  updateposition();
}

function nextslide() {
  if (position == total - 1) {
    position = 0;
  } else {
    position++;
  }

  updateposition();
}

let dotbox = document.querySelector(".slidedots");
//create dot

sliders.forEach((slide) => {
  let dot = document.createElement("div");
  //   console.log(dot);
  dot.classList.add("dot");
  dotbox.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");
// console.log(dots);
dots[position].classList.add("dotactive");

//dot click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = index;
    updateposition();
  });
});

setInterval(() => {
  if (position == total - 1) {
    position = 0;
  } else {
    position++;
  }
  updateposition();
}, 4000);
