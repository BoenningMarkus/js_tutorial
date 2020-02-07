
const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = new Map ();
let words = sonnet.match(/\w+/g);

for (let i= 0; i < words.length; i++) {
    let word = words[i];
    uniques.set(word, 0);
    let currentValue = uniques.get(word);

<<<<<<< HEAD
    if (uniques.set(word, currentValue)) {
        uniques.set(word, currentValue + 1); 
=======

    if (uniques.set(word, currentValue)) {
        uniques.set(word, currentValue + 1);
       
>>>>>>> b037777462c9edcb6a5dfa24b327080a9a41dc91

    } else {
        uniques.set(word, currentValue = 1);   
        
   }
}
  console.log(uniques); 




