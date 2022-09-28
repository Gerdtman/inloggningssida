let usernameById = document.getElementById("username").value;
let passwordById = document.getElementById("password").value;


const username = "Sara";
const password = "qwe123";
    if( (localStorage.getItem("user") == username && localStorage.getItem("userPass") == password)){
        loggedIn();
    }

function submitLogin(){
    let usernameById = document.getElementById("username").value;
    let passwordById = document.getElementById("password").value;



    if(usernameById == username && passwordById == password){

        loggedIn();
        localStorage.setItem("user", usernameById);
        localStorage.setItem("userPass", passwordById);
    }
    else{
        const loginFieldById = document.getElementById("loginField");
        const loginPromptById = document.getElementById("loginPrompt");

        let errorMsg = document.createElement('div');
        errorMsg.textContent = "Hopsan! Något gick fel...";
        loginFieldById.appendChild(errorMsg);

        loginPromptById.classList.add("hidden");    
    
        let retryBtn = document.createElement('button');

        retryBtn.textContent = "Försök igen.";
        loginFieldById.appendChild(retryBtn);
        retryBtn.onclick = function() {
            loginPromptById.classList.remove("hidden");        
            errorMsg.remove();
            retryBtn.remove();
            }
    }
}


function loggedIn(){
    const loginFieldById = document.getElementById("loginField");
    const loginPromptById = document.getElementById("loginPrompt");

    let welcomMsg = document.createElement('div');
    welcomMsg.textContent = "Välkommen! Du är inloggad.";
    loginFieldById.appendChild(welcomMsg);

    loginPromptById.classList.add("hidden");    
    
    let logoutBtn = document.createElement('button');

    logoutBtn.textContent = "Logga Ut";
    loginFieldById.appendChild(logoutBtn);
    logoutBtn.onclick = function() {
        loginPromptById.classList.remove("hidden");        
        welcomMsg.remove();
        logoutBtn.remove();
        localStorage.clear;
    }
}