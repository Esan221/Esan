document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Display confirmation message
    const confirmationMessage = `
        Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed.
    `;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;

    // Clear form fields
    document.getElementById("reservationForm").reset();
});
