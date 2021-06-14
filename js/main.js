//map day to name
var mapName = Array(7);
mapName["Sunday"] = "kwasi";
mapName["Monday"] = "Kwadwo";
mapName["Tuesday"] = "Kwabena";
mapName["Wednesday"] = "Kwaku";
mapName["Thursday"] = "Yaw";
mapName["Friday"] = "Kofi";
mapName["Saturday"] = "Kwame";


// map week to number
var weekday = new Array(7);
weekday["Monday"] = "1";
weekday["Tuesday"] = "2";
weekday["Wednesday"] = "3";
weekday["Thursday"] = "4";
weekday["Friday"] = "5";
weekday["Saturday"] = "6";
weekday["Sunday"] = "0";

// map month to number
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


// map number to week
var weekname = new Array(7);
weekname[1] = "Monday";
weekname[2] = "Tuesday";
weekname[3] = "Wednesday";
weekname[4] = "Thursday";
weekname[5] = "Friday";
weekname[6] = "Saturday";
weekname[0] = "Sunday";

var mapFemaleName = Array(7);
mapFemaleName["Sunday"] = "Akosua";
mapFemaleName["Monday"] = "Adwoa";
mapFemaleName["Tuesday"] = "Abenaa";
mapFemaleName["Wednesday"] = "Akuu";
mapFemaleName["Thursday"] = "Yaa";
mapFemaleName["Friday"] = "Afua";
mapFemaleName["Saturday"] = "Ama"

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
        // document.getElementById('days').option.remove();
        createoptions(dayNum);
    } else {
        // If month is February, calculate whether it is a leap year or not
        var year = document.getElementById("year").value;
        var isLeap = new Date(year, 1, 29).getMonth() == 1;
        isLeap ? dayNum = 29 : dayNum = 28;
        //document.getElementById('days').option.remove();
        createoptions(dayNum);
    }


}

function createoptions(dayNum) {
    document.getElementById("days").options.length = 0;
    //  document.getElementById('days').option.remove();
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



console.log(monthnumber["January"]);



function validateDay() {
    let month = document.getElementById('month').value;
    let days = document.getElementById('days').value;
    var year = document.getElementById("year").value;
    var isLeap = new Date(year, 1, 29).getMonth() == 1;
    if ((month === 'April' || month === 'June' || month === 'September' || month === 'November') && (days > 30)) {

        alert('invalid date');
    } else
    if (month == "February") {
        // If month is February, calculate whether it is a leap year or not

        if ((isLeap) && days > 29) {
            alert("invalid date");
        } else if (days > 28) {
            alert("invalid date");
        }

    } else if (days > 31) {
        alert('invalid day')
    } else {
        GetDay();
    }

}


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

        return year.toString().slice(-2);

    }
    // alert(sliceback(year));
    let month = document.getElementById('month').value;

    let days = document.getElementById('days').value;
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
        // alert(gender);
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
        // alert(gender);
    } else {
        gender = "";
        alert("gender cant be null ")

    }
    if ((month === "") && (days === "")) {
        alert(' date cant be null');
    } else {

        // day = Math.abs(Math.ceil(((centuryFromYear(year) / 4) - 2 * centuryFromYear(year) - 1) + ((5 * sliceback(year) /
        //     4)) + ((26 * (monthnumber[month] + 1) / 10)) + days) % 7);
        if (gender === "male") {
            var dat = new Date(month + '/' + days + '/' + year);
            // alert(dat + dat.getDay() + month);
            alert("Born on: " + weekname[dat.getDay()] + "\r\n" +
                "Khan Name: " +
                mapName[weekname[dat.getDay()]]);
        } else
        if (gender === "female") {
            var dat = new Date(month + '/' + days + '/' + year);
            // alert(dat + dat.getDay() + month);
            alert("Born on: " + weekname[dat.getDay()] + "\r\n" +
                "Khan Name: " +
                mapFemaleName[weekname[dat.getDay()]]);


        }
        // day = Math.floor(((parseInt(centuryFromYear(year)) / 4) - 2 * (parseInt(centuryFromYear(year) - 1) + ((5 * (parseInt(sliceback(year))) / 4)) + ((26 * ((parseInt(monthnumber[month] + 1) + 1) / 10)) + (parseInt(days))) % 7)));

    }
}