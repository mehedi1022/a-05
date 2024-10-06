document.getElementById('scrollBtn').addEventListener('click', function() {
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
if(firstCartCount + 1 > 4){
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
            document.getElementById("grand-total").innerText = totalCost - discounted;
        } else {
            alert("Please enter valid coupon code");
        }
    }


}

function updateTotalCost(price) {

    const totalCost = getConvertedValue("total-cost");

    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;

}

//next button disable

// Get seat buttons, phone number input, and next button
const seatButtons = document.getElementsByClassName("add-btn");
const phoneNum = document.getElementsByClassName("phone-num")[0]; // Select the first phone number input
const nextButton = document.getElementsByClassName("next-btn")[0]; // Select the first button with the 'next-btn' class
const phoneNumTextElement = document.getElementsByClassName("phone-num-text")[0]; // Select the element for displaying phone number text

let seatSelected = false;
let phoneNumEntered = false;

// Disable the "Next" button initially
nextButton.disabled = true;
nextButton.style.opacity = 0.5;

// Function to check if both conditions are met
function checkBtn() {
    if (seatSelected && phoneNumEntered) {
        nextButton.disabled = false;
        nextButton.style.opacity = 1;
    } else {
        nextButton.disabled = true;
        nextButton.style.opacity = 0.5;
    }
}

// Add click event listener to each seat button
for (let i = 0; i < seatButtons.length; i++) {
    seatButtons[i].addEventListener('click', function () {
        seatSelected = true;
        checkBtn(); // Check if the button can be enabled
    });
}

// Add input event listener for the phone number input
phoneNum.addEventListener('input', function () {
    const phoneNumText = phoneNum.value.trim(); // Trim the input value
    if (phoneNumText !== "") {
        // Set the trimmed phone number text
        phoneNumTextElement.innerText = phoneNumText;
        phoneNumEntered = true;
    } else {
        phoneNumEntered = false;
    }
    checkBtn(); // Check if the button can be enabled
});


// formula of parseInt
function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}