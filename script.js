function calculateTip(event){
    event.preventDefaut();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numeOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert('Por favor preencha os valores!')
        return;
    }

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tipsFporm').addEventListener('submit') = "none", calculateTip;