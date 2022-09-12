let inputbir = document.querySelector(".input1");
let inputikki = document.querySelector(".input2");
let div1 = document.querySelector(".div1");
let button = document.querySelector(".btn");
let icons = document.querySelector("#icon")
let tel=1234;
let parol=11;
button.addEventListener("click",function (event) {
    event.preventDefault()
    if (inputbir.value=="" && inputikki.value=="") {
        div1.innerHTML="Raqam yoz";
    }
    
    else if (tel==inputbir.value && parol==inputikki.value) {
        div1.innerHTML="Togri";
        inputbir.value="";
        inputikki.value="";
    }
    else{
        div1.innerHTML="Xato";
        inputbir.value="";
        inputikki.value="";
    }


    // //if (inputbir.value.length>0 && inputikki.value.length>0) {
    //     div1.innerHTML="raqam yoz"
    // }
    // else{
    //     div1.innerHTML="ra"
    // }
    
})

 
