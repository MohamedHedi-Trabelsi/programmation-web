const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const email = document.getElementById("email");
const PW = document.getElementById("password");
const confirmPW = document.getElementById("confirmPassword");
const pays = document.getElementById("country");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    e.preventDefault(); 
    clearErrors();
    let hasErrors = false;


    if (prenom.value.trim() === "") {
        showError(prenom, "Erreur : prénom requis.");
        hasErrors = true;
    }

   
    if (nom.value.trim() === "") {
        showError(nom, "Erreur : nom requis.");
        hasErrors = true;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Erreur : email invalide.");
        hasErrors = true;
    }

   
    if (PW.value.trim() === "") {
        showError(PW, "Erreur : mot de passe requis.");
        hasErrors = true;
    }

    
    if (confirmPW.value.trim() === "") {
        showError(confirmPW, "Erreur : confirmation du mot de passe requise.");
        hasErrors = true;
    } else if (PW.value !== confirmPW.value) {
        showError(confirmPW, "Erreur : les mots de passe ne correspondent pas.");
        hasErrors = true;
    }

    
    const genres = document.getElementsByName("gender");
    let isGenderSelected = false;
    genres.forEach((g) => {
        if (g.checked) isGenderSelected = true;
    });
    if (!isGenderSelected) {
        showError(genres[0], "Erreur : genre requis.");
        hasErrors = true;
    }

    if (pays.value === "") {
        showError(pays, "Erreur : sélectionnez un pays.");
        hasErrors = true;
    }

    if (!hasErrors) {
        alert("Inscription réussie !");
    }
});

function showError(inputField, message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll("p");
    errorMessages.forEach((msg) => msg.remove());
}