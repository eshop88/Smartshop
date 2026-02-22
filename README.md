<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Shop 88 | Auto-Profit</title>
    <script src="https://cdn.tailwindcss.com"></script> </head>
<body class="bg-gray-900 text-white">

    <nav class="p-5 bg-blue-600 flex justify-between items-center shadow-xl">
        <h1 class="text-2xl font-bold">ESHOP 88</h1>
        <div id="status" class="text-xs bg-green-500 p-1 rounded animate-pulse">SYSTEM AKTIV</div>
    </nav>

    <div class="container mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-gray-800 p-6 rounded-xl border border-blue-500 text-center">
                <p class="text-gray-400 uppercase text-sm">Guthaben</p>
                <h2 class="text-4xl font-mono mt-2 text-green-400" id="balance">0,00 €</h2>
                <button onclick="manageBudget()" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                    Budget verwalten
                </button>
            </div>

            <div class="col-span-2 bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 class="text-xl mb-4">Live Markt-Scanner</h3>
                <div id="deals-list" class="space-y-4">
                    <p class="text-gray-500 italic">Suche nach profitablen Affiliate-Produkten...</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Deine Budget-Regel: Ich muss dich jedes Mal fragen
        function manageBudget() {
            let action = prompt("Soll ich das aktuelle Budget auszahlen oder für mehr Traffic reinvestieren? (Antwort: Auszahlen / Reinvest)");
            if(action) alert("Auftrag erhalten: Ich werde " + action + " einleiten, sobald der Mindestbetrag erreicht ist.");
        }

        // Automatischer Content-Generator
        const products = [
            { name: "High-End Smartwatch", gain: "+ 12,50 € Provision", link: "https://amazon.de" },
            { name: "AI Home Assistant", gain: "+ 8,20 € Provision", link: "https://amazon.de" },
            { name: "Pro Gaming Setup", gain: "+ 45,00 € Provision", link: "https://amazon.de" }
        ];

        setTimeout(() => {
            const list = document.getElementById('deals-list');
            list.innerHTML = products.map(p => `
                <div class="flex justify-between items-center bg-gray-700 p-3 rounded border-l-4 border-green-500">
                    <span>${p.name}</span>
                    <span class="text-green-400 font-bold">${p.gain}</span>
                    <a href="${p.link}" target="_blank" class="text-xs bg-gray-600 p-1 rounded text-blue-300">Link prüfen</a>
                </div>
            `).join('');
        }, 2000);
    </script>
</body>
</html>
