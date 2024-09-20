// this is seat number 2 , click event handler will be processed

document.getElementById("text-seat-b2").addEventListener("click", function e() {
  console.log('B2 clicked');
  document.getElementById('text-seat-b2').disabled = true;
  document.getElementById('text-seat-b2').style.backgroundColor = '#1DD100';
  document.getElementById('text-seat-b2').style.color = "#fff";
  document.getElementById('text-seat-b2').style.fontWeight = "bold"

    const ticketPrice = 550;
    const mainElement = (document.getElementById("total-price-bdt").innerText =
        ticketPrice);
    console.log(mainElement);

    const ticketP = document.createElement("div");
    ticketP.innerHTML = `
            <div class = "flex justify-between">
                <p>Economy Class ticket price</p>
                <p>${ticketPrice}</p>
            </div>
        `;

    const ticketShow = document.getElementById("ticket-select-show");
    ticketShow.appendChild(ticketP);

    this.removeEventListener('click', e)

});

// seat number b2 click event process 

document.getElementById("text-seat-b1").addEventListener("click", function handler() {

  document.getElementById('text-seat-b2').disabled = true;
  document.getElementById('text-seat-b1').style.backgroundColor = '#1DD100'
  document.getElementById('text-seat-b1').style.color = '#fff'
  document.getElementById('text-seat-b1').style.fontWeight = 'bold'
  const ticketPriceB2 = 550;
  const totalPrice = document.getElementById("total-price-bdt");
  totalPrice.innerText = ticketPriceB2;
  // console.log(totalPrice);

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class = "flex justify-between">
            <p>Economy Class ticket price of B2</p>
            <p>${ticketPriceB2}</p>
        </div>
    `;
  document.getElementById("ticket-select-show").append(newDiv);

  this.removeEventListener('click', handler)
});


document.getElementById('bus-h-seat').addEventListener('click', function e(){
  document.getElementById('bus-h-seat').disabled = true;
  document.getElementById('bus-h-seat').style.backgroundColor = '#1DD100';
  document.getElementById('bus-h-seat').style.color = 'white';
  document.getElementById('bus-h-seat').style.fontWeight = 'bold';
  const ticketPrice = 550;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class = "flex justify-between">
            <p>Economy Class ticket price of H</p>
            <p>${ticketPrice}</p>
        </div>
    `;
  document.getElementById('ticket-select-show').appendChild(newDiv)
  this.removeEventListener('click', e);
})