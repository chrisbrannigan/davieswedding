const choices = [
      {
        "id": 1,
        "name": "STACEY DAVIES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 2,
        "name": "JACK MURPHY",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 3,
        "name": "RICHARD DAVIES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 4,
        "name": "LAYLA DAVIES",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 5,
        "name": "KIMBERLEY BRANNIGAN",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 6,
        "name": "BRADY DAVIES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 7,
        "name": "CHRIS SIMS",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 8,
        "name": "JAMIE WARD",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 9,
        "name": "MICHELLE WARD",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 10,
        "name": "TERRI BRANNIGAN",
        "starter": "Carrot and Coriander Soup",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 11,
        "name": "PAUL BRANNIGAN",
        "starter": "Carrot and Coriander Soup",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 12,
        "name": "SHARON ABBOTT",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 13,
        "name": "PHILIP ABBOTT",
        "starter": "Carrot and Coriander Soup",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 14,
        "name": "JEFF NICHOLAS",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 15,
        "name": "LINDA NICHOLAS",
        "starter": "Carrot and Coriander Soup",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 16,
        "name": "MARK RAY",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 17,
        "name": "CHERYL RAY",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 18,
        "name": "JAN JAMES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 19,
        "name": "PHILIP JAMES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 20,
        "name": "MARIAN HALSEY",
        "starter": "Carrot and Coriander Soup",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 21,
        "name": "SOPHIE WOOD",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 22,
        "name": "MATTHEW WOOD",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 23,
        "name": "ANTHONY COLLINS",
        "starter": "Carrot and Coriander Soup",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 24,
        "name": "KELLY COLLINS",
        "starter": "Carrot and Coriander Soup",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 25,
        "name": "ELAINE BENNETT",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 26,
        "name": "SOPHIE BAGNULO",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 27,
        "name": "MARK BAGNULO",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 28,
        "name": "LUCIA BAGNULO",
        "starter": "Carrot and Apple Sticks with Grapes",
        "main": "Cheese and Tomato Pizza",
        "dessert": "Ice Cream"
      },
      {
        "id": 29,
        "name": "NICOLO BAGNULO",
        "starter": "Melon with Raspberry Coulis",
        "main": "Mini Chicken Fillets with Vegetables and Mashed Potato",
        "dessert": "Fruit Salad"
      },
      {
        "id": 30,
        "name": "ELIZABETH BRANNIGAN",
        "dietary_requirements": "Vegan / Vegetarian please",
        "starter": "Pear, Walnut and Pomegranate Salad",
        "main": "Butternut Squash and Spinach Chilli",
        "dessert": "Trio of Sorbets"
      },
      {
        "id": 31,
        "name": "MARK BRANNIGAN",
        "starter": "Carrot and Coriander Soup",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 32,
        "name": "PAUL CHAPPELL-TAYLOR",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 33,
        "name": "ROBERT CHAPPELL-TAYLOR",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 34,
        "name": "DAVID BALL",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 35,
        "name": "CHRIS BRANNIGAN",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 36,
        "name": "NATALIE BRANNIGAN",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 37,
        "name": "ELENA BRANNIGAN",
        "starter": "Soup",
        "main": "Cheese and Tomato Pizza",
        "dessert": "Ice Cream"
      },
      {
        "id": 38,
        "name": "TERESA WOOD",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 39,
        "name": "STUART WOOD",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 40,
        "name": "SANDRA MILLER",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 41,
        "name": "JOHN MILLER",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 42,
        "name": "TONY KING",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 43,
        "name": "PENNY KING",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 44,
        "name": "DAVID KING",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 45,
        "name": "ALMA KING",
        "dietary_requirements": "Allergy to Wheat / Gluten",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 46,
        "name": "TOM JAMES",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 47,
        "name": "JULIA JAMES",
        "dietary_requirements": "No Fish / Seafood",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 48,
        "name": "MARC NICHOLS",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 49,
        "name": "ALISON NICHOLS",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 50,
        "name": "THERESA LAWSON",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 51,
        "name": "DAVID HALSEY",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 52,
        "name": "ZOE BAKER",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 53,
        "name": "SAM BELL",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 54,
        "name": "MATTHEW CHANCER",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Lemon and Lime Cheesecake"
      },
      {
        "id": 55,
        "name": "JENNIFER DORRIAN",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 56,
        "name": "CHARLIE CHANCER",
        "starter": "Carrot and Apple Sticks with Grapes",
        "main": "Cheese and Tomato Pizza",
        "dessert": "Ice Cream"
      },
      {
        "id": 57,
        "name": "TOM MOGFORD",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 58,
        "name": "LAUREN ROBINS",
        "starter": "Carrot and Coriander Soup",
        "main": "Cod Fillet with a Herb Crust, Gratin Potato and a Tomato Pesto Sauce",
        "dessert": "White and Dark Chocolate covered Profiteroles"
      },
      {
        "id": 59,
        "name": "ANNEMARIE JONES",
        "starter": "Carrot and Coriander Soup",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 60,
        "name": "STUART JONES",
        "starter": "Carrot and Coriander Soup",
        "main": "Pan-fried Chicken Breast with Gratin Potato and a Bacon and Leek Sauce",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 61,
        "name": "AMBER BRAIN",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 62,
        "name": "LIAM MORGAN",
        "starter": "Duck Croquette with Gooseberry Jam",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 63,
        "name": "JAMES BRAIN",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Chocolate Brownie with Ice Cream"
      },
      {
        "id": 64,
        "name": "JON BRAIN",
        "starter": "Tomato Bruschetta with Cured Ham",
        "main": "Roast Leg of Lamb with Roast Potatoes and Minted Gravy",
        "dessert": "Lemon and Lime Cheesecake"
      }
];

hideMessages();

function hideMessages(){
    document.getElementById('name').value = '';
    document.getElementById('choices-error-section').style.display = 'none';
    document.getElementById('choices-result-section').style.display = 'none';
}


function setChoices(choicesObj) {

    if(!choicesObj){
        document.getElementById('choices-result-section').style.display = 'none';
        return;
    }
        

    document.getElementById('choices-error-section').style.display = 'none';
    document.getElementById('choices-result-section').style.display = 'block';
    document.getElementById('choice-starter').innerHTML = choicesObj.starter;
    document.getElementById('choice-main').innerHTML = choicesObj.main;
    document.getElementById('choice-dessert').innerHTML = choicesObj.dessert;

    if(choicesObj.hasOwnProperty('dietary_requirements')){
        document.getElementById('choice-dietary').innerHTML = choicesObj.dietary_requirements;
    } else {
        document.getElementById('choice-dietary').innerHTML = "None";
    }

}

function displayMessage(msg) {
    document.getElementById('choices-error-section').style.display = 'block';
    document.getElementById('choices-result-section').style.display = 'none';
    document.getElementById('choice-error-message').innerHTML = msg;
}


function searchForChoices() {

    let name = document.getElementById('name').value;

    if(name == '') {
        displayMessage("Please provide your full name.");
        return;
    }

    var choice = choices.find(function(ch){
        return name.toUpperCase() === ch.name
    });

    if(choice === undefined){
        displayMessage("Could not find choices for  " + name + ". Please try again.");
    } else {
        setChoices(choice);
    }
    
}