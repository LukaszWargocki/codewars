/* You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

Rules

1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.

Scoring


  
    

      
        
Item

        	
Three of the same

        	
Two of the same

        	
Two of the same plus one Wild

      

      
        
Wild

        	
100

        	
10

        	
N/A

      

      
        
Star

        	
90

        	
9

        	
18

      

      
        
Bell

        	
80

        	
8

        	
16

      

      
        
Shell

        	
70

        	
7

        	
14

      

      
        
Seven

        	
60

        	
6

        	
12

      

      
        
Cherry

        	
50

        	
5

        	
10

      

      
        
Bar

        	
40

        	
4

        	
8

      

      
        
King

        	
30

        	
3

        	
6

      

      
        
Queen

        	
20

        	
2

        	
4

      

      
        
Jack

        	
10

        	
1

        	
2

      

    

    	 
  


Returns

Return an integer of the score.

Example
Initialise

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);

Scoring

reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50

Return

result == 50
*/
function fruit(reels, spin){
  // get spin result
  let result = [reels[0][spin[0]], reels[1][spin[1]], reels[2][spin[2]]];
  console.log(result);
  // check for most common occurence
  if (result[0] != result[1] && result[0] != result[2] && result[1] != result[2]) return 0
  const points = { Wild: 10, Star: 9, Bell: 8, Shell: 7, Seven: 6, Cherry: 5, Bar: 4, King: 3,
                    Queen: 2, Jack: 1 };
  // rarest occurence
  for (let key in points){if (result.every(slot => slot === key)) return 10*points[key]};
  // test doubles, without Wild an with Wild
  if (result.every(slot => slot != 'Wild')){
    if (result[0] == result[1] || result[0] == result[2]) return points[result[0]];
    else return points[result[1]];
    // handle double wild
  } else if (result.filter(slot => slot == "Wild").length == 2){
    return 10;
  } else {
    if (result[0] == result[1] || result[0] == result[2]) return 2*points[result[0]];
    else return 2*points[result[1]];
  }
}