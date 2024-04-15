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
        } else if (isSelected) {
            const selectedSeat = e.target.closest('.seat');
            selectedSeat.classList.add('bg-gray-100');
            selectedSeat.classList.remove('selectedSeat');
            addSeat('seat-left');
            removeNewSeat('added-seat');
        } else {
            console.error('You can not');
        }
    }
});