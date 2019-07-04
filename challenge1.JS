//Challenge 1
let password = "password"
if (password.length <= 8){
    console.log ("your password is too short")
} 
else if(password.length >= 8){
    console.log ("accepted")
}

//Challenge 2
var number = '15'
if (number %3 == 0 || number %5 == 0) {
    console.log ("accept")
}
else {
    console.log ("decline")
}

//Challenge 3
var numb = '15'
if (numb %3 == 0 && numb %5 == 0) {
    console.log ("fizz buzz")
}

else if (numb %3 ==0) {
    console.log ("fizz")
}
else if (numb %5 ==0) {
    console.log ("buzz")
}

//Challenge 4 
let num = 20202
if (num.toString() === num.toString().split("").reverse().join("")){
    console.log ("is palindrome")
}
else {
    console.log ("is not palindrome")
}

//Challenge 5
    var time = '8'
if (time <= 8 && time >= 9 || time >= 17 && time <=18) {
    console.log ("Im commuting")
}
else if (time <=7 || time >=17) {
    console.log ("Im at home")
}
else if (numb %5 >=9 || time <=17) {
    console.log ("Im at work")
}

//Challenge 6
//stringName = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi" 
//if (Stringname.toString() === Stringname.toString().split("").reverse().join("")){
//    console.log ("is palindrome")