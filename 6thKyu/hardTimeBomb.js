/* A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
*/
var wireCode; // Find the wire.
wireCode = Object.entries(global).find(prop => prop[0].startsWith("boom"))[1];
Bomb.CutTheWire(wireCode);