document.addEventListener("DOMContentLoaded", function () {
    const ingredients = [
        "2 1/4 cups all-purpose flour (293 grams)",
        "3/4 teaspoon baking soda",
        "1/4 teaspoon baking powder",
        "1 tablespoon corn starch",
        "3/4 teaspoon kosher salt",
        "1 1/4 cups plus 2 tablespoons granulated sugar (288 grams)",
        "14 tablespoons unsalted butter, melted (197 grams)",
        "1 tablespoon light corn syrup (20 grams)",
        "1 large egg",
        "2 teaspoons vanilla extract",
        "1/2-3/4 cup rainbow sprinkles (about 3-4 ounces, not nonpareils)"
    ];

    const ingredientList = document.getElementById("ingredient-list");
    const toggleButton = document.getElementById("toggle-ingredients");

    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientList.appendChild(li);
    });

    toggleButton.addEventListener("click", function () {
        ingredientList.classList.toggle("hidden");
        toggleButton.textContent = ingredientList.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
    });
});




