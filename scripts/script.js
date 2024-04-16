document.body.addEventListener('click', (e) => {
    if (e.target.closest('.seat')) {
        const allSelectedSeat = document.querySelectorAll('.selectedSeat');
        const selectedSeatLength = allSelectedSeat.length;
        const isSelected = e.target.closest('.selectedSeat');

        if (selectedSeatLength < 4 && !isSelected) {
            const selectedSeat = e.target.closest('.seat');
            const ticketDetails = {
                seatNo: selectedSeat.innerText,
                class: 'Economoy',
                seatFare: 550
            }

            selectedSeat.classList.remove('bg-gray-100');
            selectedSeat.classList.add('selectedSeat');

            substractSeat('seat-left');
            addNewSeat('added-seat');
            createNewElement('added-seat-detail', 'div', ticketDetails);
            calculateTotalPrice('total-price');
            calculateTotalPrice('grand-total');
        } else if (isSelected) {
            const selectedSeat = e.target.closest('.seat');
            selectedSeat.classList.add('bg-gray-100');
            selectedSeat.classList.remove('selectedSeat');

            addSeat('seat-left');
            removeNewSeat('added-seat');
            substractPrice('total-price')
        } else {
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
    }
    else {
        applyButton.disabled = true;
    }
}

//calculation for discount
function calculateGrandTotal() {
    const applyButton = document.getElementById("apply-btn");
    const grandTotal = document.getElementById('grand-total');
    const grandTotalPrice = parseInt(grandTotal.innerText);
    const discountedPrice = grandTotalPrice * 15 / 100;
    const discountedTotal = grandTotalPrice - discountedPrice;
    grandTotal.innerText = Math.floor(discountedTotal);
    applyButton.disabled = true;
}   