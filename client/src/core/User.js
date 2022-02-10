export class User {
    
    userName;
    password;
    firstName;
    lastName;
    description; 
    //Mangler profilbilde

    constructor(userName, password, firstName, lastName, description) {
        this.setUserName(userName);
        this.setPassword(password);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setDescription(description);
    }

    regEx = /^[A-Za-z]+$/;
    capsLock = /^[A-Z]+$/;
    specEx = "[ ] { } ( ) \ ^ $ . | ? * +"
    numbers = "0123456789"

    validLength(logIn){
        if (logIn.length < 6){
            throw new Error("Username has to be longer than 6 characters.");
        }
        if (logIn.length > 12){
            throw new Error("Username has to be shorter than 12 characters.");
        }
        return true;
    }

    validUserName(logIn){
        if (validLength(logIn) = true){
            for (i = 0; i < 4; i++){
                if (logIn.charAt(i).value.match(regEx)){
                    return true;
                }
                else {
                    alert("Four first characters need to be letters!")
                }
            }
            for (i = 0; i < logIn.length(); i++){
                if (!logIn.charAt(i).value.match(specEx)) {
                    return true;
                }
                else {
                    alert("Username cannot include [ ] { } ( ) \ ^ $ . | ? * +");
                }
            }
        }
        return true;
    }

    validPassword(logIn){
        k = 0;
        l = 0;
        if(validLength(logIn) = true){
            for (i = 0; i < logIn.length(); i++){
                if (logIn.charAt(i).value.match(numbers)){
                    k += 1;
                }
                else {  
                    if (logIn.charAt(i).value.match(regEx)){
                        l += 1;
                    }
                }
            }
        }
        if (k + l != logIn.length()){
            alert("The password must include both numbers and letters.");
        }
        if (k < 1){
            alert("Must be at least one number.");
        }
        if (l < 1){
            alert("Must be at least one letter.");
        }
        return  true;
    }

    validLetters(word){
        for (i = 0; I < word.length(); i++){
            if (!word.charAt(i).value.match(regEx)){
                alert("Can only include letters.");
            }
        }
        if (!word.charAt(0).value.match(capsLock)){
            alert("First letter must be a capital letter.");
        }
        return true;
    }

    setUserName(userName){
        this.validUserName(userName);
        this.userName = userName;
    }

    setPassword(password){
        this.validPassword(password);
        this.password = password;
    }

    setFirstName(firstName){
        this.validLetters(firstName);
        this.firstName = Name;
    }
    
    setLastName(lastName){
        this.validLetters(lastName);
        this.lastName = lastName;
    }

    setDescription(description){
        this.description = description;
    }

    getUserName() {
        return this.userName;
    }

    getPassword(){
        return this.password;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getDescription(){
        return this.description;
    }

}