

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObj =>{

        const {recipes} = recipesObj;
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main_div');
        document.body.appendChild(mainDiv);
        for (let recipe of recipes) {

            let div = document.createElement('div');

            const recipe_div = document.createElement('div');
            recipe_div.classList.add('recipe_div');
            let img = document.createElement('img');
            img.src = recipe.image;
            recipe_div.innerText = `
               id:${recipe.id}
               name: ${recipe.name}
               instructions: ${recipe.instructions}
               prepTimeMinutes: ${recipe.prepTimeMinutes}
               cookTimeMinutes: ${recipe.cookTimeMinutes}
               servings: ${recipe.servings}
               difficulty: ${recipe.difficulty}
               cuisine: ${recipe.cuisine}
               caloriesPerServing: ${recipe.caloriesPerServing}
               tags: ${recipe.tags}
               userId: ${recipe.userId}
               rating: ${recipe.rating}
               reviewCount: ${recipe.reviewCount}
               mealType: ${recipe.mealType}
               
                         
                         `;

            let ul = document.createElement('ul');
            let p = document.createElement('p');
            p.innerText = `Ingredients:`

            for (let ingredient of recipe.ingredients){
                let li = document.createElement('li');
                li.classList.add('ingredient');
                li.innerText = ingredient;
                ul.appendChild(li);

            }
            div.append(img,p,ul,recipe_div);

            mainDiv.appendChild(div);









        }





        console.log(recipesObj)}
);