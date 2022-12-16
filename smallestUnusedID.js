/* Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/
function nextId(ids){
  // find max id in the array
  const max = Math.max(...ids);
  // loop from 0 until reached max, if any integer on the way not it array return it
  for (let i = 0; i < max; i++) if (!ids.includes(i)) return i;
  // if passed whole array return max + 1
  return max + 1;
}