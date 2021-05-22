function icmFunc() {
    if (poids.value.trim() != "" && taille.value.trim() != "") {
        let imc = (poids.value*10000) / Math.pow(taille.value, 2);
        let msg = "Votre IMC est de : " + imc + "<br>";
        msg += "Votre IMC montre que vous etes ";

        if (imc < 18.5) {
            msg += "maigre";            
        }
        else if (imc > 18.5 && imc <= 24.9) {
            msg += "dans la norme de poids";
        }
        else if (imc > 24.9 && imc <= 29.9) {
            msg += "En surpoids";
        }
        else if (imc > 29.9 && imc <= 34.9) {
            msg += "moderemment obese";
        }
        else if (imc > 39.4 && imc <= 39.9) {
            msg += "en obesite severe";
        }
        else if (imc > 39.9) {
            msg += "en obesite morbide";
        }
        valIcm.innerHTML = msg;
    }
    else{
        alert("Champ incorrect ou vide");
    }        
}