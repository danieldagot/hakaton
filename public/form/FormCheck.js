let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let slideResult = document.getElementById("slideResult");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  if (this.value == 1) {
    slideResult.innerHTML ='Little to No Exercise'
}
if (this.value == 2) {
  slideResult.innerHTML = 'Light Exercise or Sports 1-3 Days/Week'
}
if (this.value == 3) {
  slideResult.innerHTML = 'Moderate Exercise 3-5 Days/Week'
}
if (this.value == 4) {
  slideResult.innerHTML = 'Hard Exercise 6-7 Days/Week'
}
if (this.value == 5) {
  slideResult.innerHTML = 'Very Hard Exercise and/or Physical Job'
}
}

//===========================================
//===========================================

  let error = "";
function NameCheck(id, divId) {
    let error = "";
    let text = document.getElementById(id).value;

    if (text == "") {
        error = "You Forgot To Add Your Info";
    }
    else {
        if (text.length < 3) {
            error = "This Field Should Contain More Then 3 Letters";
        }
        for (let i = 0; i < text.length; i++) {
            if (!((text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'א' && text[i] <= 'ת'))) {
                error = "This Field Contains Illegal Letters";
                break;
            }
        }
    }

    if (error != "") {
        let myDiv = document.getElementById(divId);
        myDiv.style.visibility = "visible";
        myDiv.innerHTML = error;
    }
    else {
        let myDiv = document.getElementById(divId);
        myDiv.style.visibility = "hidden";
    }
    return error;
}
//===========================================
//===========================================


function NumCheck(id, divId) {
    let error = "";
    let text = document.getElementById(id).value;

    if (text == "") {
        error = "You Forgot To Add Your Info";
    }
    else {
        for (let i = 0; i < text.length; i++) {
            if (((text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'א' && text[i] <= 'ת'))) {
                error = "This Field Should Use Numbers";
                break;
            }
        }
    }

    if (error != "") {
        let myDiv = document.getElementById(divId);
        myDiv.style.visibility = "visible";
        myDiv.innerHTML = error;
    }
    else {
        let myDiv = document.getElementById(divId);
        myDiv.style.visibility = "hidden";
    }
    return error;
}

//===========================================
//===========================================

function SubmitCheck() {

    let error = "";
    error = error + NameCheck('FullName', 'NameError');
    error = error + NumCheck('Age', 'AgeError');
    error = error + NumCheck('Height', 'HeightError');
    error = error + NumCheck('Weight', 'WeightError');
    if (error == "") {
        
        const getDataa = new getData()
        console.log(getDataa);
        $.post(`/setProfile/${getDataa.FullName}`, getDataa)
        localStorage.setItem('LogData', 'True')
        window.location.replace("http://localhost:8080");
        return true;
    }
    return false;
}


// document.getElementById('Form').onsubmit = function() {
//     return isValidForm();
// };