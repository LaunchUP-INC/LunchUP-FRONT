 export const dishes = [
   
      {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "description": "Clásico plato italiano con huevos, queso, panceta y pimienta negra.",
        "price": 20,
        "images": ["https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg","https://i.blogs.es/8819e1/carbonara-rec/650_1200.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Classic-spaghetti-carbonara.jpg/640px-Classic-spaghetti-carbonara.jpg"],
        "Meal_Type": {
          "id": 1,
          "name": "Almuerzo"
        },
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "preparationTime": 30,
        "servings": 4
      },
      {
        "id": 2,
        "name": "Vegetable Stir Fry",
        "description": "Salteado de verduras frescas con salsa de soja.",
        "price": 18,
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglVAdjSKlGW_lqoWhbHtHY7h6jAxjg-kgIw&s","https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg","https://www.onceuponachef.com/images/2017/02/Asian-Vegetable-Stir-Fry-3.jpg"],
        "Meal_Type": {
          "id": 2,
          "name": "Cena"
        },
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "preparationTime": 20,
        "servings": 2
      },
      {
        "id": 3,
        "name": "Chicken Caesar Salad",
        "description": "Ensalada clásica con pollo, lechuga romana y aderezo César.",
        "price": 22,
        "images": ["https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg?quality=90&resize=440,400","https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/08/chicken-caesar-salad-5709w.jpg"],
        "Meal_Type": {
          "id": 3,
          "name": "Ensalada"
        },
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "preparationTime": 15,
        "servings": 2
      },
      {
        "id": 4,
        "name": "Margherita Pizza",
        "description": "Pizza clásica con tomate, mozzarella y albahaca.",
        "price": 25,
        "images": ["https://en-chatelaine.mblycdn.com/uploads/ench/2023/07/margherita-pizza.jpg","https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format"],
        "Meal_Type": {
          "id": 1,
          "name": "Almuerzo"
        },
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "preparationTime": 40,
        "servings": 4
      },
      {
        "id": 5,
        "name": "Lentil Soup",
        "description": "Sopa nutritiva de lentejas con vegetales.",
        "price": 15,
        "images": ["https://thegreekfoodie.com/wp-content/uploads/2021/01/Greek_lentil_soup_SQ.jpg","https://30daysofgreekfood.com/wp-content/uploads/2020/01/IMG_7741-500x500.jpg"],
        "Meal_Type": {
          "id": 4,
          "name": "Sopa"
        },
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "preparationTime": 50,
        "servings": 6
      },
      {
        "id": 6,
        "name": "Beef Tacos",
        "description": "Tacos mexicanos con carne de res y vegetales frescos.",
        "price": 24,
        "images": ["https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-768x575.jpg"],
        "Meal_Type": {
          "id": 1,
          "name": "Almuerzo"
        },
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "preparationTime": 30,
        "servings": 4
      },
      {
        "id": 7,
        "name": "Vegan Burger",
        "description": "Hamburguesa vegana con garbanzos y vegetales.",
        "price": 19,
        "images": ["https://minimalistbaker.com/wp-content/uploads/2021/04/Best-Vegan-Burger-SQUARE.jpg"],
        "Meal_Type": {
          "id": 2,
          "name": "Cena"
        },
        "vegetarian": true,
        "vegan": true,
        "glutenFree": false,
        "dairyFree": true,
        "preparationTime": 25,
        "servings": 2
      },
      {
        "id": 8,
        "name": "Greek Salad",
        "description": "Ensalada griega con tomates, pepino, cebolla y feta.",
        "price": 16,
        "images": ["https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3-735x735.jpeg"],
        "Meal_Type": {
          "id": 3,
          "name": "Ensalada"
        },
        "vegetarian": true,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "preparationTime": 10,
        "servings": 2
      },
      {
        "id": 9,
        "name": "Pancakes",
        "description": "Panqueques esponjosos con miel y frutas.",
        "price": 12,
        "images": ["https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.8890503582601677xw:1xh;center,top&resize=1200:*"],
        "Meal_Type": {
          "id": 5,
          "name": "Desayuno"
        },
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "preparationTime": 15,
        "servings": 4
      },
      {
        "id": 10,
        "name": "Grilled Salmon",
        "description": "Salmón a la parrilla con limón y hierbas.",
        "price": 28,
        "images": ["https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"],
        "Meal_Type": {
          "id": 1,
          "name": "Almuerzo"
        },
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "preparationTime": 25,
        "servings": 2
      },
      {
        "id": 11,
        "name": "Chocolate Cake",
        "description": "Pastel de chocolate decadente con glaseado de chocolate.",
        "price": 30,
        "images": ["https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-from-scratch-8.jpg"],
        "Meal_Type": {
          "id": 6,
          "name": "Postre"
        },
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "preparationTime": 60,
        "servings": 8
      },
      {
        "id": 12,
        "name": "Avocado Toast",
        "description": "Tostada de aguacate con semillas y limón.",
        "price": 10,
        "images": ["https://vancouverwithlove.com/wp-content/uploads/2023/05/high-protein-avocado-toast-featured.jpg"],
        "Meal_Type": {
          "id": 5,
          "name": "Desayuno"
        },
        "vegetarian": true,
        "vegan": true,
        "glutenFree": false,
        "dairyFree": true,
        "preparationTime": 10,
        "servings": 1
      }
    ];
  
  
