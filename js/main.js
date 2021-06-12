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