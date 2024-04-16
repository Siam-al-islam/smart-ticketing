document.body.addEventListener('click', (e) => {
    if (e.target.closest('.seat')) {
        const allSelectedSeat = document.querySelectorAll('.selectedSeat');
        const selectedSeatLength = allSelectedSeat.length;
        const isSelected = e.target.closest('.selectedSeat');
        const phoneNumber = document.getElementById("phone-number").value.length;
        const nextButton = document.getElementById("next-btn");

        if (selectedSeatLength < 4 && !isSelected) {
            const selectedSeat = e.target.closest('.seat');
            const ticketDetails = {
                seatNo: selectedSeat.innerText,
                class: 'Economoy',
                seatFare: 550
            }

            selectedSeat.classList.remove('bg-gray-100');
            selectedSeat.classList.add('selectedSeat');
            if (selectedSeatLength < 4 && !isSelected) {
                nextButton.disabled = false;

            }

            substractSeat('seat-left');
            addNewSeat('added-seat');
            createNewElement('added-seat-detail', 'div', ticketDetails);
            calculateTotalPrice('total-price');
            calculateTotalPrice('grand-total');
        } else if (isSelected) {
            const selectedSeat = e.target.closest('.seat');
            selectedSeat.classList.add('bg-gray-100');
            selectedSeat.classList.remove('selectedSeat');
            nextButton.disabled = true;

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

// validate input 
function validateInput() {
    const inputValue = document.getElementById("coupon-input").value;
    const applyButton = document.getElementById("apply-btn");

    if (inputValue === "NEW15") {
        applyButton.disabled = false;
        calculateDiscountedPrice(15);
    }
    else if (inputValue === "Couple 20") {
        applyButton.disabled = false;
        calculateDiscountedPrice(20);
    }
    else {
        applyButton.disabled = true;
    }
}
