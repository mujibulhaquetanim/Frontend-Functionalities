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

import {} from '../public/foodList/Ilish_bhapa.png';

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
            {_id: 1, foodName: 'Caesar Salad', foodImage: 'caesar.jpg', foodPrice: 5.99, description: 'Classic Caesar with croutons', category: 'Salad'},
            {_id: 2, foodName: 'Greek Salad', foodImage: 'greek.jpg', foodPrice: 6.99, description: 'Fresh veggies with feta', category: 'Salad'},
            {_id: 3, foodName: 'Garden Salad', foodImage: 'garden.jpg', foodPrice: 4.99, description: 'Mixed greens and veggies', category: 'Salad'},
            {_id: 4, foodName: 'Chicken Salad', foodImage: 'chicken.jpg', foodPrice: 7.99, description: 'Grilled chicken with greens', category: 'Salad'},
            {_id: 5, foodName: 'Fruit Salad', foodImage: 'fruit.jpg', foodPrice: 5.49, description: 'Seasonal fruits mix', category: 'Salad'}
        ]
    },
    {
        menu_name: 'Noodles',
        menu_image: manu_2,
        items: [
            {_id: 6, foodName: 'Chow Mein', foodImage: 'chow_mein.jpg', foodPrice: 8.99, description: 'Stir-fried noodles with veggies', category: 'Noodles'},
            {_id: 7, foodName: 'Pad Thai', foodImage: 'pad_thai.jpg', foodPrice: 9.99, description: 'Thai-style noodles with peanuts', category: 'Noodles'},
            {_id: 8, foodName: 'Ramen', foodImage: 'ramen.jpg', foodPrice: 10.99, description: 'Japanese noodle soup', category: 'Noodles'},
            {_id: 9, foodName: 'Spaghetti', foodImage: 'spaghetti.jpg', foodPrice: 7.99, description: 'Classic Italian pasta', category: 'Noodles'},
            {_id: 10, foodName: 'Udon', foodImage: 'udon.jpg', foodPrice: 9.49, description: 'Thick wheat noodles', category: 'Noodles'}
        ]
    },
    {
        menu_name: 'Burger',
        menu_image: manu_3,
        items: [
            {_id: 11, foodName: 'Cheeseburger', foodImage: 'cheeseburger.jpg', foodPrice: 6.99, description: 'Beef patty with cheese', category: 'Burger'},
            {_id: 12, foodName: 'Veggie Burger', foodImage: 'veggie_burger.jpg', foodPrice: 5.99, description: 'Grilled veggie patty', category: 'Burger'},
            {_id: 13, foodName: 'Chicken Burger', foodImage: 'chicken_burger.jpg', foodPrice: 7.49, description: 'Grilled chicken patty', category: 'Burger'},
            {_id: 14, foodName: 'Bacon Burger', foodImage: 'bacon_burger.jpg', foodPrice: 8.99, description: 'Beef patty with bacon', category: 'Burger'},
            {_id: 15, foodName: 'Fish Burger', foodImage: 'fish_burger.jpg', foodPrice: 7.99, description: 'Fried fish fillet', category: 'Burger'}
        ]
    },
    {
        menu_name: 'Pasta',
        menu_image: manu_4,
        items: [
            {_id: 16, foodName: 'Carbonara', foodImage: 'carbonara.jpg', foodPrice: 9.99, description: 'Creamy pasta with bacon', category: 'Pasta'},
            {_id: 17, foodName: 'Bolognese', foodImage: 'bolognese.jpg', foodPrice: 8.99, description: 'Pasta with meat sauce', category: 'Pasta'},
            {_id: 18, foodName: 'Alfredo', foodImage: 'alfredo.jpg', foodPrice: 9.49, description: 'Creamy white sauce pasta', category: 'Pasta'},
            {_id: 19, foodName: 'Pesto Pasta', foodImage: 'pesto.jpg', foodPrice: 8.49, description: 'Pasta with basil pesto', category: 'Pasta'},
            {_id: 20, foodName: 'Lasagna', foodImage: 'lasagna.jpg', foodPrice: 10.99, description: 'Layered pasta with cheese', category: 'Pasta'}
        ]
    },
    {
        menu_name: 'Pure Vegetarian',
        menu_image: manu_5,
        items: [
            {_id: 21, foodName: 'Vegetable Curry', foodImage: 'veg_curry.jpg', foodPrice: 7.99, description: 'Mixed veggies in curry sauce', category: 'Pure Vegetarian'},
            {_id: 22, foodName: 'Tofu Stir-fry', foodImage: 'tofu_stirfry.jpg', foodPrice: 8.49, description: 'Tofu with mixed veggies', category: 'Pure Vegetarian'},
            {_id: 23, foodName: 'Veggie Wrap', foodImage: 'veggie_wrap.jpg', foodPrice: 6.99, description: 'Grilled veggies in a wrap', category: 'Pure Vegetarian'},
            {_id: 24, foodName: 'Lentil Soup', foodImage: 'lentil_soup.jpg', foodPrice: 5.99, description: 'Hearty lentil soup', category: 'Pure Vegetarian'},
            {_id: 25, foodName: 'Veg Biryani', foodImage: 'stuffed_peppers.jpg', foodPrice: 7.49, description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices', category: 'Pure Vegetarian'}
        ]
    },
    {
        menu_name: 'Seafood',
        menu_image: manu_6,
        items: [
            {_id: 26, foodName: 'Grilled Salmon', foodImage: 'grilled_salmon.jpg', foodPrice: 12.99, description: 'Salmon fillet with herbs', category: 'Seafood'},
            {_id: 27, foodName: 'Shrimp Scampi', foodImage: 'shrimp_scampi.jpg', foodPrice: 11.99, description: 'Shrimp in garlic butter', category: 'Seafood'},
            {_id: 28, foodName: 'Fish Tacos', foodImage: 'fish_tacos.jpg', foodPrice: 9.99, description: 'Tacos with fried fish', category: 'Seafood'},
            {_id: 29, foodName: 'Lobster Roll', foodImage: 'lobster_roll.jpg', foodPrice: 14.99, description: 'Lobster in a soft roll', category: 'Seafood'},
            {_id: 30, foodName: 'Ilish Bhapa', foodImage: 'Ilish_bhapa.png', foodPrice: 13.49, description: 'Hilsha fish withcoconut paste, along with spicy mustard paste mixed with curd', category: 'Seafood'}
        ]
    },
    {
        menu_name: 'Dessert',
        menu_image: manu_7,
        items: [
            {_id: 31, foodName: 'Chocolate Cake', foodImage: 'chocolate_cake.jpg', foodPrice: 4.99, description: 'Rich chocolate cake', category: 'Dessert'},
            {_id: 32, foodName: 'Cheesecake', foodImage: 'cheesecake.jpg', foodPrice: 5.99, description: 'Creamy cheesecake', category: 'Dessert'},
            {_id: 33, foodName: 'Ice Cream', foodImage: 'ice_cream.jpg', foodPrice: 3.99, description: 'Assorted flavors', category: 'Dessert'},
            {_id: 34, foodName: 'Brownie', foodImage: 'brownie.jpg', foodPrice: 2.99, description: 'Fudgy chocolate brownie', category: 'Dessert'},
            {_id: 35, foodName: 'Fruit Tart', foodImage: 'fruit_tart.jpg', foodPrice: 4.49, description: 'Tart with fresh fruits', category: 'Dessert'}
        ]
    },
    {
        menu_name: 'Rolls',
        menu_image: manu_8,
        items: [
            {_id: 36, foodName: 'Spring Roll', foodImage: 'spring_roll.jpg', foodPrice: 5.49, description: 'Crispy veggie roll', category: 'Rolls'},
            {_id: 37, foodName: 'Egg Roll', foodImage: 'egg_roll.jpg', foodPrice: 5.99, description: 'Roll with egg and veggies', category: 'Rolls'},
            {_id: 38, foodName: 'Chicken Roll', foodImage: 'chicken_roll.jpg', foodPrice: 6.49, description: 'Grilled chicken roll', category: 'Rolls'},
            {_id: 39, foodName: 'Beef Roll', foodImage: 'beef_roll.jpg', foodPrice: 6.99, description: 'Beef and veggie roll', category: 'Rolls'},
            {_id: 40, foodName: 'Shrimp Roll', foodImage: 'shrimp_roll.jpg', foodPrice: 7.49, description: 'Shrimp and veggie roll', category: 'Rolls'}
        ]
    },
    {
        menu_name: 'Pizza',
        menu_image: manu_9,
        items: [
            {_id: 41, foodName: 'Margherita', foodImage: 'margherita.jpg', foodPrice: 8.99, description: 'Classic cheese and tomato', category: 'Pizza'},
            {_id: 42, foodName: 'Pepperoni', foodImage: 'pepperoni.jpg', foodPrice: 9.99, description: 'Pepperoni and cheese', category: 'Pizza'},
            {_id: 43, foodName: 'BBQ Chicken', foodImage: 'bbq_chicken.jpg', foodPrice: 10.99, description: 'BBQ sauce and chicken', category: 'Pizza'},
            {_id: 44, foodName: 'Veggie', foodImage: 'veggie_pizza.jpg', foodPrice: 8.49, description: 'Mixed veggies', category: 'Pizza'},
            {_id: 45, foodName: 'Hawaiian', foodImage: 'hawaiian.jpg', foodPrice: 9.49, description: 'Ham and pineapple', category: 'Pizza'}
        ]
    },
    {
        menu_name: 'Sandwich',
        menu_image: manu_10,
        items: [
            {_id: 46, foodName: 'Club Sandwich', foodImage: 'club_sandwich.jpg', foodPrice: 6.99, description: 'Triple-layered sandwich', category: 'Sandwich'},
            {_id: 47, foodName: 'BLT', foodImage: 'blt.jpg', foodPrice: 5.99, description: 'Bacon, lettuce, and tomato', category: 'Sandwich'},
            {_id: 48, foodName: 'Grilled Cheese', foodImage: 'grilled_cheese.jpg', foodPrice: 4.99, description: 'Melted cheese sandwich', category: 'Sandwich'},
            {_id: 49, foodName: 'Chicken Sandwich', foodImage: 'chicken_sandwich.jpg', foodPrice: 7.49, description: 'Grilled chicken and veggies', category: 'Sandwich'},
            {_id: 50, foodName: 'Tuna Sandwich', foodImage: 'tuna_sandwich.jpg', foodPrice: 6.49, description: 'Tuna and mayo', category: 'Sandwich'}
        ]
    }
    ]