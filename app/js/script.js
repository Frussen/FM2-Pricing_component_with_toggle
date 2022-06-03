const toggle = document.getElementById("cb");

window.addEventListener("keydown", function() {
  if(toggle.checked == true) {
    toggle.checked = false;
  }
  else {
    toggle.checked = true;
  }
})