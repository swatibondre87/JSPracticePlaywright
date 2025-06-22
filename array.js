let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(colors)
console.log(typeof colors);  
console.log(colorscolor)



for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (let color of colors) {
    console.log(color);
}