const label = document.getElementById("label");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("decrement");

let count = 0;

incrementBtn.onclick = function() {
  count++;
  label.innerText = count;
}

resetBtn.onclick = function() {
  count = 0;
  label.innerText = count; 
}

decrementBtn.onclick = function() {
  count--;
  label.innerText = count;
}