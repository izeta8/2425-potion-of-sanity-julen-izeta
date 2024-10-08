import {getData} from './services/services.mjs'
import Ingredients from './classes/Ingredients.mjs'
import Cauldron from './classes/Cauldron.mjs'

const separator = "-------------------------";

function printTitle(title)
{
    console.log("\n\n=========================================\n");

    // Dark blue, bold and underlined.
    console.log('\x1b[34m\x1b[1m\x1b[4m%s\x1b[0m', title);
}

const execute = async () => {
    
    try {
        
        const data = await getData();
        
        // Create ingredients
        const ingredients = Ingredients.load(data);
        
        // Show ingredients in console
        showIngredients(ingredients);

        // Create the cauldron
        const cauldron = new Cauldron(ingredients);
        
        // Create and show the potions in console

        printTitle("These are the created potions: \n");

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

    } catch (error) {
        console.log('There has been an error in execute(): ', error);
    }
    
}

function showPotion(potion) {
    console.log(`${potion.name}`);
    console.log(`Value: ${potion.value}`);
    console.log(`Weight: ${potion.weight}`);
    console.log(`Time: ${potion.time}`);
    console.log(separator);
}

// TASK: Create the function 'showIngredients()' that shows all the ingredients with each effects.
const showIngredients = (ingredients) => {
    
    try {
        
        printTitle("TASK: Create the function 'showIngredients()' that shows all the ingredients with each effects.");

        ingredients.ingredients.forEach(ingredient => {

            console.log("\nIngredient:", ingredient.name)
            
            console.log("\nEffects: ")
            ingredient.effects.forEach(effect => {
                console.log(` -> ${effect.name}`);
            });
            console.log(`\n${separator}`);
        });

    } catch (error) {
        console.log('There has been an error in showIngredients(): ', error);
    }

}



execute();

