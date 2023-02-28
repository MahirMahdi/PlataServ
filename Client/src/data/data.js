import burger from '../assets/burger.png';
import drink from '../assets/drink.png';
import sides from '../assets/sides.png';
import sandwich from '../assets/sandwich.png';
import burger1 from '../assets/products/burger1.jpg';
import burger2 from '../assets/products/burger2.jpg';
import burger3 from '../assets/products/burger3.jpg';
import burger4 from '../assets/products/burger4.jpg';
import burger5 from '../assets/products/burger5.jpg';
import burger6 from '../assets/products/burger6.jpg';
import sandwich1 from '../assets/products/sandwich1.jpg';
import sandwich2 from '../assets/products/sandwich2.jpg';
import sandwich3 from '../assets/products/sandwich3.jpg';
import sandwich4 from '../assets/products/sandwich4.jpg';
import sandwich5 from '../assets/products/sandwich5.jpg';
import sandwich6 from '../assets/products/sandwich6.jpg';
import sides1 from '../assets/products/sides1.jpg';
import sides2 from '../assets/products/sides2.jpg';
import sides3 from '../assets/products/sides3.jpg';
import sides4 from '../assets/products/sides4.jpg';
import sides5 from '../assets/products/sides5.jpg';
import sides6 from '../assets/products/sides6.jpg';
import drink1 from '../assets/products/drink1.jpg';
import drink2 from '../assets/products/drink2.jpg';
import drink3 from '../assets/products/drink3.jpg';
import drink4 from '../assets/products/drink4.jpg';
import drink5 from '../assets/products/drink5.jpg';
import drink6 from '../assets/products/drink6.jpg';
import { uid } from 'uid';

export const Categories = [
    {name: 'Burger',
     image: burger    
    },
    {name: 'Sandwich',
     image: sandwich   
    },
    {name: 'Drinks',
     image: drink   
    },
    {name: 'Sides',
     image: sides    
    },
]
export const all_products = [
    {
    
     "type": "burger",
     "data": [
     {   "product_id": "8def039",
         "name": "Classic Burger",
         "description": "Juicy beef patty, melted cheese",
         "price": 9.99,
         "add_ons": ["Bacon", "Avocado"],
         "ingredients": ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mayonnaise", "Brioche bun"],
         "image": burger1 
     },
     {   "product_id": "8ger039",
         "name": "Spicy Burger",
         "description": "Fire-grilled patty, spicy jalapenos",
         "price": 11.99,
         "add_ons": ["Fried egg", "Onion rings"],
         "ingredients": ["Beef patty", "Pepper jack cheese", "Lettuce", "Tomato", "Jalapenos", "Chipotle sauce", "Brioche bun"],
         "image": burger2
     },
    {    "product_id": "4dff030",
         "name": "Mushroom Swiss Burger",
         "description": "Grilled mushrooms, melted Swiss cheese",
         "price": 10.99,
         "add_ons": ["Caramelized onions", "Truffle aioli"],
         "ingredients": ["Beef patty", "Swiss cheese", "Sauteed mushrooms", "Lettuce", "Tomato", "Brioche bun"],
         "image": burger3
     },
     {  "product_id": "2deg03r",
         "name": "Veggie Burger",
         "description": "Plant-based patty, vegan cheese",
         "price": 8.99,
         "add_ons": ["Guacamole", "Salsa"],
         "ingredients": ["Plant-based patty", "Vegan cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard", "Brioche bun"],
         "image": burger4
     },
     {  
        "product_id": "72ef039",
         "name": "BBQ Burger",
         "description": "Tangy BBQ sauce, crispy onion straws",
         "price": 12.99,
         "add_ons": ["Bacon", "Fried pickles"],
         "ingredients": ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion straws", "BBQ sauce", "Brioche bun"],
         "image": burger5
     },
     {
        "product_id": "fdef029",
         "name": "Breakfast Burger",
         "description": "Sausage patty, fried egg",
         "price": 10.99,
         "add_ons": ["Hash browns", "Maple syrup"],
         "ingredients": ["Sausage patty", "American cheese", "Fried egg", "Lettuce", "Tomato", "Brioche bun"],
         "image": burger6
     }    
 ]},
     {
         "type": "sandwich",
         "data": [
         {
            "product_id": "8d4f039",
             "name": "Classic Club Sandwich",
             "description": "Triple decker with bacon",
             "price": 8.99,
             "add_ons": ["Avocado", "Jalapenos"],
             "ingredients": ["Turkey breast", "Bacon", "Cheddar cheese", "Lettuce", "Tomato", "Mayonnaise", "Toasted white bread"],
             "image": sandwich1
         },
         {
            "product_id": "hdef033",
             "name": "Italian Sub",
             "description": "Genoa salami, ham, pepperoni",
             "price": 9.99,
             "add_ons": ["Banana peppers", "Chipotle mayo"],
             "ingredients": ["Genoa salami", "Ham", "Pepperoni", "Provolone cheese", "Lettuce", "Tomato", "Red onion", "Mayonnaise", "Italian dressing", "Toasted hoagie roll"],
             "image": sandwich2
         },
         {
            "product_id": "fdef022",
             "name": "Vegan BLT",
             "description": "Plant-based bacon, lettuce, tomato",
             "price": 7.99,
             "add_ons": ["Guacamole", "Vegan cheese"],
             "ingredients": ["Plant-based bacon", "Lettuce", "Tomato", "Vegan mayonnaise", "Toasted whole grain bread"],
             "image": sandwich3
         },
         {
            "product_id": "zdef139",
             "name": "Grilled Chicken Sandwich",
             "description": "Marinated chicken breast, grilled",
             "price": 10.99,
             "add_ons": ["Bacon", "Mushrooms"],
             "ingredients": ["Grilled chicken breast", "Cheddar cheese", "Lettuce", "Tomato", "Mayonnaise", "Toasted brioche bun"],
             "image": sandwich4
         },
         {
            "product_id": "8fef000",
             "name": "Pastrami Reuben",
             "description": "Hot pastrami, sauerkraut, Russian dressing",
             "price": 11.99,
             "add_ons": ["Swiss cheese", "Pickles"],
             "ingredients": ["Hot pastrami", "Swiss cheese", "Sauerkraut", "Russian dressing", "Toasted rye bread"],
             "image": sandwich5
         },
         {
            "product_id": "1d3f039",
             "name": "Tuna Salad Sandwich",
             "description": "Albacore tuna, celery, onions",
             "price": 8.99,
             "add_ons": ["Sprouts", "Pickled onions"],
             "ingredients": ["Albacore tuna salad", "Lettuce", "Tomato", "Mayonnaise", "Toasted wheat bread"],
             "image": sandwich6
         }
    ]
},
 {
    "type": "sides",
    "data": [
        {
            "product_id": "1d3g033",
            "name": "Crispy Onion Rings",
            "description": "Golden fried, crunchy, savory",
            "price": 3.99,
            "add_ons": ["Ranch dressing", "Spicy ketchup"],
            "ingredients": ["Breaded onion rings", "Flour", "Cornmeal", "Spices", "Vegetable oil"],
            "image": sides1
        },
        {
            "product_id": "2f3f039",
            "name": "Truffle Fries",
            "description": "Crisp fries with truffle oil",
            "price": 4.99,
            "add_ons": ["Parmesan cheese", "Garlic aioli"],
            "ingredients": ["French fries", "Truffle oil", "Salt", "Black pepper"],
            "image": sides2
        },
        {
            "product_id": "ld3f037",
            "name": "Sweet Potato Fries",
            "description": "Crispy and lightly seasoned",
            "price": 3.99,
            "add_ons": ["Honey mustard", "Cinnamon sugar"],
            "ingredients": ["Sweet potato fries", "Salt", "Black pepper", "Vegetable oil"],
            "image": sides3
        },
        {
            "product_id": "1dff019",
            "name": "Mozzarella Sticks",
            "description": "Golden brown, cheesy, delicious",
            "price": 5.99,
            "add_ons": ["Marinara sauce", "Parmesan cheese"],
            "ingredients": ["Breaded mozzarella sticks", "Flour", "Egg", "Breadcrumbs", "Vegetable oil"],
            "image": sides4
        },
        {
            "product_id": "1d3f039",
            "name": "Loaded Nachos",
            "description": "Crispy chips, gooey cheese, toppings",
            "price": 6.99,
            "add_ons": ["Jalapenos", "Guacamole"],
            "ingredients": ["Tortilla chips", "Cheddar cheese", "Black beans", "Tomatoes", "Green onions", "Sour cream", "Salsa"],
            "image": sides5
        },
        {
            "product_id": "73fg039",
            "name": "Garlic Bread",
            "description": "Buttery, garlicky, and toasted",
            "price": 2.99,
            "add_ons": ["Mozzarella cheese", "Marinara sauce"],
            "ingredients": ["Italian bread", "Butter", "Garlic", "Parsley", "Parmesan cheese"],
            "image": sides6
        } 
    ]      
},
{
    "type": "drinks",
    "data": [
        {
            "product_id": "2de3039",
            "name": "Iced Coffee",
            "description": "Smooth, creamy, refreshing coffee drink",
            "price": 2.99,
            "add_ons": ["Vanilla syrup", "Whipped cream"],
            "ingredients": ["Freshly brewed coffee", "Ice", "Milk", "Simple syrup"],
            "image": drink1
        },
        {
            "product_id": "0g3f039",
            "name": "Strawberry Smoothie",
            "description": "Creamy and refreshing fruit blend",
            "price": 4.99,
            "add_ons": ["Protein powder", "Chia seeds"],
            "ingredients": ["Strawberries", "Banana", "Yogurt", "Milk", "Honey", "Ice"],
            "image": drink2
        },
        {
            "product_id": "773f0g9",
            "name": "Green Smoothie",
            "description": "Healthy and refreshing drink",
            "price": 4.99,
            "add_ons": ["Protein powder", "Spinach"],
            "ingredients": ["Kale", "Banana", "Almond milk", "Honey", "Ice"],
            "image": drink3
        },
        {
            "product_id": "rd3f0g9",
            "name": "Hot Chocolate",
            "description": "Rich and comforting chocolate drink",
            "price": 3.49,
            "add_ons": ["Whipped cream", "Marshmallows"],
            "ingredients": ["Milk", "Cocoa powder", "Sugar", "Vanilla extract"],
            "image": drink4
        },
        {
            "product_id": "4d3f049",
            "name": "Mango Lassi",
            "description": "Smooth and creamy yogurt drink",
            "price": 3.99,
            "add_ons": ["Cardamom powder", "Chopped pistachios"],
            "ingredients": ["Mango puree", "Plain yogurt", "Sugar", "Milk"],
            "image": drink5
        },
        {
            "product_id": "103fh39",
            "name": "Classic Lemonade",
            "description": "Sweet and refreshing citrus drink",
            "price": 2.99,
            "add_ons": ["Mint leaves", "Fresh berries"],
            "ingredients": ["Lemon juice", "Sugar", "Water", "Ice"],
            "image": drink6
        }   
    ]
    }   
 ]

export const defaultProductData = [
    {   "product_id": "8def039",
    "name": "Classic Burger",
    "description": "Juicy beef patty, melted cheese",
    "price": 9.99,
    "add_ons": ["Bacon", "Avocado"],
    "ingredients": ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mayonnaise", "Brioche bun"],
    "image": burger1 
},
{   "product_id": "8ger039",
    "name": "Spicy Burger",
    "description": "Fire-grilled patty, spicy jalapenos",
    "price": 11.99,
    "add_ons": ["Fried egg", "Onion rings"],
    "ingredients": ["Beef patty", "Pepper jack cheese", "Lettuce", "Tomato", "Jalapenos", "Chipotle sauce", "Brioche bun"],
    "image": burger2
},
{    "product_id": "4dff030",
    "name": "Mushroom Swiss Burger",
    "description": "Grilled mushrooms, melted Swiss cheese",
    "price": 10.99,
    "add_ons": ["Caramelized onions", "Truffle aioli"],
    "ingredients": ["Beef patty", "Swiss cheese", "Sauteed mushrooms", "Lettuce", "Tomato", "Brioche bun"],
    "image": burger3
},
{  "product_id": "2deg03r",
    "name": "Veggie Burger",
    "description": "Plant-based patty, vegan cheese",
    "price": 8.99,
    "add_ons": ["Guacamole", "Salsa"],
    "ingredients": ["Plant-based patty", "Vegan cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard", "Brioche bun"],
    "image": burger4
},
{  
   "product_id": "8def039",
    "name": "BBQ Burger",
    "description": "Tangy BBQ sauce, crispy onion straws",
    "price": 12.99,
    "add_ons": ["Bacon", "Fried pickles"],
    "ingredients": ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion straws", "BBQ sauce", "Brioche bun"],
    "image": burger5
},
{
   "product_id": "fdef029",
    "name": "Breakfast Burger",
    "description": "Sausage patty, fried egg",
    "price": 10.99,
    "add_ons": ["Hash browns", "Maple syrup"],
    "ingredients": ["Sausage patty", "American cheese", "Fried egg", "Lettuce", "Tomato", "Brioche bun"],
    "image": burger6
}       
]
