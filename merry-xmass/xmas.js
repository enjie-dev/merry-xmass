


function generateCard() {

    const nameInput = document.getElementById("name").value;

    const message = nameInput

        ? `Merry Christmas & Happy New Year, ${nameInput}!`

        : "Merry Christmas & Happy New Year!";

    

    const card = document.getElementById("greeting-card");

    const personalMessage = document.getElementById("personal-message");

    personalMessage.textContent = message;

    card.classList.remove("hidden");

    card.style.display = "block";

}



function shareGreeting() {

    const message = document.getElementById("personal-message").textContent;

    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;

    window.location.href = url;

}