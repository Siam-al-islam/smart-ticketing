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