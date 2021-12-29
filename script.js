
function validate() {
	// initialize error message
    console.log("validate")
	
	//validate name
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	inputs = document.getElementsByTagName("input");


    if (!mailformat.test(email.value)){
        alert("Entrez une adresse email valide !");
       
    }else{
        alert("Message envoyé");
    }
	
}
