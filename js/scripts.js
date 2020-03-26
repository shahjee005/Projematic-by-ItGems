
    var modal = document.getElementById('id01'); //Get the modal


window.onclick = function(event) {      //// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
