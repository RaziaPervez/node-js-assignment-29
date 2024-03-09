//project=29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favoriteFruit = ["Strawberry", "Mango", "Watermelon"];
if (favoriteFruit.includes("Strawberry")) {
    console.log("you really like Strawberry");
}
if (favoriteFruit.includes("Mango")) {
    console.log("you really like Mango ");
}
if (favoriteFruit.includes("avocado")) {
    console.log("you really like avocado");
}
else {
    console.log("avocado not in your favorite list");
}
if (favoriteFruit.includes("Watermelon")) {
    console.log("you really like Watermelon ");
}
if (favoriteFruit.includes("Banana")) {
    console.log("you really like Banana ");
}
else {
    console.log("Banana not in your favorite list");
}
