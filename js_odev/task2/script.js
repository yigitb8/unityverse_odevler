//uçuş array oluşturduk
const flights = [
    { id: 1, from: "IST", to: "ANK", departure: "12:00", arrival: "14:00" },
    { id: 2, from: "ANK", to: "IZM", departure: "15:30", arrival: "17:30" },
    { id: 3, from: "IST", to: "ADB", departure: "10:00", arrival: "13:30" },
    { id: 4, from: "IST", to: "MGL", departure: "08:45", arrival: "11:00" },
    { id: 5, from: "MGL", to: "IZM", departure: "15:10", arrival: "17:00" },
    { id: 6, from: "ÇNK", to: "ANK", departure: "16:20", arrival: "19:00" }
];

/* FETCH FLIGHT */

flights.forEach(function (flight) {
    var ul = document.getElementById('flights'); //"flights" id'li ul

    var li = document.createElement("li");
    li.textContent = "Flight ID: " + flight.id + " From: " + flight.from + " To: " + flight.to + " - Departure / Arrival: " + flight.departure + " / " + flight.arrival;
    ul.appendChild(li);
});

document.getElementById("removeFlightButton").addEventListener("click", function () {
    //silinecek "flightId" al
    var flightId = parseInt(prompt("Lütfen Silinmesini İstediğiniz FLIGHT ID Giriniz ! :"));

    //uçuş sil
    removeFlight(flightId);
});


/* REMOVE FLIGHT */

function removeFlight(flightId) {
    // Uçuşun dizideki index'ini bul
    var index = flights.findIndex(function (flight) {
        return flight.id === flightId;
    });

    //eğer uçuş bulunursa kaldır güncellenmiş uçuşları göster
    if (index !== -1) {
        flights.splice(index, 1);
        displayFlights();
        alert("Uçuş Silindi");
    } else {
        alert("Uçuş Bulunamadı!!! Lütfen Tekrar Kontrol Edin");
    }
}

document.getElementById("flightForm").addEventListener('submit', function (event) {
    event.preventDefault();

/* ADD/UPDATE FLIGHT */

    var flightId = parseInt(document.getElementById("flightId").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var departure = document.getElementById("departure").value;
    var arrival = document.getElementById("arrival").value;

    //uçuş bilgisi tutacak nesne
    var newFlight = {
        id: flightId,
        from: from,
        to: to,
        departure: departure,
        arrival: arrival
    };

    //uçuş güncelle/ekle
    updateOrAddFlight(newFlight);
});

function updateOrAddFlight(flight) {
    var flightIndex = flights.findIndex(function (f) {
        return f.id === flight.id;
    });

    if (flightIndex !== -1) {
        //uçuş zaten var -> güncelle
        flights[flightIndex] = flight;
        console.log("Uçuş Güncellendi", flight);
    } else {
        //çuş yok -> ekle
        flights.push(flight);
        console.log("Yeni Uçuş Eklendi", flight);
    }

    //güncel hali göster
    displayFlights();
}

function displayFlights() {
    var flightsList = document.getElementById("flights");
    flightsList.innerHTML = "";

    flights.forEach(function (flight) {
        var listItem = document.createElement("li");
        listItem.textContent = `ID: ${flight.id}, From: ${flight.from}, To: ${flight.to}, Departure: ${flight.departure}, Arrival: ${flight.arrival}`;
        flightsList.appendChild(listItem);
    });
}

//DOMContentLoaded-> uçuşları göster
document.addEventListener("DOMContentLoaded", displayFlights);

