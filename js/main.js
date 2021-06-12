//  set the maximum date to today to avoid user from inputing a birthdate not today
// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; //January is 0!
// let yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd //adds a 0 before for rep
// }
// if (mm < 10) {
//     mm = '0' + mm //adds a 0 before for rep
// }
// console.log(yyyy);
// today = yyyy + '-' + mm + '-' + dd;
// document.getElementById('day').setAttribute('max', today);
// document.getElementById('day').setAttribute('value', today);

function validateDate() {
    if ((mm == 01) || (mm == 03) || (mm == 05) || (mm == 07) || (mm == 08) || (mm == 10) || (mm == 12)) {
        dayNumb = 31;
        populateDays(dayNumb);
    } else if ((mm == 03) || (mm == 04) || (mm == 09) || (mm == 11)) {

        dayNumb = 30;
        populateDays(dayNumb);
    } else {
        // check for leap year
        dayNumb = 28;
        populateDays(dayNumb);

    }
}

function populateDays(month) {
    console.log(month);

    if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        dayNum = 31;
        createoptions(dayNum);
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        dayNum = 30;
        createoptions(dayNum);
    } else {
        // If month is February, calculate whether it is a leap year or not
        var year = document.getElementById("year").value;
        var isLeap = new Date(year, 1, 29).getMonth() == 1;
        isLeap ? dayNum = 29 : dayNum = 28;
        createoptions(dayNum);
    }


}

function createoptions(dayNum) {
    for (i = 1; i <= dayNum; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        days.appendChild(option);
    }
}
// we check if its a leap year to ensure that the date changes too
//to avoid situations like we changed to a leap year and its giving us february date as not leap

function checkleap() {


    if (month.value == "") {
        console.log("dont edit");
    } else {
        populateDays(month.value);
    }
}

function options(dayNum) {

    for (i = 1; i <= dayNum; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        // document.getElementById('days').innerHTML = "";
        days.appendChild(option);
    }
}

function GetDay() {

    let year = document.getElementById('year').value;

    let month = document.getElementById('month').value;

    let days = document.getElementById('days').value;
    if (document.getElementById('male').checked) {
        rate_value = document.getElementById('male').value;
        alert(rate_value);
    } else if (document.getElementById('female').checked) {
        rate_value = document.getElementById('female').value;
        alert(rate_value);
    } else {
        rate_value = "";
        alert("gender cant be null ")

    }
    if ((month === "") && (days === "")) {
        alert(' date cant be null');
    } else {

    }

}