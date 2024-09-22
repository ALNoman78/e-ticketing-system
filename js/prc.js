let ticketPrice = 0;
const seatsName = document.getElementsByClassName('seat-btn-selected')
    for (const seat of seatsName) {
    seat.addEventListener('click', function (){
        // after using for loop then for loop is a class
        const seatName = document.getElementsByClassName("seat").innerText = seat
        const innerTxt = seatName.innerText

        if (seat.className.includes('bg-[#F7F8F8]')) {
            seat.classList.remove('bg-[#F7F8F8]')
            seat.classList.add('bg-[#1DD100]')
        }else{
            seat.classList.add('bg-[#F7F8F8]')
            seat.classList.remove('bg-[#1DD100]')
        }
        const newElement = document.createElement('div')
        newElement.innerHTML = `
            <div class = "flex items-center justify-between">
                <h3>${innerTxt}</h3>
                <p class = "flex justify-center">Economy</p>
                <p class = "text-right">650</p>
            </div>
        `
        console.log(newElement);

        const mainElement = document.getElementById('ticket-select-show')
        mainElement.appendChild(newElement)

        ticketPrice += 650;
        const totalPrice = document.getElementById('total-price-bdt').innerText = ticketPrice;
    })
}