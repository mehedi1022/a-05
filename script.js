const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.innerText;
        const category = "Economoy";
        const price = 550;

        const selectedContainer = document.getElementById("selected-seat-container");

        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seat;
        p2.innerText = category;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
    })
}

function updateTotalCost(price) {
    const totalCost = getConvertedValue("total-cost");
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}