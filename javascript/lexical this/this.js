// function RegularFunction() {
//     this.value = 42;
//   }
  
//   const ArrowFunction = () => {
//     this.value = 42;
//   };
  
//   const obj1 = {};
//   const obj2 = {};
  
//   const regularFunc = new RegularFunction();
//   console.log(regularFunc.value); // Output: 42
  

//   RegularFunction.call(obj1);
//   console.log(obj1.value,obj1); // Output: 42
  
//   ArrowFunction.call(obj2);
//   console.log(obj2.value); // Output: undefined, arrow functions don't bind their own 'this'
  
// // 3️⃣ Indirect Invocation
// const context = { aVal: 'A', bVal: 'B' };
// function indirectInvocation() {
//     this.name = "suraj"
//     console.log(this);
// }
// indirectInvocation.call(context);  // logs { aVal: 'A' }
// indirectInvocation.apply(context);

const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
      const print2 = () => {
        console.log(this)
      }
      
      print2()
    }
  }
  
  obj.print()
  

//   https://dillionmegida.com/p/this-demystified/  explained this very good in this blog