let icon = document.querySelector(".icon");
let parent = document.querySelector(".parent");
let myinput = document.querySelector(".search");
let mybutton = document.querySelector(".btn");
mybutton.addEventListener("click", () => {
  if (myinput.value.trim() === "") {
    alert("bhai likho khuch");
    return;
  }
  myinput.value = myinput.value.toUpperCase();
  let newdiv = document.createElement("div");
  newdiv.className = "todo-item";

  newdiv.innerHTML = `<span>${myinput.value}</span><button class ="del-btn"><i class="fa-solid fa-trash-can"></i></button>`;
  let btnn = newdiv.querySelector(".del-btn");
  btnn.addEventListener("click", () => {
    newdiv.remove();
  });
  parent.appendChild(newdiv);
  myinput.value = "";
  myinput.focus();
});
