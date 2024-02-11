// Get the modal
var modal = document.getElementById("thankYou");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeButton")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  location.assign("index.html");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    location.assign("index.html");
  }
}