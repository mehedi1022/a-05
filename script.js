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

// const liCollection = document.getElementsByTagName('li');
// for (const li of liCollection){
//     console.log(li.innerText);
// }
// const allHeadings = document.getElementsByTagName('h1');
// for(const h1 of allHeadings){
//     console.log(h1.innerText);
// }

// const name = document.getElementById('nextBtn').innerText = 'My Tour';
// console.log(name);
// const first = document.getElementById('nextBtn')
// first.innerText = 'get my gun';

// const names = document.getElementsByClassName('phone-num-text');
// for(const name of names){
//     console.log(name.innerText);
// }

// const first = document.querySelectorAll('#nextBtn')
// console.log(first);

// const second = document.querySelectorAll('.next-btn')
// console.log(second);

// const allLi = document.querySelectorAll('.li li')
// for (const li of allLi){
//     console.log(li.innerText);
// }

// const li = document.querySelector('.li li')
// console.log(li.innerText);

// const first = document.getElementsByClassName('li');
// console.log(first);
// const second = document.getElementsByClassName('li')[0].innerHTML;
// console.log(second);
// const him = first.getAttribute('class');
// console.log(him);

// console.log(first.classList.remove('next-btn'));
// console.log(first.classList.add('purple-me'));
// console.log(first.classList);

// const him = first.setAttribute('first', 'tootip set by Javascript');
// console.log(him);

// const sections = document.querySelectorAll('section');
// for(const section of sections){
//     section.style.border = '2px solid red';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '5px';
//     section.style.paddingLeft = '7px';
//     section.style.backgroundColor = 'lightgray';

// }

// const place = document.getElementById('nextBtn');
// // place.style.backgroundColor = 'yellow';
// place.classList.add('bg-red-700');
// place.classList.remove('bg-red-700');

// const place = document.getElementById('li');
// console.log(place.childNodes[1].childNodes[3].previousSibling);

const placeUl = document.querySelectorAll('#li ul');
console.log(placeUl.parentNode.parentNode);

const place = document.createElement('li');
const him = li.innerText = 'Brand New';
// console.log(li);

const addSome = placeUl.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = 'another dynamic li';
placeUl.appendChild(li2);










// formula of parseInt
function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}