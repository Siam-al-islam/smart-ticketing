// add class 
function addClass(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.add(className);
}
// remove class 
function removeClass(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.remove(className);
}

// substract seat from all seats 
function substractSeat(elementId) {
    const totalSeats = document.getElementById(elementId);
    const seatLeft = parseInt(totalSeats.innerText);
    const currentSeats = seatLeft - 1;
    totalSeats.innerText = currentSeats;
}

// add seats back 
function addSeat(elementId) {
    const totalSeats = document.getElementById(elementId);
    const seatLeft = parseInt(totalSeats.innerText);
    const currentSeats = seatLeft + 1;
    totalSeats.innerText = currentSeats;
}

// adding new seats 
function addNewSeat(elementId) {
    addSeat(elementId);
}

// substractSeatNewSeat 
function removeNewSeat(elementId) {
    substractSeat(elementId);
}

// create new element 
function createNewElement(elementId, elementName, ticketDetails) {

    const seatDetail = document.getElementById(elementId);
    const element = document.createElement(elementName);
    const div2 = document.createElement(elementName);
    const div3 = document.createElement(elementName);
    const div4 = document.createElement(elementName);

    element.classList.add('ticket-detail-row', ticketDetails.seatNo)

    div2.innerText = ticketDetails.seatNo;
    div3.innerText = ticketDetails.class;
    div4.innerText = ticketDetails.seatFare;

    element.appendChild(div2);
    element.appendChild(div3);
    element.appendChild(div4);

    seatDetail.appendChild(element);
}

// calculate total price 
function calculateTotalPrice(elementId) {
    const priceElement = document.getElementById(elementId);
    const price = parseInt(priceElement.innerText);
    const totalPrice = price + 550;
    priceElement.innerText = totalPrice;
}
// minus price 
function substractPrice(elementId) {
    const priceElement = document.getElementById(elementId);
    const price = parseInt(priceElement.innerText);
    const totalPrice = price - 550;
    priceElement.innerText = totalPrice;
}

// discount price calculation 
function calculateDiscountedPrice(percent) {
    const applyButton = document.getElementById("apply-btn");
    applyButton.addEventListener('click', function calculateGrandTotal() {
        const applyButton = document.getElementById("apply-btn");
        const inputValue = document.getElementById("coupon-input")
        const grandTotal = document.getElementById('grand-total');
        const grandTotalPrice = parseInt(grandTotal.innerText);
        const discountedPrice = grandTotalPrice * percent / 100;
        const discountedTotal = grandTotalPrice - discountedPrice;
        grandTotal.innerText = Math.floor(discountedTotal);
        applyButton.disabled = true;
        inputValue.disabled = true;
    })
}
