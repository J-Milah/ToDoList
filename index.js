const input = document.querySelector("input");
const button = document.getElementById("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Belum diisi");
    } else {
        const li = document.createElement("li");
        li.textContent = input.value;

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = "x";

        li.appendChild(btn);
        ul.append(li);

        btn.addEventListener("click", function () {
            li.remove();
        });

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
        });

        input.value = "";
    }
});

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
});