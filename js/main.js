function submitForm(event){
    event.preventDefault();
    console.log("Passenger Details");

    let userFullName = document.getElementById("userFullName").value;
    let userKm = parseInt(document.getElementById("userKm").value);
    let selectAge = parseInt(document.getElementById("underage").value);;

    //ticket type
        //???????????????
    //wagon
        let wagon = Math.floor(Math.random() * 10) + 1;
        console.log(wagon)
    //CpCode
         let randomCode = Math.floor(Math.random() * 99999) + 1;
            console.log(randomCode)
    //ticketing

        let ticketPrice = userKm * 0.21;
            console.log(ticketPrice + "€")

            if (underage){
                let ticketPrice = ((userKm * 20)/100)
            console.log(ticketPrice + "€")
            }

            else if (eldery){
                let ticketPrice =((userKm * 40)/100)
            console.log(ticketPrice + "€")
            }



document.getElementById("userFullName").innerHTML = containerName;
document.getElementById("typeTicket").innerHTML = typeTicket;
document.getElementById("wagon").innerHTML = wagon;
document.getElementById("randomCode").innerHTML = randomCode;
document.getElementById("ticketPrice").innerHTML = ticketPrice;




}
