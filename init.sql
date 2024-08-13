-- Create the 'recipes' table
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    directions TEXT NOT NULL
);

-- Insert some sample data into the 'recipes' table
INSERT INTO recipes (name, ingredients, directions)
VALUES ('Chocolate Cake', '1 cup all-purpose flour, 1/2 cup unsweetened cocoa powder, 2 cups sugar, 1 1/2 cups milk, 1/2 cup vegetable oil, 2 eggs, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 cup boiling water', 'Preheat oven to 350°F (175°C). Grease and flour two 9x13 inch baking pans. In a large mixing bowl, combine flour, cocoa powder, sugar, baking powder, and salt. Add milk, vegetable oil, eggs, and boiling water; beat until smooth. Divide batter evenly between prepared pans. Bake for 30-35 minutes, or until a toothpick inserted into the center of the cake comes out clean. Allow cakes to cool in pans for 10 minutes before transferring them to a wire rack to cool completely.');

INSERT INTO recipes (name, ingredients, directions)
VALUES ('Pancakes', '1 1/2 cups all-purpose flour, 1 cup milk, 1 egg, 1 tablespoon sugar, 1 teaspoon baking powder, 1/2 teaspoon salt', 'In a large mixing bowl, whisk together flour, milk, egg, sugar, baking powder, and salt. Heat a lightly oiled griddle or frying pan over medium heat. Pour or scoop the batter onto the griddle, allowing it to cook for 2-4 minutes on each side until golden brown.');
-- Insert additional sample data into the 'recipes' table
INSERT INTO recipes (name, ingredients, directions)
VALUES 
('Spaghetti Carbonara', 
 '200g spaghetti, 100g pancetta, 2 large eggs, 50g pecorino cheese, 50g parmesan, 2 cloves of garlic, peeled and left whole, 50g unsalted butter, sea salt, freshly ground black pepper', 
 'Cook the spaghetti in a large pot of boiling salted water until al dente. In a separate pan, fry the pancetta with the garlic in the butter. Beat the eggs in a bowl, then mix with the cheeses. Remove the garlic from the pancetta pan, and add the cooked spaghetti. Remove from heat and quickly mix in the egg and cheese mixture. Season with salt and pepper to taste and serve immediately.');

INSERT INTO recipes (name, ingredients, directions)
VALUES 
('Chicken Curry', 
 '500g chicken breast, cut into chunks, 1 onion, chopped, 2 cloves of garlic, minced, 1 tablespoon ginger, minced, 1 can coconut milk, 2 tablespoons curry powder, 1 teaspoon turmeric, 1 teaspoon cumin, 1 teaspoon coriander, salt and pepper to taste, 2 tablespoons vegetable oil', 
 'Heat oil in a large pot over medium heat. Add onions, garlic, and ginger, and cook until softened. Stir in curry powder, turmeric, cumin, and coriander, cooking for 1 minute until fragrant. Add chicken and cook until browned on all sides. Pour in coconut milk and bring to a simmer. Cook for 20-25 minutes, until chicken is cooked through and sauce has thickened. Season with salt and pepper to taste, and serve with rice.');

INSERT INTO recipes (name, ingredients, directions)
VALUES 
('Caesar Salad', 
 '1 large romaine lettuce, chopped, 1/2 cup croutons, 1/4 cup grated Parmesan cheese, 1/4 cup Caesar dressing, 1 clove garlic, minced, 1 tablespoon lemon juice, 1 teaspoon Dijon mustard, 1/4 teaspoon Worcestershire sauce, salt and pepper to taste', 
 'In a large bowl, toss the chopped romaine lettuce with croutons and Parmesan cheese. In a separate small bowl, whisk together Caesar dressing, garlic, lemon juice, Dijon mustard, Worcestershire sauce, salt, and pepper. Pour the dressing over the salad and toss to coat evenly. Serve immediately.');
