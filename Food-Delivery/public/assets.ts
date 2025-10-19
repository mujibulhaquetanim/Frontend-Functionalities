// DELETE all image import statements from this file.
// For example, remove: import manu_1 from '../public/menuImages/salad.png';
// and remove: import caesarSalad from '../public/foodList/caesar-salad.jpg';


export const menu_list = [
    {menu_name: 'Salad',
    menu_image: '/menuImages/salad.png'},
    {menu_name: 'Noodles',
    menu_image: '/menuImages/noodles.png'},
    {menu_name: 'Burger',
    menu_image: '/menuImages/burger.png'},
    {menu_name: 'Pasta',
    menu_image: '/menuImages/pasta.jpg'},
    {menu_name: 'Pure Veg',
    menu_image: '/menuImages/pure-veg.png'},
    {menu_name: 'Seafood',
    menu_image: '/menuImages/seafood.png'},
    {menu_name: 'Dessert',
    menu_image: '/menuImages/dessert.jpg'},
    {menu_name: 'Rolls',
    menu_image: '/menuImages/rolls.jpg'},
    {menu_name: 'Pizza',
    menu_image: '/menuImages/pizza.png'},
    {menu_name: 'Sandwich',
    menu_image: '/menuImages/sandwich.png'},
]

export const food_list = [
    {
        menu_name: 'Salad',
        menu_image: '/menuImages/salad.png',
        items: [
            {_id: 1, foodName: 'Caesar Salad', foodImage: '/foodList/caesar-salad.jpg', foodPrice: 5.99, description: 'Classic Caesar with croutons', category: 'Salad'},
            {_id: 2, foodName: 'Greek Salad', foodImage: '/foodList/greek-salad.jpg', foodPrice: 6.99, description: 'Fresh veggies with feta', category: 'Salad'},
            {_id: 3, foodName: 'Garden Salad', foodImage: '/foodList/garden-salad.jpg', foodPrice: 4.99, description: 'Mixed greens and veggies', category: 'Salad'},
            {_id: 4, foodName: 'Chicken Salad', foodImage: '/foodList/chicken-salad.jpg', foodPrice: 7.99, description: 'Grilled chicken with greens', category: 'Salad'},
            {_id: 5, foodName: 'Fruit Salad', foodImage: '/foodList/fruit-salad.jpg', foodPrice: 5.49, description: 'Seasonal fruits mix', category: 'Salad'}
        ]
    },
    {
        menu_name: 'Noodles',
        menu_image: '/menuImages/noodles.png',
        items: [
            {_id: 6, foodName: 'Chow Mein', foodImage: '/foodList/chow-mein.jpg', foodPrice: 8.99, description: 'Stir-fried noodles with veggies', category: 'Noodles'},
            {_id: 7, foodName: 'Pad Thai', foodImage: '/foodList/pad-thai.jpg', foodPrice: 9.99, description: 'Thai-style noodles with peanuts', category: 'Noodles'},
            {_id: 8, foodName: 'Ramen', foodImage: '/foodList/ramen.jpg', foodPrice: 10.99, description: 'Japanese noodle soup', category: 'Noodles'},
            {_id: 9, foodName: 'Spaghetti', foodImage: '/foodList/italian-pasta.jpg', foodPrice: 7.99, description: 'Classic Italian pasta', category: 'Noodles'},
            {_id: 10, foodName: 'Udon', foodImage: '/foodList/udon.jpg', foodPrice: 9.49, description: 'Thick wheat noodles', category: 'Noodles'}
        ]
    },
    {
        menu_name: 'Burger',
        menu_image: '/menuImages/burger.png',
        items: [
            {_id: 11, foodName: 'Cheeseburger', foodImage: '/foodList/cheese-burger.jpg', foodPrice: 6.99, description: 'Beef patty with cheese', category: 'Burger'},
            {_id: 12, foodName: 'Veggie Burger', foodImage: '/foodList/veggie-burger.jpg', foodPrice: 5.99, description: 'Grilled veggie patty', category: 'Burger'},
            {_id: 13, foodName: 'Chicken Burger', foodImage: '/foodList/chicken-burger.jpg', foodPrice: 7.49, description: 'Grilled chicken patty', category: 'Burger'},
            {_id: 14, foodName: 'Beef Burger', foodImage: '/foodList/beef-burger.jpg', foodPrice: 8.99, description: 'Delicious beef grove', category: 'Burger'},
            {_id: 15, foodName: 'Fish Burger', foodImage: '/foodList/fish-burger.jpg', foodPrice: 7.99, description: 'Fried fish fillet', category: 'Burger'}
        ]
    },
    {
        menu_name: 'Pasta',
        menu_image: '/menuImages/pasta.jpg',
        items: [
            {_id: 16, foodName: 'Carbonara', foodImage: '/foodList/carbonara.jpg', foodPrice: 9.99, description: 'Creamy pasta with bacon', category: 'Pasta'},
            {_id: 17, foodName: 'Bolognese', foodImage: '/foodList/bolognese.jpg', foodPrice: 8.99, description: 'Pasta with meat sauce', category: 'Pasta'},
            {_id: 18, foodName: 'Alfredo', foodImage: '/foodList/alfredo.jpg', foodPrice: 9.49, description: 'Creamy white sauce pasta with chicken', category: 'Pasta'},
            {_id: 19, foodName: 'Pesto Pasta', foodImage: '/foodList/pesto-pasta.jpg', foodPrice: 8.49, description: 'Pasta with basil pesto', category: 'Pasta'},
            {_id: 20, foodName: 'Lasagna', foodImage: '/foodList/lasagna.jpg', foodPrice: 10.99, description: 'Layered pasta with cheese', category: 'Pasta'}
        ]
    },
    {
        menu_name: 'Pure Vegetarian',
        menu_image: '/menuImages/pure-veg.png',
        items: [
            {_id: 21, foodName: 'Vegetable Curry', foodImage: '/foodList/veg-curry.jpg', foodPrice: 7.99, description: 'Mixed veggies in curry sauce', category: 'Pure Veg'},
            {_id: 22, foodName: 'Tofu Stir-fry', foodImage: '/foodList/tofu-stir-fry.jpg', foodPrice: 8.49, description: 'Tofu with mixed veggies', category: 'Pure Veg'},
            {_id: 23, foodName: 'Veggie Wrap', foodImage: '/foodList/veggie-wrap.jpg', foodPrice: 6.99, description: 'Grilled veggies in a wrap', category: 'Pure Veg'},
            {_id: 24, foodName: 'Lentil Soup', foodImage: '/foodList/lentil-soup.jpg', foodPrice: 5.99, description: 'Hearty lentil soup', category: 'Pure Veg'},
            {_id: 25, foodName: 'Veg Biryani', foodImage: '/foodList/veg-biryani.jpg', foodPrice: 8.99, description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices', category: 'Pure Veg'}
        ]
    },
    {
        menu_name: 'Seafood',
        menu_image: '/menuImages/seafood.png',
        items: [
            {_id: 26, foodName: 'Grilled Salmon', foodImage: '/foodList/grilled-salmon.jpg', foodPrice: 12.99, description: 'Salmon fillet with herbs', category: 'Seafood'},
            {_id: 27, foodName: 'Shrimp Scampi', foodImage: '/foodList/shrimp-scampi.jpg', foodPrice: 11.99, description: 'Shrimp in garlic butter', category: 'Seafood'},
            {_id: 28, foodName: 'Fish Tacos', foodImage: '/foodList/fish-tacos.jpg', foodPrice: 9.99, description: 'Tacos with fried fish', category: 'Seafood'},
            {_id: 29, foodName: 'Lobster Roll', foodImage: '/foodList/lobster-roll.jpg', foodPrice: 14.99, description: 'Lobster in a soft roll', category: 'Seafood'},
            {_id: 30, foodName: 'Ilish Bhapa', foodImage: '/foodList/ilish-bhapa.png', foodPrice: 13.49, description: 'Hilsha fish withcoconut paste, along with spicy mustard paste mixed with curd', category: 'Seafood'}
        ]
    },
    {
        menu_name: 'Dessert',
        menu_image: '/menuImages/dessert.jpg',
        items: [
            {_id: 31, foodName: 'Chocolate Cake', foodImage: '/foodList/chocolate-cake.jpg', foodPrice: 4.99, description: 'Rich chocolate cake', category: 'Dessert'},
            {_id: 32, foodName: 'Cheesecake', foodImage: '/foodList/cheesecake.jpg', foodPrice: 5.99, description: 'Creamy cheesecake', category: 'Dessert'},
            {_id: 33, foodName: 'Baklava', foodImage: '/foodList/baklava.jpg', foodPrice: 3.99, description: 'Turkish sweet Pastry', category: 'Dessert'},
            {_id: 34, foodName: 'Brownie', foodImage: '/foodList/brownie.jpg', foodPrice: 2.99, description: 'Fudgy chocolate brownie with nuts', category: 'Dessert'},
            {_id: 35, foodName: 'Fruit Tart', foodImage: '/foodList/fruit-tart.jpg', foodPrice: 4.49, description: 'Tart with fresh fruits', category: 'Dessert'}
        ]
    },
    {
        menu_name: 'Rolls',
        menu_image: '/menuImages/rolls.jpg',
        items: [
            {_id: 36, foodName: 'Spring Roll', foodImage: '/foodList/spring-roll.jpg', foodPrice: 5.49, description: 'Crispy veggie roll', category: 'Rolls'},
            {_id: 37, foodName: 'Egg Roll', foodImage: '/foodList/egg-roll.jpg', foodPrice: 5.99, description: 'Roll with egg and veggies', category: 'Rolls'},
            {_id: 38, foodName: 'Chicken Roll', foodImage: '/foodList/chicken-roll.jpg', foodPrice: 6.49, description: 'Juicy chicken bread roll', category: 'Rolls'},
            {_id: 39, foodName: 'Beef Roll', foodImage: '/foodList/beef-roll.jpg', foodPrice: 6.99, description: 'Beef and veggie roll', category: 'Rolls'},
            {_id: 40, foodName: 'Shrimp Roll', foodImage: '/foodList/shrimp-roll.jpg', foodPrice: 7.49, description: 'Shrimp Tempura Roll', category: 'Rolls'}
        ]
    },
    {
        menu_name: 'Pizza',
        menu_image: '/menuImages/pizza.png',
        items: [
            {_id: 41, foodName: 'Margherita', foodImage: '/foodList/margherita.jpg', foodPrice: 8.99, description: 'Classic cheese and tomato', category: 'Pizza'},
            {_id: 42, foodName: 'Pepperoni', foodImage: '/foodList/pepperoni.jpg', foodPrice: 9.99, description: 'Pepperoni and cheese', category: 'Pizza'},
            {_id: 43, foodName: 'BBQ Chicken Pizza', foodImage: '/foodList/bbq-chicken.jpg', foodPrice: 10.99, description: 'BBQ sauce and chicken', category: 'Pizza'},
            {_id: 44, foodName: 'Veggie Pizza', foodImage: '/foodList/veggie-pizza.jpg', foodPrice: 8.49, description: 'Mixed veggies', category: 'Pizza'},
            {_id: 45, foodName: 'Hawaiian', foodImage: '/foodList/hawaiian.jpg', foodPrice: 9.49, description: 'Ham and pineapple', category: 'Pizza'}
        ]
    },
    {
        menu_name: 'Sandwich',
        menu_image: '/menuImages/sandwich.png',
        items: [
            {_id: 46, foodName: 'Club Sandwich', foodImage: '/foodList/club-sandwich.jpg', foodPrice: 6.99, description: 'Triple-layered sandwich', category: 'Sandwich'},
            {_id: 47, foodName: 'Rosted Veggie', foodImage: '/foodList/roasted-veggie.jpg', foodPrice: 5.99, description: 'Rosted vegetables sandwich', category: 'Sandwich'},
            {_id: 48, foodName: 'Grilled Cheese', foodImage: '/foodList/grilled-cheese.jpg', foodPrice: 4.99, description: 'Melted cheese sandwich', category: 'Sandwich'},
            {_id: 49, foodName: 'Mesquite Chicken', foodImage: '/foodList/mesquite-chicken.jpg', foodPrice: 7.49, description: 'Grilled Mesquite Chicken Sandwich', category: 'Sandwich'},
            {_id: 50, foodName: 'Tuna Sandwich', foodImage: '/foodList/tuna-sandwich.jpg', foodPrice: 6.49, description: 'Tuna and mayo', category: 'Sandwich'}
        ]
    }
]