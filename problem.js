// problem - 1
let num = 0;
 while(num < 60){
    console.log('I will invest at least 6 hrs every single day for next 60 days!', num);
    num++;
 }

// problem - 2
let odd = 61;
while(odd <= 100){
   if(odd % 2 === 1){
      console.log('The number is odd:',odd);
   }
   odd++;
}

// problem - 3
let even = 78;
while(even <= 98){
   if(even % 2 === 0){
      console.log('The even number is:', even);
   }
   even++;
}

// problem - 4
let oddSum = 0;
let n = 81;
while(n <= 131){
   if(n % 2 === 1){
      oddSum = oddSum + n;
      console.log(n);
   }
   n++;
}
console.log('total sum of 81 to 131 odd number is:', oddSum);

// problem - 5
let evenSum = 0;
let w = 206;
while(w <= 311){
   if(w % 2 === 0){
      evenSum = evenSum + w;
      console.log(w);
   }
   w++;
}
console.log('total sum of 81 to 131 even number is:', evenSum);