const username = "Sara";
const password = "qwe123";

//Börjar alltid med en "if" för att se om användaren Saras namn och lösenord finns sparad i localStorage
    if( (localStorage.getItem("user") == username && localStorage.getItem("userPass") == password)){
        loggedIn();
    }


//En funktion som kollar att värdena i inloggningsfälten stämmer överns med Saras inloggningsinformation
function submitLogin(){
    //Definerar två värden som är lika med de värden som finns i inloggningfälten
    let usernameById = document.getElementById("username").value;
    let passwordById = document.getElementById("password").value;
    

    //Om värdena är rätt körs loggedIn() funktionen
    if(usernameById == username && passwordById == password){

        loggedIn();
        localStorage.setItem("user", usernameById); //Sparar användarnamn i localStorage
        localStorage.setItem("userPass", passwordById); //Sparar lösenord i localStorage
    }
    //Om värdena är inkorrekta visas ett felmedelande samt en knapp för att försöka igen
    else{
        //Definerar två värden som används for .appendChild() funktionen
        const loginFieldById = document.getElementById("loginField");
        const loginPromptById = document.getElementById("loginPrompt");
        

        let errorMsg = document.createElement('div'); //skapar en div
        errorMsg.textContent = "Hopsan! Något gick fel..."; //ger diven text
        loginFieldById.appendChild(errorMsg); //bestämmer vart i DOM diven ska ligga

        loginPromptById.classList.add("hidden"); //gömmer inloggningsfältet
    
        let retryBtn = document.createElement('button');//skapar en knapp
        retryBtn.textContent = "Försök igen."; //ger knappen text
        loginFieldById.appendChild(retryBtn); //bestämmer vart i DOM knappen ska ligga
        retryBtn.onclick = function() {
            loginPromptById.classList.remove("hidden");        
            errorMsg.remove();
            retryBtn.remove();
            } //Ger knappen en funktion som tar bort de tidigare skapade elementen och återigen visar inloggningsfälten
    }
}



//Gör sama sag som else checken i den tidigare funktionen men skapar istället ett välkomsmedelande och utloggningsknapp
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
        localStorage.clear(); //Rensar local storage vid utloggning för att man inte ska förbli inloggad vid en ny session
    }
}