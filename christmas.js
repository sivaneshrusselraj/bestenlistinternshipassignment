thisDay = new Date();
christmas = new Date("December 25,2020");
msPerDay = 24*60*60*1000;
timeleft =(christmas.getTime()- thisDay.getTime());
calculateDays = timeleft/msPerDay;
daysLeft =Math.floor(calculateDays);
document.write("There are only" + daysLeft + "days");