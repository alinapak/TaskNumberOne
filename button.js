let input = document.getElementById('button');
let text = document.querySelector("p");
text.innerText = "Dark Mode";
let body = document.querySelector('body');
function checkMode() {
   if (!input.checked) {
      text.innerText = "Dark Mode";
      body.style.backgroundColor = "white";
      body.style.transition = "background-color .2s linear";
      text.style.color = "black";
   }
   else {
      text.innerText = "Light Mode";
      body.style.backgroundColor = "#111111";
      body.style.transition = "background-color .2s linear";
      text.style.color = "white";
   }
}

