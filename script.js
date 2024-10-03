document.addEventListener("DOMContentLoaded", function () {
    fetch('api.json')
        .then(response => response.json())
        .then(apartments => {
            const dataDisplay = document.getElementById("allAppartements");

            const idAppartements = document.createElement("p");
                idAppartements.textContent = "id" +apartments.id;
                dataDisplay.appendChild(idAppartements);
            const descApparetements = document.createElement("p");
                descApparetements.textContent = "description :  " + apartments.description;
                dataDisplay.appendChild(descApparetements);
            const  priceAppartements= document.createElement("p");
                priceAppartements.textContent = "Prix : " + apartments.picture;
                dataDisplay.appendChild(priceAppartements);

        })
        .catch(error => console.error("Error fetching JSON data:", error));
});