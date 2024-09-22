const seatButton = document.getElementsByClassName("seat-btn-selected");
let ticketPrice = 0;
for (const seatBtn of seatButton) {
    let seatArr = [];
    console.log(seatArr.length);
    seatBtn.addEventListener("click", function e() {

        // seatBtn.style.backgroundColor = '#1DD100';
        // seatBtn.style.fontWeight = "bold";
        // seatBtn.style.color = "white";

        if (seatBtn.className.includes('bg-[#F7F8F8]')) {
            seatBtn.classList.remove('bg-[#F7F8F8]');
            seatBtn.classList.add('bg-[#1DD100]')
            
            const x = document.getElementsByClassName('seatBtn').innerText = seatBtn;
            const seatSelected = x.innerText
            console.log(seatSelected);

            const ticketP = document.createElement("div");
        
            ticketP.innerHTML = `
                <div class = "flex justify-between">
                    <div>${seatSelected}</div>
                    <p class = "flex justify-center items-center">Economy</p>
                    <p class  = "price">${650}</p>
                </div>
            `;
            document.getElementById('ticket-select-show').append(ticketP);
        }else{
            seatBtn.classList.remove('bg-[#1DD100]')
            seatBtn.classList.add('bg-[#F7F8F8]')
        }
            ticketPrice = ticketPrice + 650;
            const showTicket = document.getElementById('total-price-bdt');
            showTicket.innerText = ticketPrice;

            const grandTotal = document.getElementById('grand-total')
            grandTotal.innerText = ticketPrice;

            // this.removeEventListener('click', e);
    });
}
