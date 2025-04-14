var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 20] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 21] = "Thursday";
    WeekDays[WeekDays["Friday"] = 22] = "Friday";
    WeekDays[WeekDays["Saturday"] = 23] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 24] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Monday);
console.log(WeekDays.Wednesday);
console.log(WeekDays.Sunday);
