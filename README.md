# Smartshop 
https://github.com/eshop88/passive-income-site.git
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smartshop – Dein Webshop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Smartshop</h1>
        <p>Einfach. Schnell. Online einkaufen.</p>
    </header>

    <nav>
        <a href="#">Start</a>
        <a href="#products">Produkte</a>
        <a href="#auth">Login</a>
    </nav>

    <main class="container">
        <section id="products">
            <h2>Top-Produkte</h2>
            <div class="products">
                <div class="product">
                    <img src="https://via.placeholder.com/200x150" alt="Produkt 1">
                    <h3>Produkt 1</h3>
                    <p>Beschreibung Produkt 1</p>
                    <strong>29,99 €</strong>
                </div>
                <!-- Weitere Produkte hier -->
            </div>
        </section>

        <section id="auth">
            <h2>Registrieren / Anmelden</h2>
            <form id="registerForm">
                <input type="text" placeholder="Benutzername" id="registerUsername" required>
                <input type="email" placeholder="Email" id="registerEmail" required>
                <input type="password" placeholder="Passwort" id="registerPassword" required>
                <button type="submit">Registrieren</button>
            </form>

            <form id="loginForm">
                <input type="email" placeholder="Email" id="loginEmail" required>
                <input type="password" placeholder="Passwort" id="loginPassword" required>
                <button type="submit">Anmelden</button>
            </form>
        </section>
    </main>

    <footer>
        &copy; 2025 Smartshop – Alle Rechte vorbehalten.
    </footer>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #f5f5f5;
    color: #333;
}

header, footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
}

nav {
    background-color: #34495e;
    text-align: center;
    padding: 10px;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}

.container {
    padding: 20px;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product {
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    text-align: center;
}

input, button {
    margin-top: 10px;
    padding: 10px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

button {
    background-color: #27ae60;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #219150;
}
// Registrierung
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    alert(data.msg || data.error);
});

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Erfolgreich eingeloggt!");
    } else {
        alert(data.msg || "Login fehlgeschlagen");
    }
});
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/smartshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB verbunden"))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

// Registrierung
app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (await User.findOne({ email })) {
        return res.status(400).json({ msg: "Benutzer existiert bereits" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashed });
    await newUser.save();
    res.json({ msg: "Registrierung erfolgreich" });
});

// Login
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ msg: "Ungültige Zugangsdaten" });
    }

    const token = jwt.sign({ id: user._id }, "meinGeheimToken", { expiresIn: "1h" });
    res.json({ token });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
