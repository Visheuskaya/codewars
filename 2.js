function countBy(x, n) {
   const z = [];
     for (let i = 1; i <= n; i++)
       z.push(x * i);
     return z;
   }