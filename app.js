// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var targetID
  var turnSymbol = "O"

  $('.col-md-4').click(function() {
    /* grabs unique square id and updates the targetID variable */
    targetID = (this.id);

    /* checks to see if the square is clickable */
    if (targetID !== "notAvail") {

      /* switches game piece */
      if (turnSymbol === "O") {
        turnSymbol = "X";
      }
      else {
        turnSymbol = "O"
      }

      

    };

  }); /* end of on click function */
}); /* end of document ready function */
