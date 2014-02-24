describe("Triangle", function() {
  describe("type", function() {
    it("returns \"equilateral\" if all sides are equal in length", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 3;
      testTriangle.side3 = 3;
      testTriangle.type().should.equal("equilateral");
    });

    it("returns \"isosceles\" if 2 sides are equal in length", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 5;
      testTriangle.side3 = 5;
      testTriangle.type().should.equal("isosceles");
    });

    it("returns \"scalene\" if no 2 sides are equal in length", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 4;
      testTriangle.side3 = 5;
      testTriangle.type().should.equal("scalene");
    });
  });

  describe("invalid", function() {
    it("returns true when the longest side is >= the sum of the other sides", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 1;
      testTriangle.side2 = 2;
      testTriangle.side3 = 3;
      testTriangle.invalid().should.equal(true);
    });
  });
});
