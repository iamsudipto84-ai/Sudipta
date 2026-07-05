console.log("Portfolio Website Loaded Successfully!");
document.documentElement.style.scrollBehavior = "smooth";
const text = [
  "Frontend Web Developer",
  "Website Designer",
  "Freelancer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
function toggleMenu(){

document.querySelector("nav").classList.toggle("active");

}

