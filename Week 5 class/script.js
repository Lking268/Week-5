class Menu {
 cnstructor (food, drinks, desserts){
    this.food = food;
    this.drinks = drinks;
    this.desserts = desserts;
    this.foodCost = 5; 
    this.drinkCost= 3; 
 }
}

let food = ['🍝', '🦪', '🍕','🥗','🍟'];
let drinks = ['🍸','🍺','🍷','🥤','🧃'];
let dessert = ['🍰','🥐','🍞','🍪','🍩']
let ma = new Menu(food, drinks, desserts); 

class Chef {
    constructor(name) {
        this.name = name;
    }
    cook(food){
        console.log(`${this.name} is cooking ${food}`)
    }
}

class PastryChef extends Chef {
    constructor(name) {
        super(name); 
        this.specialty = specialty; 
    }
}

class SousChef extends Chef {
    constructor(name,canFire ) {
    super(name); 
        this.canFire = canFire; 
    }
}
class Customer {
    constructor(name) {
        this.name = name; 
    }
    judgeChefs(chef1, chef2){
        let meal1 = chef1.cook(); 
        let rate1 = prompt(`${this.name}, scale of 1-10 how would you rate ${meal1}`); 
        let meal2 = chef2.cook(); 
        let rate2 = prompt(`${this.name}, scale of 1-10 how would you rate ${meal2}`);
        if (rate1 > rate2) {
            chef2.dead = true; 
        } else if (rate1 < rate2) {
            chef1.dead = true; 
            chef2.dead = true; 
        }
        //rate and return a winner
    }
}



let haskell = new PastryChef('Haskell', '🍰'); 
let lauren = new PastryChef('Lauren', '🐀'); 
let erin = new SousChef ('Erin',false); 
let kitchen = [haskell, lauren, erin]; 



let afeef = new Customer('Afeef'); 

//competition = they make food
//customer eats the food made 
//customer judge the food



lauren.eatOtherChefs = function (chef) {
    console.log(`${this.name} is going to eat ${chef.name}`); 
    chef.dead = true; 
}



/* Menu 
Has food types on it 
drinks, burgers, salads
Be able to rate food 
Someone rates food bad they get thrown out. 
    Rate the cooks 
Need Customer class
*/