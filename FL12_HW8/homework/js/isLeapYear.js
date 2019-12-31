function isLeapYear(str) {
    let date = new Date(str);

    if (date === 'Invalid Date') {
        console.log('Invalid Date');
        return false;
    }
    let year = date.getFullYear();
    if ((year % 4) === 0) {
        if ((year % 100) === 0) {
            if ((year % 400) === 0) {
                console.log(year + ' is a leap year');
                return true;
            }
        } else {
            console.log(year + ' is a leap year');
            return true;
        }
    }
    console.log(year + ' is not a leap year');
    return false;
}
isLeapYear('2020-01-01 00:00:00');