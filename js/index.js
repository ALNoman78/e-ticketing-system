// this is seat number 2 , click event handler will be processed
let ticketPrice = 0;

document.getElementById("text-seat-b2").addEventListener("click", function e() {
  // console.log('B2 clicked');
  document.getElementById('text-seat-b2').disabled = true;
  document.getElementById('text-seat-b2').style.backgroundColor = '#1DD100';
  document.getElementById('text-seat-b2').style.color = "#fff";
  document.getElementById('text-seat-b2').style.fontWeight = "bold"

    // const ticketPrice = 550;
    // const mainElement = document.getElementById("total-price-bdt").innerText = ticketPrice;
    // console.log(mainElement);

    const ticketP = document.createElement("div");
    ticketP.innerHTML = `
            <div class = "flex justify-between">
                <div>Economy Class ticket price</div>
                <p class  = "price">${ticketPrice}</p>
            </div>
        `;

    const ticketShow = document.getElementById("ticket-select-show");
    ticketShow.appendChild(ticketP);

    this.removeEventListener('click', e);

    ticketPrice = ticketPrice + 550;
    const totalPrice = document.getElementById('total-price-bdt');
    totalPrice.innerText = ticketPrice;


});

// seat number b2 click event process 

document.getElementById("text-seat-b1").addEventListener("click", function handler() {

  document.getElementById('text-seat-b2').classList.toggle ('selected');
  document.getElementById('text-seat-b1').style.backgroundColor = '#1DD100'
  document.getElementById('text-seat-b1').style.color = '#fff'
  document.getElementById('text-seat-b1').style.fontWeight = 'bold'

  // const totalPrice = document.getElementById("total-price-bdt");
  // totalPrice.innerText = ticketPrice;
  // console.log(totalPrice);

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class = "flex justify-between">
            <div>Economy Class ticket price of B2</div>
            <p class  = "price">${ticketPrice}</p>
        </div>
    `;
  document.getElementById("ticket-select-show").append(newDiv);

  this.removeEventListener('click', handler);
  ticketPrice = ticketPrice + 550;
  const totalPrice = document.getElementById('total-price-bdt');
  totalPrice.innerText = ticketPrice;
});


document.getElementById('bus-h-seat').addEventListener('click', function e(){
  document.getElementById('bus-h-seat').disabled = true;
  document.getElementById('bus-h-seat').style.backgroundColor = '#1DD100';
  document.getElementById('bus-h-seat').style.color = 'white';
  document.getElementById('bus-h-seat').style.fontWeight = 'bold';
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class = "flex justify-between">
            <div>Economy Class ticket price of H</div>
            <p class  = "price">${ticketPrice}</p>
        </div>
    `;
  document.getElementById('ticket-select-show').appendChild(newDiv)
  this.removeEventListener('click', e);
  document.getElementById('ticket-select-show').style.backgroundColor = "none";
  ticketPrice = ticketPrice + 550;
  const totalPrice = document.getElementById('total-price-bdt');
  totalPrice.innerText = ticketPrice;
})

const price = document.getElementsByClassName('price');
const firstPrice = price[0];
console.log(price, firstPrice);
// const ticket =  price.children
// console.log(ticket);
// const totalTicketPrice = ticket * ticketPrice;
// console.log(totalTicketPrice);