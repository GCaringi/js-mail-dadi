let listLogin = ["giannicaringi94@gmail.com", "paolobianchi@gmail.com", "mariorossi@gmail.com", ];

let userMail = prompt("Inserisci la tua mail");

if (listLogin.includes(userMail)){
    console.log("Puoi accedere")
}else{
    console.log("Non puoi accedere")
}