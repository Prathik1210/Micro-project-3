const Food = require('./food.json');

//List all food items
function listAllFoodItems(){
    return Food;
}


//list all the food items with category vegetables
function listVegetables(){  
    return Food.filter(item =>{
     return item.category === 'Vegetable'
    })
}


//list all the food items with category fruit
function listFruits(){ 
    return Food.filter(item =>{
    return item.category === 'Fruit'
    })
}


// //list all the food items with category protein
function listProteins() {
   return Food.filter(item =>{
        return item.category === 'Protein'
    })
}

// //list all the food items with category nuts
function listNuts(){
   return Food.filter(item =>{
        return item.category === 'Nuts'
    })
}



// //list all the food items with category grains
function listGrains(){ 
     return Food.filter(item =>{
        return item.category === 'Grain'
    })
}



// //list all the food items with category dairy
function listDairy(){
    return Food.filter(item =>{
        return item.category === 'Dairy'
    })
}



//list all the food items with calorie above 100

function calorieAbove100(){ 
    return Food.filter(item =>{
    return item.calorie > 100;
    })
}


//list all the food items with calorie below 100

function calorieBelow100(){ 
    return Food.filter(item =>{
        return item.calorie < 100;
    })
}
// console.log(calorieBelow100())


//list all the food items with highest protien content to lowest

function DecreasingProtein(){
     return Food.sort((a,b) => b.protiens - a.protiens)
}
console.log(DecreasingProtein())









