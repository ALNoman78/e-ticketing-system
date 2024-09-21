const seatButton = document.getElementsByClassName("seat-btn-selected");
let ticketPrice = 0;
for (const seatBtn of seatButton) {
    // console.log(seatBtn);
    seatBtn.addEventListener("click", function e() {

        seatBtn.style.backgroundColor = '#1DD100';
        seatBtn.style.fontWeight = "bold";
        seatBtn.style.color = "white";

        const ticketP = document.createElement("div");
        
        ticketP.innerHTML = `
                <div class = "flex justify-between">
                    <div>Ticket price</div>
                    <p class = "flex justify-center items-center">Economy</p>
                    <p class  = "price">${650}</p>
                </div>
            `;
            document.getElementById('ticket-select-show').append(ticketP);

            ticketPrice = ticketPrice + 650;
            const showTicket = document.getElementById('total-price-bdt');
            showTicket.innerText = ticketPrice;

            const grandTotal = document.getElementById('grand-total')
            grandTotal.innerText = ticketPrice;

            this.removeEventListener('click', e);
    });
}
