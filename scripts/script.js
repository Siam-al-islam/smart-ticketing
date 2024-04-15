
// const getId = document.getElementById('green');
// getId.onclick = function () {
//     removeClassName('green', 'bg-gray-100')
//     addClassName('green', 'seat')
// }

document.body.addEventListener('click', (e) => {
    if (e.target.closest('.seat')) {
        const allSelectedSeat = document.querySelectorAll('.selectedSeat');
        const selectedSeatLength = allSelectedSeat.length;
        const isSelected = e.target.closest('.selectedSeat');

        if (selectedSeatLength < 4 && !isSelected) {
            const selectedSeat = e.target.closest('.seat');
            selectedSeat.classList.remove('bg-gray-100');
            selectedSeat.classList.add('selectedSeat');
        } else if (isSelected) {
            const selectedSeat = e.target.closest('.seat');
            selectedSeat.classList.add('bg-gray-100');
            selectedSeat.classList.remove('selectedSeat');
        } else {
            console.error('You can not add')
        }
    }
});