//1 Write a program to check if a number is positive, negative, or zero
     
    let num = parseInt(prompt("Enter the number."));
if (num > 0) {
    alert("num is positive");
} else if (num == 0) {
    alert("zero");
} else {
    alert("negative");
}


// 2 Check if a given year is a leap year or not
let leap = parseInt(prompt("enter the year "));
if (leap % 2 == 0){
    alert("its leap year")
}else{
    alert("it's not leap year")
}

 // 3 Determine if a number is even or odd
let num = prompt("enter the number");
if (num % 2 == 0){
    alert("even number")
}else{
   alert("odd number") 
}


// 4 Find the largest among three numbers

let a = prompt("enter your first number ")
let b = prompt("enter your second number")
let c = prompt ("enter your third number")
if (a>=b&& a>=c){
    alert("a is greater")
}else if (b>=c && b>=a){
    alert("b is greater")
}else if (c>=a && c >= b  ){
    alert("c is greater")
}else {
    alert("please again the number")
}

// 5. Calculate the sum of positive numbers in an array.
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        } else {
            
        }
    }
    return sum;
}
let numbers = [1, -2, 3, 4, -5, 6];
let sum = sumOfPositiveNumbers(numbers);
console.log("Sum of positive numbers:", sum);

// 6 Check if a number is prime or not.

let num  = parseInt(prompt("enter your first  number"));
let num1 = parseInt(prompt("enter your second number"))
if(num%num1==0){
    alert("its primer number")
}else {
    alert("its composite number")
}

function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

let num = parseInt(prompt("Enter a number to check if it is prime:"));
if (isPrime(num)) {
    alert("It's a prime number");
} else {
    alert("It's a composite number");
}

// 7 Calculate the factorial of a number


function factorialvalue(n) {
    if (n < 0) return -1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let num = parseInt(prompt("Enter a number to calculate its factorial:"));
let result = factorialvalue(num);
alert("The factorial of " + num + " is " + result);


// 8. Convert a temperature given in Celsius to Fahrenheit

(0°C × 9/5) + 32 = 32°F

function celsiustofahrenheit(celsius){
    return (celsius *9/5) + 32 ;

}
let celsius = parseFloat(prompt("enter the value in celsius "));
let f =   celsiustofahrenheit(celsius);
alert(  celsius + "degrees celsius is equal to " +  f   + "degrees fahrenheit.")


// 9 Check if a number is a perfect square

function perfectsquare(number){
    return(number*number);
}
let number= parseFloat(prompt("enter the number"));
let square= perfectsquare(number);
alert(number+"perfect square is " + square);

// 10. Find the largest element in an array

function findLargestElement(arr) {
    if (arr.length === 0) return null; // Handle empty array case
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


let numbers = [1, 5, 3, 9, 2];
let largest = findLargestElement(numbers);
console.log("The largest element is " + largest); // Output: The largest element is 9

// 11 Determine the eligibility of a person to vote based on their age.

let age = parseInt(prompt("enter your age"));
if(age>=18){
    alert("you can vote")
}else{
    alert("you can not vote ")
}

// 12. Check if a given character is a vowel or consonant.
function checkVowelOrConsonant(char) {
    // Convert character to lowercase to handle both uppercase and lowercase input
    char = char.toLowerCase();

    // List of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    Check if the character is a vowel
    if (vowels.includes(char)) {
        return "It's a vowel";
    } else if (char >= 'a' && char <= 'z') { // Check if the character is a letter
        return "It's a consonant";
    } else {
        return "Invalid input. Please enter an alphabet letter.";
    }
}

let char = prompt("Enter a character to check if it's a vowel or consonant:");
let result = checkVowelOrConsonant(char);
alert(result);


// 13 Calculate the area of a triangle given base and height.

function areaoftriangle(base,height){
    return 0.5*base*height;

}
let base = parseFloat(prompt("enter the base of triangle"));
let height = parseFloat(prompt("enter the height of triangle"));
 
if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for base and height.");
} else {
    let area = areaoftriangle(base, height);
    alert("The area of the triangle is " + area);
}


// 14. Check if a number is a palindrome.

function isPalindrome(number) {
    // Convert the number to a string
    let numStr = number.toString();

    // Initialize pointers at the start and end of the string
    let left = 0;
    let right = numStr.length - 1;

    // Check characters from both ends towards the center
    while (left < right) {
        if (numStr[left] !== numStr[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If all characters match, it is a palindrome
}

// Example usage:
let num = parseInt(prompt("Enter a number to check if it's a palindrome:"));
if (isNaN(num)) {
    alert("Please enter a valid number.");
} else {
    let result = isPalindrome(num);
    alert(num + (result ? " is a palindrome." : " is not a palindrome."));
}

// 15 Determine if a year is a century year or not
function isCenturyYear(year) {
     return year % 100 === 0;
}
let year = parseInt(prompt("Enter a year to check if it's a century year:"));
if (isNaN(year) || year <= 0) {
    alert("Please enter a valid positive year.");
} else {
    if (isCenturyYear(year)) {
        alert(year + " is a century year.");
    } else {
        alert(year + " is not a century year.");
    }
}



// 16 Check if a number is divisible by another number.

let num = parseInt(prompt("enter your first number "));
let num1 =  parseInt(prompt("enter your second number"));

if(num%num1==0){
    alert("complete divide")
}else{
    alert("can not divide complete")
}


