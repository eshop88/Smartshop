# Smartshop 

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>SmartShop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>SmartShop – Smarter Einkaufen</h1>

    <section id="coupons">
        <h2>Wöchentliche Coupons</h2>
        <ul id="coupon-list">
            <li>REWE – 10% auf Obst</li>
            <li>Lidl – 1+1 gratis auf Pasta</li>
            <li>Edeka – 20% auf vegane Produkte</li>
        </ul>
    </section>

    <section id="einkaufsliste">
        <h2>Deine Einkaufsliste</h2>
        <input type="text" id="item-input" placeholder="z. B. Milch hinzufügen">
        <button onclick="addItem()">Hinzufügen</button>
        <ul id="item-list"></ul>
    </section>

    <section id="rezepte">
        <h2>Rezept-Idee der Woche</h2>
        <p><strong>Nudeln mit Tomatensoße</strong></p>
        <ul>
            <li>Nudeln – 0,79€ (Lidl)</li>
            <li>Tomatensoße – 1,29€ (REWE)</li>
            <li>Basilikum – 0,99€ (Edeka)</li>
        </ul>
    </section>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f5f5f5;
    color: #333;
}

h1, h2 {
    color: #2c3e50;
}

section {
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

input[type="text"] {
    padding: 8px;
    width: 60%;
    margin-right: 10px;
}

button {
    padding: 8px 12px;
    background-color: #27ae60;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #219150;
}
function addItem() {
    const input = document.getElementById('item-input');
    const itemText = input.value.trim();
    if (itemText === "") return;

    const list = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = itemText;
    list.appendChild(li);
    input.value = "";
}
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Smartshop</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <h1>Willkommen bei Smartshop!</h1>
    <p>Hier entsteht dein Webshop-Projekt.</p>
</body>
</html>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Smartshop – Dein Webshop</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f4f4;
        }
        header {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        nav {
            background: #34495e;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }
        .container {
            padding: 20px;
        }
        .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }
        .product {
            background: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0,0,0,0.1);
            text-align: center;
        }
        .product img {
            max-width: 100%;
            height: auto;
        }
        footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 15px;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Smartshop</h1>
        <p>Dein smarter Webshop – Einfach. Schnell. Online.</p>
    </header>

    <nav>
        <a href="#">Startseite</a>
        <a href="#">Produkte</a>
        <a href="#">Kontakt</a>
    </nav>

    <div class="container">
        <h2>Unsere Top-Produkte</h2>
        <div class="products">
            <div class="product">
                <img src="https://via.placeholder.com/200x150" alt="Produkt 1">
                <h3>Produkt 1</h3>
                <p>Beschreibung des Produkts.</p>
                <strong>29,99 €</strong>
            </div>
            <div class="product">
                <img src="https://via.placeholder.com/200x150" alt="Produkt 2">
                <h3>Produkt 2</h3>
                <p>Beschreibung des Produkts.</p>
                <strong>49,99 €</strong>
            </div>
            <div class="product">
                <img src="https://via.placeholder.com/200x150" alt="Produkt 3">
                <h3>Produkt 3</h3>
                <p>Beschreibung des Produkts.</p>
                <strong>19,99 €</strong>
            </div>
        </div>
    </div>

    <footer>
        &copy; 2025 Smartshop – Alle Rechte vorbehalten
    </footer>

</body>
</html>