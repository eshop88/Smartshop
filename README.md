# Smartshop 
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
mkdir smartshop-backend
cd smartshop-backend
npm init -y
npm install express mongoose bcryptjs jsonwebtoken body-parserconst express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB-Verbindung
mongoose.connect("mongodb://localhost/smartshop", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB verbunden"))
    .catch(err => console.log(err));

// Benutzer-Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Registrierung eines Benutzers
app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ msg: "Benutzer existiert bereits" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "Benutzer registriert" });
});

// Anmeldung eines Benutzers
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: "Benutzer nicht gefunden" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Ungültiges Passwort" });
    }

    const token = jwt.sign({ userId: user._id }, "meinGeheimToken", { expiresIn: "1h" });

    res.json({ token });
});

// Starten des Servers
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
<section id="auth">
    <h2>Registrierung / Anmeldung</h2>
    <form id="registerForm">
        <input type="text" id="registerUsername" placeholder="Benutzername" required>
        <input type="email" id="registerEmail" placeholder="Email" required>
        <input type="password" id="registerPassword" placeholder="Passwort" required>
        <button type="submit">Registrieren</button>
    </form>

    <form id="loginForm">
        <input type="email" id="loginEmail" placeholder="Email" required>
        <input type="password" id="loginPassword" placeholder="Passwort" required>
        <button type="submit">Anmelden</button>
    </form>
</section>
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    alert(data.msg);
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("authToken", data.token);
        alert("Erfolgreich eingeloggt!");
    } else {
        alert("Anmeldung fehlgeschlagen");
    }
});


