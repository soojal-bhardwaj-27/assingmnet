1. Print numbers from 1 to 100

// // for(let i = 1;i<=100;i++){
// //     document.write(i,"<br>")
// // }


2  Print even numbers from 1 to 100.

// // for(let i =1;i <= 100 ; i++){
// //     if(i%2==0)
// //         document.write(i,"<br>")
// // }

3. Print odd numbers from 1 to 100

// // for(let i =1;i <= 100 ; i++){
// //     if(i%2!==0)
// //         document.write(i,"<br>")
// // }

4. Print numbers from 100 to 1

// // for(let i=100 ;i >= 1 ; i--){
// //       document.write(i,"<br>")
// //      }


5. Calculate the sum of numbers from 1 to 100.
// // let sum = 0;
// // for(let i=1 ;i <=100 ; i++){   
// // sum += i; 
// // document.write(sum,"<br>")
// // }

6. Calculate the sum of even numbers from 1 to 100.
// // let sum = 0;
// // for(let i=1 ;i <=100 ; i++){   
// // if(i%2==0){
// //       document.write(i,"<br>")
// // }
// // sum += i;
// // document.write(sum,"<br>")
// // }


// // let sum = 0;
// // for (let i = 2; i <= 100; i += 2) {
// //     sum += i;
// // }
// // document.write(sum);

7. Calculate the sum of odd numbers from 1 to 100.
// // let sum = 0;
// // for (let i = 1; i <= 100; i += 2) {
// //     sum += i;
// // }
// // document.write(sum);



8. Print multiplication table of a given number.

// //  let mul = parseInt(prompt("Enter the number"));
// // for (let i = 1; i <= 10; i++) {
// //     document.write(`${mul} * ${i} = ${mul * i}<br>`);
// // }

9. Find the factorial of a given number.
// // function factorial(n) {
// //       if (n < 0) return "Factorial not defined for negative numbers.";
// //       let result = 1;
// //       for (let i = 1; i <= n; i++) {
// //           result *= i;
// //       }
// //       return result;
// //   }
// //   let number = parseInt(prompt("Enter a number to find its factorial"));
// //   let result = factorial(number);
// //   document.write("Factorial of " + number + " is " + result);

  



10. Count the number of digits in a given number.

// // function countDigits(number) {

// //       number = Math.abs(number);
// //       return number.toString().length;
// //   }

// //   let number = parseInt(prompt("Enter a number to count its digits"));
// //   let digitCount = countDigits(number);
// //   document.write("Number of digits in " + number + " is " + digitCount);
  

11. Reverse a given number.
// // function reverse_a_number(n)
// // {
// // 	n = n + "";
// // 	return n.split("").reverse().join("");
// // }
// // let number= parseInt(prompt("enter the minimum 2 digit number"))
// // let reversednumber= reverse_a_number(number);
// // document.write("reversed number: "+ reversednumber);


12. Check if a given number is a palindrome
// // function isPalindrome(number) {
// //           // Convert the number to a string
// //           let numStr = number.toString();
      
// //           // Initialize pointers at the start and end of the string
// //           let left = 0;
// //           let right = numStr.length - 1;
      
// //           // Check characters from both ends towards the center
// //           while (left < right) {
// //               if (numStr[left] !== numStr[right]) {
// //                   return false; // If characters don't match, it's not a palindrome
// //               }
// //               left++;
// //               right--;
// //           }
      
// //           return true; // If all characters match, it is a palindrome
// //       }
      
// //       // Example usage:
// //       let num = parseInt(prompt("Enter a number to check if it's a palindrome:"));
// //       if (isNaN(num)) {
// //           alert("Please enter a valid number.");
// //       } else {
// //           let result = isPalindrome(num);
// //           alert(num + (result ? " is a palindrome." : " is not a palindrome."));
// //       }



13  Print the Fibonacci series up to a given number of terms.


// // Program to generate Fibonacci series up to n terms
// // const number = parseInt(prompt('Enter the number of terms: '));
// // let n1 = 0, n2 = 1, nextTerm;

// // document.write('Fibonacci Series:');
// // for (let i = 1; i <= number; i++) {
// //     document.write(n1);
// //     nextTerm = n1 + n2;
// //     n1 = n2;
// //     n2 = nextTerm;
// // }

 14 Find the sum of digits of a given number.
//  public class SumOfDigits {
//  public static void main(String[] args) {
//          int number = 12345;
//   int  sum = sumOfDigits(number);
// System.out.println("Sum of digits of " + number + " is: " +
// sum);
// }
// //  Method to calculate sum of digits
// pub lic static int sumOfDigits(int num) {
// int sum = 0;
// // Loop until num becomes 0
// while (num != 0) {
// // Extract the last digit and add to sum
// sum += num % 10;
// // Remove the last digit from num
// num = num / 10;
// }
// return sum;
// }
// }
15 . Find the product of digits of a given number.
// public class ProductOfDigits {
// public static void main(String[] args) {
// int number = 12345;
// int product = productOfDigits(number);
// System.out.println("Product of digits of " + number + " is: "
// + product);
// }
// // Method to calculate product of digits
// public static int productOfDigits(int num) {
// int product = 1;
// // Loop until num becomes 0
// while (num != 0) {
// // Extract the last digit and multiply to product
// product *= num % 10;
// // Remove the last digit from num
// num = num / 10;
// }
// return product;
// }
// }
16 Check if a given number is an Armstrong number
// public class ArmstrongNumber {
// public static void main(String[] args) {
// int number = 153;
// if(isArmstrong(number)) {
// System.out.println(number + " is an Armstrong number.");
// } else {
// System.out.println(number + " is not an Armstrong
// number.");
// }
// }
// // Method to check if a number is Armstrong or not
// public static boolean isArmstrong(int num) {
// int originalNumber = num;
// int numberOfDigits = String.valueOf(num).length();
// int sum = 0;
// while (num > 0) {
// int digit = num % 10;
// sum += Math.pow(digit, numberOfDigits);
// num /= 10;
// }
// return (sum == originalNumber);
// }
// }
17 . Print all Armstrong numbers between 1 and 1000.
// public class ArmstrongNumbersInRange {
// public static void main(String[] args) {
// System.out.println("Armstrong numbers between 1 and 1000:");
// for (int number = 1; number <= 1000; number++) {
// if (isArmstrong(number)) {
// System.out.print(number + " ");
// }
// }
// }
// // Method to check if a number is Armstrong or not
// public static boolean isArmstrong(int num) {
// int originalNumber = num;
// int numberOfDigits = String.valueOf(num).length();
// int sum = 0;
// while (num > 0) {
// int digit = num % 10;
// sum += Math.pow(digit, numberOfDigits);
// num /= 10;
// }
// return (sum == originalNumber);
// }
// }
18 Check if a given number is a perfect number
// public class PerfectNumber {
// public static void main(String[] args) {
// int number = 28; // Example number to check
// if (isPerfectNumber(number)) {
// System.out.println(number + " is a perfect number.");
// } else {
// System.out.println(number + " is not a perfect number.");
// }
// }
// // Method to check if a number is a perfect number
// public static boolean isPerfectNumber(int num) {
// if (num <= 1) {
// return false; // Perfect numbers are positive integers
// greater than 1
// }
// int sum = 0;
// // Find divisors and sum them
// for (int i = 1; i <= num / 2; i++) {
// if (num % i == 0) {
// sum += i;
// }
// }
// // Check if the sum of divisors equals the number
// return (sum == num);
// }
// 19 . Print all perfect numbers between 1 and 1000.
// public class PerfectNumbers {
// public static void main(String[] args) {
// System.out.println("Perfect numbers between 1 and 1000:");
// for (int i = 1; i <= 1000; i++) {
// if (isPerfectNumber(i)) {
// System.out.println(i);
// }
// }
// }
// // Function to check if a number is a perfect number
// public static boolean isPerfectNumber(int num) {
// if (num <= 1) {
// return false;
// }
// int sum = 0;
// // Find all divisors and sum them up
// for (int i = 1; i <= num / 2; i++) {
// if (num % i == 0) {
// sum += i;
// }
// }
// // Check if the sum of divisors equals the number
// return sum == num;
// }
// }
// 20 Check if a given number is a prime number.
// public class PrimeChecker {
// public static void main(String[] args) {
// int number = 23; // Replace with the number you want to check
// if (isPrime(number)) {
// System.out.println(number + " is a prime number.");
// } else {
// System.out.println(number + " is not a prime number.");
// }
// }
// // Function to check if a number is prime
// public static boolean isPrime(int num) {
// if (num <= 1) {
// return false; // 1 and numbers <= 1 are not prime
// }
// if (num == 2 || num == 3) {
// return true; // 2 and 3 are prime numbers
// }
// if (num % 2 == 0 || num % 3 == 0) {
// return false; // numbers divisible by 2 or 3 are not
// prime (excluding 2 and 3)
// }
// // Check for prime numbers using 6k +/- 1 optimization
// int sqrt = (int) Math.sqrt(num);
// for (int i = 5; i <= sqrt; i += 6) {
// if (num % i == 0 || num % (i + 2) == 0) {
// return false;
// }
// }
// return true;
// }
// }
// 21. Print all prime numbers between 1 and 100.
// public class PrimeNumbers {
// public static void main(String[] args) {
// System.out.println("Prime numbers between 1 and 100:");
// for (int i = 1; i <= 100; i++) {
// if (isPrime(i)) {
// System.out.print(i + " ");
// }
// }
// }
// // Function to check if a number is prime
// public static boolean isPrime(int num) {
// if (num <= 1) {
// return false; // 1 and numbers <= 1 are not prime
// }
// if (num == 2 || num == 3) {
// return true; // 2 and 3 are prime numbers
// }
// if (num % 2 == 0 || num % 3 == 0) {
// return false; // numbers divisible by 2 or 3 are not
// prime (excluding 2 and 3)
// }
// // Check for prime numbers using 6k +/- 1 optimization
// int sqrt = (int) Math.sqrt(num);
// for (int i = 5; i <= sqrt; i += 6) {
// if (num % i == 0 || num % (i + 2) == 0) {
// return false;
// }
// }
// return true;
// }
// }
// 22. Find the greatest common divisor (GCD) of two given numbers.
// public class GCD {
// public static void main(String[] args) {
// int num1 = 24;
// int num2 = 36;
// int gcd = findGCD(num1, num2);
// System.out.println("GCD of " + num1 + " and " + num2 + " is:
// " + gcd);
// }
// // Function to find GCD of two numbers
// public static int findGCD(int a, int b) {
// while (b != 0) {
// int temp = b;
// b = a % b;
// a = temp;
// }
// return a;
// }
// }
// 23. Find the least common multiple (LCM) of two given numbers.
// public class LCM {
// public static void main(String[] args) {
// int num1 = 24;
// int num2 = 36;
// int lcm = findLCM(num1, num2);
// System.out.println("LCM of " + num1 + " and " + num2 + " is:
// " + lcm);
// }
// // Function to find LCM of two numbers
// public static int findLCM(int a, int b) {
// return (a * b) / findGCD(a, b);
// }
// // Function to find GCD of two numbers (used in LCM calculation)
// public static int findGCD(int a, int b) {
// while (b != 0) {
// int temp = b;
// b = a % b;
// a = temp;
// }
// return a;
// }
// }
// 24. Calculate the power of a number using a loop.
// public class PowerCalculation {
// public static void main(String[] args) {
// int base = 2;
// int exponent = 5;
// long result = calculatePower(base, exponent);
// System.out.println(base + " raised to the power of " +
// exponent + " is: " + result);
// }
// // Function to calculate power using a loop
// public static long calculatePower(int base, int exponent) {
// long result = 1;
// for (int i = 0; i < exponent; i++) {
// result *= base;
// }
// return result;
// }
// }
// 25. Convert a binary number to decimal.
// public class BinaryToDecimal {
// public static void main(String[] args) {
// String binary = "1010";
// int decimal = binaryToDecimal(binary);
// System.out.println("Binary " + binary + " is equivalent to
// decimal: " + decimal);
// }
// // Function to convert binary to decimal
// public static int binaryToDecimal(String binary) {
// int decimal = 0;
// int power = 0;
// for (int i = binary.length() - 1; i >= 0; i--) {
// if (binary.charAt(i) == '1') {
// decimal += Math.pow(2, power);
// }
// power++;
// }
// return decimal;
// }
// }
// 26. Convert a decimal number to binary
// public class DecimalToBinary {
// public static void main(String[] args) {
// int decimal = 26;
// String binary = decimalToBinary(decimal);
// System.out.println("Decimal " + decimal + " is equivalent to
// binary: " + binary);
// }
// // Function to convert decimal to binary
// public static String decimalToBinary(int decimal) {
// StringBuilder binary = new StringBuilder();
// if (decimal == 0) {
// binary.append("0");
// } else {
// while (decimal > 0) {
// int remainder = decimal % 2;
// binary.insert(0, remainder);
// decimal /= 2;
// }
// }
// return binary.toString();
// }
// }
// 27. Print the sum of the series: 1 + 1/2 + 1/3 + ... + 1/n.
// public class SeriesSum {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// double sum = 0.0;
// for (int i = 1; i <= n; i++) {
// sum += 1.0 / i;
// }
// System.out.println("Sum of the series 1 + 1/2 + 1/3 + ... +
// 1/n: " + sum);
// }
// }
// 28. Print the sum of the series: 1^2 + 2^2 + 3^2 + ... + n^2
// public class SeriesSum {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// int sum = 0;
// for (int i = 1; i <= n; i++) {
// sum += i * i;
// }
// System.out.println("Sum of the series 1^2 + 2^2 + 3^2 + ... +
// n^2: " + sum);
// }
// }
// 29. Print the sum of the series: 1^3 + 2^3 + 3^3 + ... + n^3.
// public class SeriesSum {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// int sum = 0;
// for (int i = 1; i <= n; i++) {
// sum += i * i * i;
// }
// System.out.println("Sum of the series 1^3 + 2^3 + 3^3 + ... +
// n^3: " + sum);
// }
// }
// 30. Print the first n terms of the series: 1, 4, 9, 16, ...
// public class SeriesTerms {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// for (int i = 1; i <= n; i++) {
// int term = i * i;
// System.out.print(term + " ");
// }
// }
// }
// 31. Print the first n terms of the series: 1, 8, 27, 64, ...
// public class SeriesTerms {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// for (int i = 1; i <= n; i++) {
// int term = i * i * i;
// System.out.print(term + " ");
// }
// }
// }
// 32. Print the first n terms of the series: 1, -2, 3, -4, 5, …
// public class SeriesTerms {
// public static void main(String[] args) {
// int n = 6; // Change n to adjust the number of terms
// for (int i = 1; i <= n; i++) {
// int term = i;
// if (i % 2 == 0) {
// term = -term;
// }
// System.out.print(term + " ");
// }
// }
// }
// 33. Print the first n terms of the series: 2, 4, 8, 16, ...
// public class SeriesTerms {
// public static void main(String[] args) {
// int n = 5; // Change n to adjust the number of terms
// int term = 2;
// for (int i = 1; i <= n; i++) {
// System.out.print(term + " ");
// term *= 2;
// }
// }
// }
// 34. Calculate the sum of the first n natural numbers.
// public class SumOfNaturalNumbers {
// public static void main(String[] args) {
// int n = 10; // Change n to adjust the number of terms
// int sum = (n * (n + 1)) / 2;
// System.out.println("Sum of the first " + n + " natural
// numbers is: " + sum);
// }
// }
// 35. Calculate the sum of the first n even numbers.
// public static int sumOfFirstNEvens(int n) {
// // Sum of first n even numbers is n * (n + 1)
// return n * (n + 1);
// }
// 36. Calculate the sum of the first n odd numbers.
// public static int sumOfFirstNOdds(int n) {
// // Sum of first n odd numbers is n^2
// return n * n;
// }
// 37. Print all the factors of a given number.
// public static void printFactors(int number) {
// System.out.print("Factors of " + number + ": ");
// for (int i = 1; i <= number; i++) {
// if (number % i == 0) {
// System.out.print(i + " ");
// }
// }
// System.out.println();
// }
// 38. Print the prime factors of a given number.
// public static void printPrimeFactors(int number) {
// System.out.print("Prime factors of " + number + ": ");
// for (int i = 2; i <= number; i++) {
// while (number % i == 0) {
// System.out.print(i + " ");
// number /= i;
// }
// }
// if (number > 1) {
// System.out.print(number);
// }
// System.out.println();
// }
// 39. Print numbers from 1 to n with "Fizz" for multiples of 3, "Buzz"
// for multiples of 5, and "FizzBuzz" for multiples of both.
// public static void fizzBuzz(int n) {
// for (int i = 1; i <= n; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
// System.out.println("FizzBuzz");
// } else if (i % 3 == 0) {
// System.out.println("Fizz");
// } else if (i % 5 == 0) {
// System.out.println("Buzz");
// } else {
// System.out.println(i);
// }
// }
// }
// 40. Print the numbers from 1 to n in reverse order.
// public static void printReverse(int n) {
// for (int i = n; i >= 1; i--) {
// System.out.println(i);
// }
// }
// 41. Print all numbers between two given numbers.
// public static void printNumbersBetween(int start, int end) {
// for (int i = start; i <= end; i++) {
// System.out.print(i + " ");
// }
// System.out.println();
// }
// 42. Calculate the product of the first n natural numbers (factorial).
// public static long factorial(int n) {
// if (n < 0) {
// throw new IllegalArgumentException("Factorial is not defined
// for negative numbers");
// }
// long factorial = 1;
// for (int i = 1; i <= n; i++) {
// factorial *= i;
// }
// return factorial;
// }
// 43. Print a pattern of n rows with stars (e.g., 1st row: 1 star, 2nd
// row: 2 stars, etc.).
// public static void printStarPattern(int n) {
// for (int row = 1; row <= n; row++) {
// for (int col = 1; col <= row; col++) {
// System.out.print("* ");
// }
// System.out.println();
// }
// }
// 44. Print a pattern of n rows with numbers (e.g., 1st row: 1, 2nd row:
// 1 2, etc.).
// public static void printNumberPattern(int n) {
// for (int row = 1; row <= n; row++) {
// for (int col = 1; col <= row; col++) {
// System.out.print(col + " ");
// }
// System.out.println();
// }
// }
// 45. Print a pattern of n rows with alternating 1s and 0s.
// public static void printAlternatingPattern(int n) {
// for (int row = 1; row <= n; row++) {
// for (int col = 1; col <= row; col++) {
// if ((row + col) % 2 == 0) {
// System.out.print("1 ");
// } else {
// System.out.print("0 ");
// }
// }
// System.out.println();
// }
// }
// 46. Print a pattern of n rows with increasing numbers (e.g., 1st row:
// 1, 2nd row: 2 3, etc.).
// public static void printIncreasingNumberPattern(int n) {
// int num = 1;
// for (int row = 1; row <= n; row++) {
// for (int col = 1; col <= row; col++) {
// System.out.print(num + " ");
// num++;
// }
// System.out.println();
// }
// }
// 47. Print a pattern of n rows with decreasing numbers (e.g., 1st row:
// 1 2 3, 2nd row: 1 2, etc.).
// public static void printPatternDecreasing(int n) {
// for (int i = 1; i <= n; i++) {
// for (int j = 1; j <= (n - i + 1); j++) {
// System.out.print(j + " ");
// }
// System.out.println();
// }
// }
// 48. Print a pattern of n rows with numbers in reverse order (e.g.,
// 1st row: 1, 2nd row: 2 1, etc.).
// public static void printPatternReverse(int n) {
// for (int i = 1; i <= n; i++) {
// for (int j = i; j >= 1; j--) {
// System.out.print(j + " ");
// }
// System.out.println();
// }
// }
// 49. Print the sum of the series: 1 - 1/2 + 1/3 - 1/4 + ... +/- 1/n.
// public static double sumSeries1(int n) {
// double sum = 0.0;
// for (int i = 1; i <= n; i++) {
// if (i % 2 == 0) {
// sum -= 1.0 / i;
// } else {
// sum += 1.0 / i;
// }
// }
// return sum;
// }
// 50. Print the sum of the series: 1 + 2 - 3 + 4 - 5 + ... +/- n.
// public static int sumSeries2(int n) {
// int sum = 0;
// int sign = 1;
// for (int i = 1; i <= n; i++) {
// sum += sign * i;
// sign *= -1;
// }
// return sum;
// }