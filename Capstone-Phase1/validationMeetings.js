// Validate correctness of the date

// If the value of "Schedule" is blank, it will return false with the message that a date and time must be selected.

function validateSchedule(){

    let schedule = document.getElementById("schedule");

    if(schedule.value==""){
    console.log("Must select a date and time")
    return false;
}else{
    return true;
}
}