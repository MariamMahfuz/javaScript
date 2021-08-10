var marks=parseInt(prompt("Enter Your Marks: "));
if(marks<=100 && marks>=80)
    console.log("A+");
else if(marks<=79 && marks>=70)
    console.log("A");
else if(marks<=69 && marks>=60)
    console.log("A-");
else if(marks<=59 && marks>=50)
    console.log("B");
else if(marks<=49 && marks>=40)
    console.log("C");
else if(marks<=39 && marks>=33)
    console.log("D");
else
console.log("F")