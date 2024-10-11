document.getElementById('scrollBtn').addEventListener('click', function () {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
});

const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.innerText;
        const category = "Economy";
        const price = 550;

        const selectedContainer = document.getElementById("selected-seat-container");

        event.target.setAttribute("disabled", false);


        //update cartCount

        const firstCartCount = getConvertedValue("cart");
        if (firstCartCount + 1 > 4) {
            alert("limit is end");
            return;
        }
        event.target.style.backgroundColor = "#1dd100";

        event.target.style.color = "white";

        const cartCount = getConvertedValue("cart");
        document.getElementById("cart").innerText = cartCount + 1;

        const leftCount = getConvertedValue("left");
        document.getElementById("left").innerText = leftCount - 1;


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
        updateGrandTotal();
    })
}



function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {

        document.getElementById("grand-total").innerText = totalCost;
    } else {
        const couponCode = document.getElementById("coupon-code").value;
        let discounted;
        if (couponCode == "NEW15" || couponCode == "Couple 20") {

            if (couponCode == "NEW15") {
                discounted = totalCost * .15;
            } else {
                discounted = totalCost * .2;
            }

            document.getElementById('btn-delete').addEventListener('click', function () {
                const secret = document.getElementById('secret-info');
                secret.style.display = 'none';
            })

            document.getElementById("grand-total").innerText = totalCost - discounted;
        } else {
            alert("Please enter valid coupon code");
            return;
        }
    }


}

function updateTotalCost(price) {

    const totalCost = getConvertedValue("total-cost");

    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;

}







// formula of parseInt
function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}