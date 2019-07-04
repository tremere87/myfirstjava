/*l
et orderCount = 0   ;
   const takeOrder = (topping1, topping2, topping3, topping4, topping5) => {
    console.log(`Sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4} and ${topping5}`);
    orderCount++;
   }
   takeOrder("chorizo", "ham", "cheese", "bacon", "salami");
*/

/*
for (i = 0 ; i < 10 ; i++) {
    console.log(i)
}
*/

/*
for (i = 9 ; i > -1 ; i--) {
    console.log(i)
}
*/

/*
for (i = 9 ; i < 6 ; i++) {
    console.log(Math.random(i) * 49 + 1);
}
*/

/*
let faveFilm = [
    "How to Train Your Dragon",
    "Meet the Feebles",
    "Dark Crystal",
    "Infinity Wars"
   ];
faveFilm.push("Matrix");
faveFilm.push("Shrek")

   for (FilmIndex = 0; FilmIndex < faveFilm.length; FilmIndex++) {
    console.log(faveFilm[FilmIndex]);
   }
*/

/*
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);]
*/
/*
let faveFilm = [
    "How to Train Your Dragon",
    "Ghostbusters",
    "Dark Crystal",
    "Infinity Wars",
    "Matrix",
    "Shrek"
];

   for (FilmIndex = 0; FilmIndex < faveFilm.length; FilmIndex++) {
    console.log(faveFilm[FilmIndex]);
   }

   const filmCheck = () => {
   if (faveFilm[2] == "Ghostbusters"){
       console.log("Yay it's Ghostbusters")
   }
   else{
       console.log("Boo, we want Ghostbusters")
   }
   }
   filmCheck ()
   */

   let faveFilm = [
    "How to Train Your Dragon",
    "Dark Cryatal",
    "Ghostbusters",
    "Infinity Wars",
    "Matrix",
    "Shrek"
];

   for (FilmIndex = 0; FilmIndex < faveFilm.length; FilmIndex++) {
    console.log(faveFilm[FilmIndex]);
   }

   const filmCheck = () => {
   if (faveFilm[2] == "Ghostbusters"){
       console.log("Yay it's Ghostbusters")
   }
   else{
       console.log("Boo, we want Ghostbusters")
   }
   }
   filmCheck ()