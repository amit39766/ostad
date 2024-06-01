
//decrease button action of Basic
function btnDecr(){
    var rent=parseInt(document.getElementById("basicrent").innerText);
    var rmcount=parseInt(document.getElementById("roomcount").innerText);
    if(rent>199){
        rent-=199;
        rmcount-=1;
        document.getElementById("basicrent").innerHTML=""+rent;
        document.getElementById("roomcount").innerHTML=""+rmcount;
    }
    else
    return 0;

}
//Increase button action of Basic
function btnIncre(){
    var rent=parseInt(document.getElementById("basicrent").innerText);
    var rmcount=parseInt(document.getElementById("roomcount").innerText);
    rent+=199;
    rmcount+=1;
    document.getElementById("basicrent").innerHTML=""+rent;
    document.getElementById("roomcount").innerHTML=""+rmcount;

}

    //decrease button action of Pro

function btnDecrPro(){
    var rent=parseInt(document.getElementById("prorent").innerText);
    var rmcount=parseInt(document.getElementById("prormcount").innerText);
    if(rent>249){
        rent-=249;
        rmcount-=1;
        document.getElementById("prorent").innerHTML=""+rent;
        document.getElementById("prormcount").innerHTML=""+rmcount;
    }
    else
    return 0;

}
//Increase button action of Pro

function btnIncrePro(){
    var rent=parseInt(document.getElementById("prorent").innerText);
    var rmcount=parseInt(document.getElementById("prormcount").innerText);
    rent+=249;
    rmcount+=1;
    document.getElementById("prorent").innerHTML=""+rent;
    document.getElementById("prormcount").innerHTML=""+rmcount;

}

// Sign Up Button Action Basic

function btnSUB(){
    var rmcount=parseInt(document.getElementById("roomcount").innerText);
    
    var rm=(rmcount>1) ? " rooms.": " room";
    document.getElementById("basicmess").innerHTML="Thank you for choosing "+rmcount+ ""+rm;
    document.getElementById("basicmess").classList.add("listdesign")

}


// Sign Up Button Action Pro
function btnSUP(){
    var rmcount=parseInt(document.getElementById("prormcount").innerText);
    
    var rm=(rmcount>1) ? " rooms.": " room";
    document.getElementById("promess").innerHTML="Thank you for choosing " + rmcount + ""+ rm;
    document.getElementById("promess").classList.add("listdesign")

}


//Contact button Actions:

function btnSMAction(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(name.length==0 || email.length==0 || message==0){
        alert("Plz fill up the form carefully , and try again\n Thank you.");
    }
    else{
        alert("Message has been sent successfully.. ");
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
    }
}