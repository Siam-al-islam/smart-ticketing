document.body.addEventListener('click', (e) => {
    if (e.target.closest('.seat')) {
        const allSelectedSeat = document.querySelectorAll('.selectedSeat');
        const selectedSeatLength = allSelectedSeat.length;
        const isSelected = e.target.closest('.selectedSeat');
        const nextButton = document.getElementById("next-btn");
        const applyButton = document.getElementById("apply-btn");

        if (selectedSeatLength < 4 && !isSelected) {
            const phoneNumber = document.getElementById("phone-number").value.length;
            const selectedSeat = e.target.closest('.seat');
            const ticketDetails = {
                seatNo: selectedSeat.innerText,
                class: 'Economoy',
                seatFare: 550
            }

            selectedSeat.classList.remove('bg-gray-100');
            selectedSeat.classList.add('selectedSeat');

            const selectedSeats = document.querySelectorAll('.selectedSeat');
            const selectedSeatsLength = selectedSeats.length;
            if (selectedSeatsLength > 0 && phoneNumber > 0) {
                nextButton.disabled = false;
            }
            else if (selectedSeatLength > 2 && !isSelected) {
                document.getElementById("coupon-input").disabled = false;
            }

            substractSeat('seat-left');
            addNewSeat('added-seat');
            createNewElement('added-seat-detail', 'div', ticketDetails);
            calculateTotalPrice('total-price');
            calculateTotalPrice('grand-total');
        }

        else if (isSelected) {
            const selectedSeat = e.target.closest('.seat');
            const seatNo = selectedSeat.innerText;
            const selectedSeatRowElem = document.querySelector(`.ticket-detail-row.${seatNo}`);

            selectedSeat.classList.add('bg-gray-100');
            selectedSeat.classList.remove('selectedSeat');

            const selectedSeats = document.querySelectorAll('.selectedSeat');
            const selectedSeatsLength = selectedSeats.length;
            const phoneNumber = document.getElementById("phone-number").value.length;
            if (selectedSeatsLength <= 0 && phoneNumber > 0) {
                nextButton.disabled = true;
            }

            selectedSeatRowElem && selectedSeatRowElem.remove();

            addSeat('seat-left');
            removeNewSeat('added-seat');
            substractPrice('total-price');
            substractPrice('grand-total');
        }
        else {
            alert('you can buy only four tickets');
        }
    }
});

document.getElementById("phone-number").addEventListener('input', (e) => {
    const phoneNoLength = e.target.value.length;
    const selectedSeats = document.querySelectorAll('.selectedSeat');
    const selectedSeatsLength = selectedSeats.length;
    const nextButton = document.getElementById("next-btn");
    if (selectedSeatsLength > 0 && phoneNoLength > 0) {
        nextButton.disabled = false;
    } else if (phoneNoLength <= 0) {
        nextButton.disabled = true;
    }
})

// validate discount input 

function validateInput() {
    const inputValue = document.getElementById("coupon-input").value;
    const applyButton = document.getElementById("apply-btn");

    if (inputValue === "NEW15") {
        applyButton.disabled = false;
        calculateDiscountedPrice(15);
        addClass("error-message", 'hidden');
    }
    else if (inputValue === "Couple 20") {
        applyButton.disabled = false;
        calculateDiscountedPrice(20);
        addClass("error-message", 'hidden');
    }
    else {
        applyButton.disabled = true;
        removeClass("error-message", 'hidden')
    }
}
