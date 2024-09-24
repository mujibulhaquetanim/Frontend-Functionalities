import manu_1 from '../public/menuImages/salad.png';
import manu_2 from '../public/menuImages/noodles.png';
import manu_3 from '../public/menuImages/burger.png';
import manu_4 from '../public/menuImages/pasta.jpg';
import manu_5 from '../public/menuImages/vegetarian food.png';
import manu_6 from '../public/menuImages/seafood.png';
import manu_7 from '../public/menuImages/dessert.jpg';
import manu_8 from '../public/menuImages/rolls.jpg';
import manu_9 from '../public/menuImages/pizza.png';
import manu_10 from '../public/menuImages/sandwich.png';

import caesarSalad from '../public/foodList/caesarSalad.jpg';
import greekSalad from '../public/foodList/greekSalad.jpg'
import gardenSalad from '../public/foodList/gardenSalad.jpg'
import chickenSalad from '../public/foodList/chickenSalad.jpg'
import fruitSalad from '../public/foodList/fruitSalad.jpg'
import chowMein from '../public/foodList/chow_mein.jpg';
import padThai from '../public/foodList/pad_thai.jpg';
import ramen from '../public/foodList/ramen.jpg';
import italianPasta from '../public/foodList/italianPasta.jpg';
import udon from '../public/foodList/udon.jpg';
import cheeseBurger from '../public/foodList/cheeseburger.jpg';
import veggieBurger from '../public/foodList/veggie_burger.jpg';
import chickenBurger from '../public/foodList/chicken_burger.jpg';
import beefBurger from '../public/foodList/beefBurger.jpg';
import fishBurger from '../public/foodList/fish_burger.jpg';
import carbonara from '../public/foodList/carbonara.jpg';
import bolognese from '../public/foodList/bolognese.jpg';
import alfredo from '../public/foodList/alfredo.jpg';
import pestoPasta from '../public/foodList/pesto.jpg';
import lasagna from '../public/foodList/lasagna.jpg';
import shrimpScampi from '../public/foodList/shrimp_scampi.jpg';
import fishTacos from '../public/foodList/fish_tacos.jpg';
import lobsterRoll from '../public/foodList/lobster_roll.jpg';
import grilledSalmon from '../public/foodList/grilled_salmon.jpg';
import ilishBhapa from '../public/foodList/Ilish_bhapa.png';
import springRoll from '../public/foodList/spring_roll.jpg';
import eggRoll from '../public/foodList/egg_roll.jpg';
import chickenRoll from '../public/foodList/chicken_roll.jpg';
import beefRoll from '../public/foodList/beef_roll.jpg';
import shrimpRoll from '../public/foodList/shrimp_roll.jpg';
import vegCurry from '../public/foodList/veg_curry.jpg';
import tofuStirfry from '../public/foodList/tofu_stirfry.jpg';
import veggieWrap from '../public/foodList/veggie_wrap.jpg';
import lentilSoup from '../public/foodList/lentil_soup.jpg';
import vegBiryani from '../public/foodList/vegBiriyani.jpg';
import chocolateCake from '../public/foodList/chocolate_cake.jpg';
import cheesecake from '../public/foodList/cheesecake.jpg';
import baklava from '../public/foodList/baklava.jpg';
import brownie from '../public/foodList/brownie.jpg';
import fruitTart from '../public/foodList/fruit_tart.jpg';
import margherita from '../public/foodList/margherita.jpg';
import pepperoni from '../public/foodList/pepperoni.jpg';
import bbqChicken from '../public/foodList/bbq_chicken.jpg';
import veggiePizza from '../public/foodList/veggie_pizza.jpg';
import hawaiian from '../public/foodList/hawaiiwan.jpg';
import clubSandwich from '../public/foodList/club_sandwich.jpg';
import roastedVeggie from '../public/foodList/rostedVeggie.jpg';
import grilledCheeseSandwich from '../public/foodList/grilled_cheese.jpg';
import mesquite from '../public/foodList/mesquite_chicken.jpg';
import tunaSandwich from '../public/foodList/tuna_sandwich.jpg';



export const menu_list = [
    {menu_name: 'Salad',
    menu_image: manu_1},
    {menu_name: 'Noodles',
    menu_image: manu_2},
    {menu_name: 'Burger',
    menu_image: manu_3},
    {menu_name: 'Pasta',
    menu_image: manu_4},
    {menu_name: 'Pure Vegetarian',
    menu_image: manu_5},
    {menu_name: 'Seafood',
    menu_image: manu_6},
    {menu_name: 'Dessert',
    menu_image: manu_7},
    {menu_name: 'Rolls',
    menu_image: manu_8},
    {menu_name: 'Pizza',
    menu_image: manu_9},
    {menu_name: 'Sandwich',
    menu_image: manu_10},
]

export const food_list = [
    {
        menu_name: 'Salad',
        menu_image: manu_1,
        items: [
            {_id: 1, foodName: 'Caesar Salad', foodImage: caesarSalad, foodPrice: 5.99, description: 'Classic Caesar with croutons', category: 'Salad'},
            {_id: 2, foodName: 'Greek Salad', foodImage: greekSalad, foodPrice: 6.99, description: 'Fresh veggies with feta', category: 'Salad'},
            {_id: 3, foodName: 'Garden Salad', foodImage: gardenSalad, foodPrice: 4.99, description: 'Mixed greens and veggies', category: 'Salad'},
            {_id: 4, foodName: 'Chicken Salad', foodImage: chickenSalad, foodPrice: 7.99, description: 'Grilled chicken with greens', category: 'Salad'},
            {_id: 5, foodName: 'Fruit Salad', foodImage: fruitSalad, foodPrice: 5.49, description: 'Seasonal fruits mix', category: 'Salad'}
        ]
    },
    {
        menu_name: 'Noodles',
        menu_image: manu_2,
        items: [
            {_id: 6, foodName: 'Chow Mein', foodImage: chowMein, foodPrice: 8.99, description: 'Stir-fried noodles with veggies', category: 'Noodles'},
            {_id: 7, foodName: 'Pad Thai', foodImage: padThai, foodPrice: 9.99, description: 'Thai-style noodles with peanuts', category: 'Noodles'},
            {_id: 8, foodName: 'Ramen', foodImage: ramen, foodPrice: 10.99, description: 'Japanese noodle soup', category: 'Noodles'},
            {_id: 9, foodName: 'Spaghetti', foodImage: italianPasta, foodPrice: 7.99, description: 'Classic Italian pasta', category: 'Noodles'},
            {_id: 10, foodName: 'Udon', foodImage: udon, foodPrice: 9.49, description: 'Thick wheat noodles', category: 'Noodles'}
        ]
    },
    {
        menu_name: 'Burger',
        menu_image: manu_3,
        items: [
            {_id: 11, foodName: 'Cheeseburger', foodImage: cheeseBurger, foodPrice: 6.99, description: 'Beef patty with cheese', category: 'Burger'},
            {_id: 12, foodName: 'Veggie Burger', foodImage: veggieBurger, foodPrice: 5.99, description: 'Grilled veggie patty', category: 'Burger'},
            {_id: 13, foodName: 'Chicken Burger', foodImage: chickenBurger, foodPrice: 7.49, description: 'Grilled chicken patty', category: 'Burger'},
            {_id: 14, foodName: 'Beef Burger', foodImage: beefBurger, foodPrice: 8.99, description: 'Delicious beef grove', category: 'Burger'},
            {_id: 15, foodName: 'Fish Burger', foodImage: fishBurger, foodPrice: 7.99, description: 'Fried fish fillet', category: 'Burger'}
        ]
    },
    {
        menu_name: 'Pasta',
        menu_image: manu_4,
        items: [
            {_id: 16, foodName: 'Carbonara', foodImage: carbonara, foodPrice: 9.99, description: 'Creamy pasta with bacon', category: 'Pasta'},
            {_id: 17, foodName: 'Bolognese', foodImage: bolognese, foodPrice: 8.99, description: 'Pasta with meat sauce', category: 'Pasta'},
            {_id: 18, foodName: 'Alfredo', foodImage: alfredo, foodPrice: 9.49, description: 'Creamy white sauce pasta with chicken', category: 'Pasta'},
            {_id: 19, foodName: 'Pesto Pasta', foodImage: pestoPasta, foodPrice: 8.49, description: 'Pasta with basil pesto', category: 'Pasta'},
            {_id: 20, foodName: 'Lasagna', foodImage: lasagna, foodPrice: 10.99, description: 'Layered pasta with cheese', category: 'Pasta'}
        ]
    },
    {
        menu_name: 'Pure Vegetarian',
        menu_image: manu_5,
        items: [
            {_id: 21, foodName: 'Vegetable Curry', foodImage: vegCurry, foodPrice: 7.99, description: 'Mixed veggies in curry sauce', category: 'Pure Veg'},
            {_id: 22, foodName: 'Tofu Stir-fry', foodImage: tofuStirfry, foodPrice: 8.49, description: 'Tofu with mixed veggies', category: 'Pure Veg'},
            {_id: 23, foodName: 'Veggie Wrap', foodImage: veggieWrap, foodPrice: 6.99, description: 'Grilled veggies in a wrap', category: 'Pure Veg'},
            {_id: 24, foodName: 'Lentil Soup', foodImage: lentilSoup, foodPrice: 5.99, description: 'Hearty lentil soup', category: 'Pure Veg'},
            {_id: 25, foodName: 'Veg Biryani', foodImage: vegBiryani, foodPrice: 8.99, description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices', category: 'Pure Veg'}
        ]
    },
    {
        menu_name: 'Seafood',
        menu_image: manu_6,
        items: [
            {_id: 26, foodName: 'Grilled Salmon', foodImage: grilledSalmon, foodPrice: 12.99, description: 'Salmon fillet with herbs', category: 'Seafood'},
            {_id: 27, foodName: 'Shrimp Scampi', foodImage: shrimpScampi, foodPrice: 11.99, description: 'Shrimp in garlic butter', category: 'Seafood'},
            {_id: 28, foodName: 'Fish Tacos', foodImage: fishTacos, foodPrice: 9.99, description: 'Tacos with fried fish', category: 'Seafood'},
            {_id: 29, foodName: 'Lobster Roll', foodImage: lobsterRoll, foodPrice: 14.99, description: 'Lobster in a soft roll', category: 'Seafood'},
            {_id: 30, foodName: 'Ilish Bhapa', foodImage: ilishBhapa, foodPrice: 13.49, description: 'Hilsha fish withcoconut paste, along with spicy mustard paste mixed with curd', category: 'Seafood'}
        ]
    },
    {
        menu_name: 'Dessert',
        menu_image: manu_7,
        items: [
            {_id: 31, foodName: 'Chocolate Cake', foodImage: chocolateCake, foodPrice: 4.99, description: 'Rich chocolate cake', category: 'Dessert'},
            {_id: 32, foodName: 'Cheesecake', foodImage: cheesecake, foodPrice: 5.99, description: 'Creamy cheesecake', category: 'Dessert'},
            {_id: 33, foodName: 'Baklava', foodImage: baklava, foodPrice: 3.99, description: 'Turkish sweet Pastry', category: 'Dessert'},
            {_id: 34, foodName: 'Brownie', foodImage: brownie, foodPrice: 2.99, description: 'Fudgy chocolate brownie with nuts', category: 'Dessert'},
            {_id: 35, foodName: 'Fruit Tart', foodImage: fruitTart, foodPrice: 4.49, description: 'Tart with fresh fruits', category: 'Dessert'}
        ]
    },
    {
        menu_name: 'Rolls',
        menu_image: manu_8,
        items: [
            {_id: 36, foodName: 'Spring Roll', foodImage: springRoll, foodPrice: 5.49, description: 'Crispy veggie roll', category: 'Rolls'},
            {_id: 37, foodName: 'Egg Roll', foodImage: eggRoll, foodPrice: 5.99, description: 'Roll with egg and veggies', category: 'Rolls'},
            {_id: 38, foodName: 'Chicken Roll', foodImage: chickenRoll, foodPrice: 6.49, description: 'Juicy chicken bread roll', category: 'Rolls'},
            {_id: 39, foodName: 'Beef Roll', foodImage: beefRoll, foodPrice: 6.99, description: 'Beef and veggie roll', category: 'Rolls'},
            {_id: 40, foodName: 'Shrimp Roll', foodImage: shrimpRoll, foodPrice: 7.49, description: 'Shrimp Tempura Roll', category: 'Rolls'}
        ]
    },
    {
        menu_name: 'Pizza',
        menu_image: manu_9,
        items: [
            {_id: 41, foodName: 'Margherita', foodImage: margherita, foodPrice: 8.99, description: 'Classic cheese and tomato', category: 'Pizza'},
            {_id: 42, foodName: 'Pepperoni', foodImage: pepperoni, foodPrice: 9.99, description: 'Pepperoni and cheese', category: 'Pizza'},
            {_id: 43, foodName: 'BBQ Chicken Pizza', foodImage: bbqChicken, foodPrice: 10.99, description: 'BBQ sauce and chicken', category: 'Pizza'},
            {_id: 44, foodName: 'Veggie Pizza', foodImage: veggiePizza, foodPrice: 8.49, description: 'Mixed veggies', category: 'Pizza'},
            {_id: 45, foodName: 'Hawaiian', foodImage: hawaiian, foodPrice: 9.49, description: 'Ham and pineapple', category: 'Pizza'}
        ]
    },
    {
        menu_name: 'Sandwich',
        menu_image: manu_10,
        items: [
            {_id: 46, foodName: 'Club Sandwich', foodImage: clubSandwich, foodPrice: 6.99, description: 'Triple-layered sandwich', category: 'Sandwich'},
            {_id: 47, foodName: 'Rosted Veggie', foodImage: roastedVeggie, foodPrice: 5.99, description: 'Rosted vegetables sandwich', category: 'Sandwich'},
            {_id: 48, foodName: 'Grilled Cheese', foodImage: grilledCheeseSandwich, foodPrice: 4.99, description: 'Melted cheese sandwich', category: 'Sandwich'},
            {_id: 49, foodName: 'Mesquite Chicken', foodImage: mesquite, foodPrice: 7.49, description: 'Grilled Mesquite Chicken Sandwich', category: 'Sandwich'},
            {_id: 50, foodName: 'Tuna Sandwich', foodImage: tunaSandwich, foodPrice: 6.49, description: 'Tuna and mayo', category: 'Sandwich'}
        ]
    }
    ]