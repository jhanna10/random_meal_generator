const meal = {
    app: ["Pigs in a Blanket", "Spinach Artichoke Zuchini Bites", "Cranberry Brie Bites",
            "Sweet Potato Bites", "Mozzarella Sticks", "Bacon-Wrapped Jalepeno Poppers", 
            "Cheesy Cauliflower Toast", "Bacon-Wrapped Brussel Sproutes", "Pizza Crostini"],
    
    main: ["Cauliflower Bolognese", "Chicken Stew with Potatoes", "Creamy Squash Risotto", 
            "Charred Chicken with Sweet Potatoes and Oranges", "Slow Roasted Salmon", 
            "Shepard Pie", "Crispy Chicken Thighs with spring Vegetables", "Steak and Mashed Potatoes",
            "Lasagna", "Pork Chop with Roasted Potatoes", "Hamburgers", "Stir Fry with Rice"],

    dessert: ["Apple Pie", "Chocolate Cake", "Cherry Cheese Pie", " Cheese Cake", "Brownie with Ice Cream",
                "Fuit Triffle", "Angel Food Cake", "Lemon Meringue Pie", "Strawberry Rhubarb Cobbler",
                "Fig and Rasberry Oat Slice"],
}

let firstCourse = meal.app[Math.floor(Math.random() * meal.app.length)];
let secondCourse = meal.main[Math.floor(Math.random() * meal.main.length)];
let thirdCourse = meal.dessert[Math.floor(Math.random() * meal.dessert.length)];

const randomMeal = `For tonigths randomly generated meal we will be having "${firstCourse}" to start,
followed by a main course of "${secondCourse}", and we will end it off with a delicious "${thirdCourse}".`;

console.log(randomMeal);