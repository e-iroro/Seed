var count = 5
if ( count==6) {   
    console.log('count is 6'); 
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 6) {
    console.log('count is less than 6');
}else {
    console.log('count is NOT 6');
}


var text;
var fruits = "Peach"

switch(fruits) {
  case "Banana":
    console.log("Banana is good!");
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    console.log("I have never heard of that fruit...");
}




let a=3, b=6;
console.log((a>b)? 'greaterThan': 'lessThan');

let age=12
console.log((age < 18) ? "Too young":"Old enough");


for ( i = 0, i < 10; i++;) {
    console.log(i);
}