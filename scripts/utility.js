// add class 
function addClass(elementClass, className) {
    const element = document.getElementsByClassName(elementClass);
    element.classList.add(className);
}
// remove class 
function removeClass(elementClass, className) {
    const element = document.getElementsByClassName(elementClass);
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