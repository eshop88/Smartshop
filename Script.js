function addItem() {
  const input = document.getElementById("itemInput");
  const item = input.value.trim();
  if (item) {
    const list = document.getElementById("liste");
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => li.remove(); // Klick zum Löschen
    list.appendChild(li);
    saveList();
    input.value = "";
  }
}

function saveList() {
  const items = [];
  document.querySelectorAll("#liste li").forEach(li => {
    items.push(li.textContent);
  });
  localStorage.setItem("smartshopListe", JSON.stringify(items));
}

function loadList() {
  const saved = JSON.parse(localStorage.getItem("smartshopListe"));
  if (saved) {
    const list = document.getElementById("liste");
    saved.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      li.onclick = () => li.remove();
      list.appendChild(li);
    });
  }
}

window.onload = loadList;
