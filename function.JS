/*
const coffeeOrder = (size, drinkType) => {
    console.log(`Make a ${size} in a ${drinkType}`);
   }  
   coffeeOrder("espreso", "large");
   coffeeOrder("mocha", "medium");
   coffeeOrder("latte", "large");\
   */

/*
let orderCount = 0   ;
   const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1} and ${topping2} and ${topping3}`);
    orderCount++;
   }
   takeOrder("pineapple", "ham", "cheese");
   */

  const cashWithdrawal = (amount, accnum, pin) => {
    console.log(`Attempting to withdraw £${amount} from account ${accnum}`);   
    if (checkPin(pin) && checkBalance(amount)) {
        console.log("Cash withdrawal approved");
    } else if (!checkPin(pin) && checkBalance(amount)) {
        console.log("Cash withdrawal declined - PIN incorrect");
    } else if (checkPin(pin) && !checkBalance(amount)) {
        let diff = amount - balance;
        console.log(`Cash withdrawal declined - you're £${diff} short!!`);
    }
}    
const checkPin = (pin) => {
    if (pin == correctPin) {
        return true;
    } else {
        return false;
    }
}
const checkBalance = (amount) => {
    if (balance >= amount) {
        return true;
    } else {
        return false;
    }
}
   
   const balance = 350;
   const correctPin = 1234;
   cashWithdrawal(300, 50449921, 1234);  /* should be ok */
   cashWithdrawal(400, 50449921, 1234);  /* request too high */
   cashWithdrawal(300, 50449921, 1236);  /* PIN incorrec† */

   