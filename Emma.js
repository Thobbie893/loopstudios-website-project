let number = [23, 45, 56, 73, 45, 23, 98, 54];
let sum = 0;
for (let i = 0; i <number.length; i++) {
    sum += number[i]; 
}

let max = 0
for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
        console.log("Current number", number[i], "is greater than the Max", max)
        max = number[i];
        console.log("Max is now ", max)
    }else{
        console.log("Current number", number[i], "is NOT greater than the Max", max, "therefore, Max remains the same.")
    }
}
console.log(max);
console.log(sum)
console.log(sum/number.length)
