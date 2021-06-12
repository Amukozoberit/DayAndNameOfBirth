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
var weekday = new Array(7);
weekday["Monday"] = "0";
weekday["Tuesday"] = "1";
weekday["Wednesday"] = "2";
weekday["Thursday"] = "3";
weekday["Friday"] = "4";
weekday["Saturday"] = "5";
weekday["Sunday"] = "6";

var weekname = new Array(7);
weekname[0] = "Monday";
weekname[1] = "Tuesday";
weekname[2] = "Wednesday";
weekname[3] = "Thursday";
weekname[4] = "Friday";
weekname[5] = "Saturday";
weekname[6] = "Sunday";

weekday["Monday"] = "0";
weekday["Tuesday"] = "1";
weekday["Wednesday"] = "2";
weekday["Thursday"] = "3";
weekday["Friday"] = "4";
weekday["Saturday"] = "5";
weekday["Sunday"] = "6";
console.log(weekday["Friday"]);
var monthnumber = new Array(12);
monthnumber["January"] = "0";
monthnumber["February"] = "1";
monthnumber["March"] = "2";
monthnumber["April"] = "3";
monthnumber["May"] = "4";
monthnumber["June"] = "5";
monthnumber["July"] = "6";
monthnumber["August"] = "7";
monthnumber["September"] = "8";
monthnumber["October"] = "9";
monthnumber["Novomber"] = "10";
monthnumber["December"] = "11";

console.log(monthnumber["January"]);

function GetDay() {

    let year = document.getElementById('year').value;

    function centuryFromYear(year) {
        // return parseInt(year).Math.Floor((year - 1) / 100 + 1);

        if (year.toString().slice(-2) == '00') {
            return year.toString().slice(0, 2);
        } else {
            return (Math.floor(+year / 100) + 1).toString();
        };
    }

    function sliceback(year) {
        // return parseInt(year).Math.Floor((year - 1) / 100 + 1);
        return year.toString().slice(-2);
        // if (year.toString().slice(-2) == '00') {
        //     return year.toString().slice(-2);
        // } else {
        //     return (Math.floor(+year / 100) + 1).toString();
        // };
    }
    // alert(sliceback(year));
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
        day = Math.abs(Math.ceil(((centuryFromYear(year) / 4) - 2 * centuryFromYear(year) - 1) + ((5 * sliceback(year) /
            4)) + ((26 * (monthnumber[month] + 1) / 10)) + days) % 7);
        // day = Math.floor(((parseInt(centuryFromYear(year)) / 4) - 2 * (parseInt(centuryFromYear(year) - 1) + ((5 * (parseInt(sliceback(year))) / 4)) + ((26 * ((parseInt(monthnumber[month] + 1) + 1) / 10)) + (parseInt(days))) % 7)));
        alert("born on" + weekname[day]);
    }
}