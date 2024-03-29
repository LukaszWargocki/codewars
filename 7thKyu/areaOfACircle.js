/* Complete the function which will return the area of a circle with the given radius.

Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
*/
var circleArea = function(radius) {
  // handle invalid arguments
  if (typeof radius !== "number" || radius <= 0) return false;
  // return area rounded to two decimal points
  return Math.round(100*Math.PI*radius**2)/100;
};