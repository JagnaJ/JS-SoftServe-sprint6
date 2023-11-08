//1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
// ВИПРАВЛЕНЕ ЗАВДАННЯ
<!DOCTYPE html>
<html>
<head>
    <title>Display List Items</title>
</head>
<body>

<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>

<button onclick="displayList()">Display List</button>

<script>
function displayList() {
    let list = document.getElementById("list"); //виправила var на let

    let items = list.getElementsByTagName("li"); //виправила var на let

    let result = items[0].textContent + ", " + 
                  items[4].textContent + ", " +
                  items[1].textContent + ", " +
                  items[3].textContent + ", " +
                  items[2].textContent;

    alert("Result: " + result);
}
</script>

</body>
</html>

//2.  Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
// https://media.discordapp.net/attachments/1080492799943790642/1088041210431684648/image.png
// ВИПРАВЛЕНЕ ЗАВДАННЯ (Ваш коментар - "все потрібно було реалізувати через js а не в css файлі")
let myDiv = document.getElementById('myDiv');
let myList = document.getElementById('myList');
let span = document.querySelector('span');

myDiv.style.textAlign = 'center';

let paragraphs = myDiv.getElementsByTagName('p');
paragraphs[0].style.fontWeight = 'bold';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';

myList.style.listStyleType = 'none';

let listItems = myList.getElementsByTagName('li');
for (let i = 1; i < listItems.length; i++) {
    listItems[i].style.display = 'none';
}
let combinedWord = '';
for (let i = 0; i < listItems.length; i++) {
    combinedWord += listItems[i].textContent;
}
listItems[0].textContent = combinedWord;
span.style.display = 'none';


//3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
//Виправила var на let
<!DOCTYPE html>
<html>
<head>
    <title>Creating Page Structure</title>
</head>
<body>
    <script>
        let mainElement = document.createElement("main");
        mainElement.className = "mainClass check item";

        let divElement = document.createElement("div");
        divElement.id = "myDiv";

        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = "First paragraph";

        divElement.appendChild(paragraphElement);
        mainElement.appendChild(divElement);
        document.body.appendChild(mainElement);
    </script>
</body>
</html>

//Завдання 4. Виправила var на let
//https://codepen.io/misha_klymenko/pen/Jjabvez
function displayData() {
    let inputElements = document.querySelectorAll('.arr');
    let outBlock = document.querySelector('.out');
    let outputText = "Дані з полів:\n";

    inputElements.forEach(function (input) {
        let label = input.getAttribute('data-form');
        let value = input.value;
        outputText += label + ": " + value + "\n";
    });

    outBlock.textContent = outputText;
}

//Завдання 5. Виправила var на let.
//https://codepen.io/misha_klymenko/pen/abzLvqo
let circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
  let dataAnim = circle.getAttribute("data-anim");

  circle.classList.add(dataAnim);
  
  let isAnimationApplied = circle.classList.contains(dataAnim);
  if (isAnimationApplied) {
    console.log(`Анімація "${dataAnim}" була застосована до елемента.`);
  } else {
    console.log(`Анімація "${dataAnim}" не була застосована до елемента.`);
  }
});

//ВИПРАВЛЕНЕ ЗАВДАННЯ 6.
//https://codepen.io/misha_klymenko/pen/dyjyeGO
 <div class="variations">
    <button id="variation1" data-price="50">Variation 1</button>
    <button id="variation2" data-price="30">Variation 2</button>
</div> //добавила дві кнопки в html

//JS
    document.addEventListener("DOMContentLoaded", function () {
        const colors = document.querySelectorAll(".color");
        const outPrice = document.getElementById("outprice");
        const additionalVariation1 = 50; // Додаткова варіація 1
        const additionalVariation2 = 30; // Додаткова варіація 2

        let basePrice = parseFloat(outPrice.innerText);

        // оновлення ціни товару
        function updatePrice() {
            let selectedColor = null;

            colors.forEach((color) => {
                if (color.classList.contains("active")) {
                    selectedColor = color;
                }
            });

            if (selectedColor) {
                const colorPrice = parseFloat(selectedColor.getAttribute("data-price"));
                const totalPrice = basePrice + colorPrice + additionalVariation1 + additionalVariation2;
                outPrice.innerText = totalPrice.toFixed(2);
            }
        }

        // Обробник подій для кольорів
        colors.forEach((color) => {
            color.addEventListener("click", () => {
                colors.forEach((c) => c.classList.remove("active"));
                color.classList.add("active");
                updatePrice();
            });
        });

        // НОВІ ВАРІАЦІЇ
        const variation1Button = document.getElementById("variation1");
        const variation2Button = document.getElementById("variation2");

        variation1Button.addEventListener("click", () => {
            basePrice += additionalVariation1;
            updatePrice();
        });

        variation2Button.addEventListener("click", () => {
            basePrice += additionalVariation2;
            updatePrice();
        });

        updatePrice();
    });


