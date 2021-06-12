//  set the maximum date to today to avoid user from inputing a birthdate not today
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd //adds a 0 before for rep
}
if (mm < 10) {
    mm = '0' + mm //adds a 0 before for rep
}
console.log(yyyy);
today = yyyy + '-' + mm + '-' + dd;
document.getElementById('day').setAttribute('max', today);
document.getElementById('day').setAttribute('value', today);

function validateDate() {
    if ((mm == 01) || (mm == 03) || (mm == 05) || (mm == 07) || (mm == 08) || (mm == 10) || (mm == 12)) {

    }
}