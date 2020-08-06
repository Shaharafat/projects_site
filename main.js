let project = document.querySelectorAll(".project");
let project_count = document.querySelector(".project_count");
let i = 1;
// counter
setTimeout(function count() {
  if (i <= project.length) {
    let count = String(i).padStart(3, "0");
    project_count.innerHTML = count;
    i++;
  } else {
    return;
  }

  setTimeout(count, 100);
}, 100);
