//На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
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
    var list = document.getElementById("list");

    var items = list.getElementsByTagName("li");

    var result = items[0].textContent + ", " +
                  items[4].textContent + ", " +
                  items[1].textContent + ", " +
                  items[3].textContent + ", " +
                  items[2].textContent;

    alert("Result: " + result);
}
</script>

</body>
</html>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
// https://media.discordapp.net/attachments/1080492799943790642/1088041210431684648/image.png
<!DOCTYPE html>
<html>
<head>
    <title>Manipulating Page Elements</title>
    <style>
        #myDiv {
            background-color: white;
            text-align: center;
        }
        #myDiv p {
            font-weight: bold;
            margin: 0;
        }
        #myDiv p:nth-child(2) {
            color: red;
        }
        #myDiv p:nth-child(3) {
            text-decoration: underline;
        }
        #myDiv p:nth-child(4) {
            font-style: italic;
        }
        #myList {
            list-style-type: none;
        }
        #myList li {
            display: inline;
        }
        span {
            display: none;
        }
    </style>
</head>
<body>
    <h1 style="background-color: green; color: black; text-align: center;">I'm a big header!!!</h1>
    <div id="myDiv">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
        <p>Fourth paragraph</p>
    </div>
    <ul id="myList">
        <li>Make</li>
        <li>me</li>
        <li>horizontal!</li>
    </ul>
    <span>Make me invisible, please!</span>

    <script>
        var span = document.querySelector('span');
        span.style.display = 'inline';

        var listItems = document.querySelectorAll('#myList li');
        var combinedWord = '';
        listItems.forEach(function (item) {
            combinedWord += item.textContent;
        });
        listItems[0].textContent = combinedWord;
        for (var i = 1; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }
    </script>
</body>
</html>
//Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<!DOCTYPE html>
<html>
<head>
    <title>Creating Page Structure</title>
</head>
<body>
    <script>
        var mainElement = document.createElement("main");
        mainElement.className = "mainClass check item";

        var divElement = document.createElement("div");
        divElement.id = "myDiv";

        var paragraphElement = document.createElement("p");
        paragraphElement.textContent = "First paragraph";

        divElement.appendChild(paragraphElement);
        mainElement.appendChild(divElement);
        document.body.appendChild(mainElement);
    </script>
</body>
</html>

//https://codepen.io/misha_klymenko/pen/Jjabvez
function displayData() {
    var inputElements = document.querySelectorAll('.arr');
    var outBlock = document.querySelector('.out');
    var outputText = "Дані з полів:\n";

    inputElements.forEach(function (input) {
        var label = input.getAttribute('data-form');
        var value = input.value;
        outputText += label + ": " + value + "\n";
    });

    outBlock.textContent = outputText;
}

//https://codepen.io/misha_klymenko/pen/abzLvqo
var circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
  var dataAnim = circle.getAttribute("data-anim");

  circle.classList.add(dataAnim);
  
  var isAnimationApplied = circle.classList.contains(dataAnim);
  if (isAnimationApplied) {
    console.log(`Анімація "${dataAnim}" була застосована до елемента.`);
  } else {
    console.log(`Анімація "${dataAnim}" не була застосована до елемента.`);
  }
});

//https://codepen.io/misha_klymenko/pen/dyjyeGO
<script>
        var colors = document.querySelectorAll(".color");
        var outPrice = document.getElementById("outprice");
        colors.forEach(function(color) {
            color.addEventListener("click", function() {
                var price = color.getAttribute("data-price");
                outPrice.textContent = price;
                colors.forEach(function(col) {
                    col.classList.remove("active");
                });
                color.classList.add("active");
            });
        });
    </script>