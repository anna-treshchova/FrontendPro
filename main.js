let n = prompt("Enter a number");
let i = 1;
while (i <= 100) {
   if(i ** 2 <= n) {
       console.log(`${i} (${i}² = ${i ** 2} <= ${n})`);
   }
    i++
}
