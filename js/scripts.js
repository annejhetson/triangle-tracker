var Triangle = {
  type: function() {
    if (this.side1 === this.side2 && this.side2 === this.side3)
      return "equilateral";
    else if ((this.side1 === this.side2 && this.side2 != this.side3) ||
              (this.side1 === this.side3 && this.side3 != this.side2) ||
              (this.side2 === this.side3 && this.side3 != this.side1))
      return "isosceles";
    else
      return "scalene";
  },

  invalid: function() {
    if (((this.side1 + this.side2) <= this.side3) ||
     ((this.side2 + this.side3) <= this.side1) ||
     ((this.side1 + this.side3) <= this.side2))
      return true;
    return false;
  }
};

$(document).ready(function() {
  $("form#newInput").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = parseFloat($("input#side1").val());
    var inputtedSide2 = parseFloat($("input#side2").val());
    var inputtedSide3 = parseFloat($("input#side3").val());
    var newTriangle = Object.create(Triangle);

    newTriangle.side1 = inputtedSide1;
    newTriangle.side2 = inputtedSide2;
    newTriangle.side3 = inputtedSide3;

    if (newTriangle.invalid()) {
      alert("That is not a valid triangle.");
    } else {
      $("p#result").text(newTriangle.type());
      $("p#result").show();
    }
  });
});
