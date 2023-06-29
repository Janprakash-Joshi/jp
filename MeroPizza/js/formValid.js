
//email validate


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//name valid

function validateName(name){
    var nameLength=name.length;
    if(nameLength<2 || nameLength>100){
        return false;
    }
    else{
        return true;
    }
}

//phone valid
function validatePhone(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }


//password valid
function validPsw(psw) {
    var pswLength = psw.length;

    if (pswLength < 4) {


        return false;
    }
    else {
        return true;
    }

}

// for log in
const formBtn = document.getElementById('formBtn');
formBtn.onclick = () => {
    //email
    const formEmail = document.getElementById('formEmail').value;
    var a = document.getElementById('formEmail');
    if (validateEmail(formEmail)) {
        a.classList.remove('wrongEmail');

    } else {
        event.preventDefault();
        a.placeholder = "Invalid Email";
        a.value = null;
        a.classList.add('wrongEmail');
    }

    //password

    const loginPsw = document.getElementById('loginPsw');
    if (validPsw(loginPsw.value)) {
        loginPsw.classList.remove('wrongEmail');
    }
    else {

        event.preventDefault();
        loginPsw.placeholder = "Password must be at least 4 char";
        loginPsw.classList.add('wrongEmail');
        loginPsw.value=null;
    }


}

// for register
const formBtn2 = document.getElementById('formBtn2');
formBtn2.onclick = () => {

    const formEmail2 = document.getElementById('formEmail2').value;
    var a = document.getElementById('formEmail2');
    if (validateEmail(formEmail2)) {
        a.classList.remove('wrongEmail');

    } else {
        event.preventDefault();
        a.placeholder = "Invalid Email";
        a.value = null;
        a.classList.add('wrongEmail');

    }

    //password

    const regPsw = document.getElementById('regPsw');
    if (validPsw(regPsw.value)) {
        regPsw.classList.remove('wrongEmail');
    }
    else {

        event.preventDefault();
        regPsw.placeholder = "Password must be at least 4 char";
        regPsw.classList.add('wrongEmail');
        regPsw.value=null;
    }


    // name
    const regName = document.getElementById('regName');
    if (validateName(regName.value)) {
        regName.classList.remove('wrongEmail');
    }
    else {

        event.preventDefault();
        regName.placeholder = "Invalid Name";
        regName.classList.add('wrongEmail');
        regName.value=null;
    }

    // phone
    const regPhone = document.getElementById('regPhone');
    if (validatePhone(regPhone.value)) {
        regPhone.classList.remove('wrongEmail');
    }
    else {

        event.preventDefault();
        regPhone.placeholder = "Invalid Phone Number";
        regPhone.classList.add('wrongEmail');
        regPhone.value=null;
    }

}


