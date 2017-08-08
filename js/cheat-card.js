var cheatCard = {
  showHint: function () {
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // document.getElementById("cheatTest").addEventListener("click",
    //   function() {testButton(); });
    document.getElementById("radio-pairs").addEventListener("click",
      function() {radioChanged("radio-pairs"); });
    document.getElementById("radio-hard").addEventListener("click",
      function() {radioChanged("radio-hard"); });
    document.getElementById("radio-soft").addEventListener("click",
      function() {radioChanged("radio-soft"); });

    function radioChanged(optionId) {
      var optionMap = {
        "radio-pairs": "pairs",
        "radio-hard": "hard",
        "radio-soft": "soft"
      };
      // var optionClicked = document.getElementById(optionId).checked;
      var cheatCard = document.getElementById("softCheatCard");
      var cheatCardFileName = "cheat-card/" + optionMap[optionId] + "-cheat.png";
      cheatCard.src = cheatCardFileName;
    }
  }
}
