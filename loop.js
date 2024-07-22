// starting of loop ==>
// let i = 1;
// while(i<11){//end condition

// //code
// document.write('hello<br>')
// //update condition
// i++

// }

//print 1 to 100

// let i = 1
// while (i<=100){
//     document.write(i,"<br>")
// i++
// }

// let i = 100
// while (i>=1){
//     document.write(i,"<br>")
// i--
// }





//[PRINT 1-100 ]


// let i = 1
// while(i<=100){
// if(i%4!=0)document.write(i,"<br>")
// i++

// }

// let  num = parseInt(prompt("enter the number"));
// let i = 1;
// while(i<=10){
//     let p = i*num;
// document.write(p,"<br>")
//     i++;
// }



// for loop

// for (let i = 1; i <10;i++){
//     document.write(i,"<br>")
// }

// let i= 1;
// for (i=1;i<=100;i++) {
//     if(i%7==0 || i%5==0){

//         document.write("i=<br>",i)
//     }
//  }




// do - while looping


// print 1 -10
// let i = 100
// do{
//     document.write(i,"<br>")
//     i++
// }while(i<=100)


// break=>exit the loop

//1-100 but exit the loop when no is divisible by 11 and 7

// for (let i = 1;i<=100;i++){
//     if(i%7==0 && i%11==0)break
//     document.write(i,"<br>")
// }


//continue => go to next iteration
// for (let i = 1;i<=100;i++){
//          if(i%3==0 )continue
//     document.write(i,"<br>")

// }



// let i;
// let n = prompt("entern the number");
// for(i=2;i<=n-1;i++){
//     if(n%i==0  ){
//   document.write(n,"this is not prime number")
//   break
//     }
// if(i==n-1 &&  n%i!=0){
//       document.write(n,"prime no")
// }
// }


// nested loops====>
//     for(i=1;i< 5;i++){
//         for (let j= 1;j<5;j++){
//            document.write(j) 
//         }
// document.write("<br>")
//             }



// for(i=1;i< 5;i++){
//     for (let j= 1;j<=i;j++){
//        document.write(j) 
//     }
// document.write("<br>")
//         }


for(let i =1;i<=4;i++){
    for(let j = 1;j<i;j++){
    document.write("&nbsp;&nbsp;")
   } 
   for (let k = 1; k <= (2*i-1); k++){
    document.write("*")
    
}
document.write("<br>")
}
