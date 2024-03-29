/* Convert Decimal Degrees to Degrees, Minutes, Seconds.

Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.

Input: Positive number.

Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]

Trailing zeroes should be omitted in the output. E.g

convert (50) 
//correct output -> [50] 
//wrong output -> [50, 0, 0]

convert(80.5)
//correct output -> [ 80, 30 ]
//wrong output -> [80, 30, 0]

convert(0.0001388888888888889)
//correct output -> [ 0, 0, 1 ]
//wrong output -> [1]

Round the seconds to the nearest integer.
*/
function convert(degrees) {
  let deg = Math.floor(degrees);
  let fraction = degrees % 1;
  let seconds = Math.round(fraction*3600);
  let minutes = Math.floor(seconds/60);
  seconds -= 60*minutes;
  if (!seconds) {
    if (!minutes) return [deg];
    return [deg, minutes];
  }
  return [deg, minutes, seconds];
}