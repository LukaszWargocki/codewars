/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/
function remove(string){
  return string.charAt(string.length-1) == '!' ? string.substring(0, -1) : string // no regex allowed
}