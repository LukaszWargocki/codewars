/* Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/
function nerdify(txt){
  return txt.replace(/a/ig, "4").replace(/e/ig, "3").replace(/l/g, "1");
}