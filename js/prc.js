let ticketPrice = 0;
const seatsName = document.getElementsByClassName("seat-btn-selected");
// empty array with some logic
let ticketArray = [];

for (const seat of seatsName) {
    seat.addEventListener("click", function () {
        // after using for loop then for loop is a class
        const seatName = (document.getElementsByClassName("seat").innerText = seat);
        const innerTxt = seatName.innerText;

        if (seat.className.includes("bg-[#F7F8F8]")) {
        seat.classList.remove("bg-[#F7F8F8]");
        seat.classList.add("bg-[#1DD100]");
        } else {
        seat.classList.add("bg-[#F7F8F8]");
        seat.classList.remove("bg-[#1DD100]");
        }

        if (ticketArray.indexOf(innerTxt) >= 0) {
        return;
        }


    const newElement = document.createElement("div");
    newElement.innerHTML = `
            <div class = "flex items-center justify-between">
                <h3>${innerTxt}</h3>
                <p class = "flex justify-center">Economy</p>
                <p class = "text-right">650</p>
            </div>
        `;
    ticketArray.push(innerTxt);
    
    const mainElement = document.getElementById("ticket-select-show");
    mainElement.appendChild(newElement);

    ticketPrice += 650;
    document.getElementById("total-price-bdt").innerText = ticketPrice;
    let er = document.getElementById('grand-total').innerText = parseFloat(ticketPrice);

        document.getElementById('coupon-button').addEventListener("click", function(){
            const inputText = document.getElementById('input-field-text').value;
            if (inputText === 'NEW50') {
                let x = er * 0.20;
                document.getElementById('discounted-price').innerText = x;
                const mainPrice = er - x;
                console.log(mainPrice);
                document.getElementById('grand-total').innerText = mainPrice;
            }else{
                alert('coupon code is not valid')
            }

        })

    });
}
