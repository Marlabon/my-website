// Wochentag und Datum anzeigen ****************************
var curDate = new Date(); 
// Baut die Anzeige mit Wochentag
var dayString = curDate.getDay();
var month = curDate.getMonth()+1;



//Zahl des Wochentags in String mit Wochentag ändern
if(dayString==0){
    dayString ="Sunday";
}else if(dayString==1){
    dayString ="Monday";
}else if(dayString==2){
    dayString ="Tuesday";
}else if(dayString==3){
    dayString ="Wednesday";
}else if(dayString==4){
    dayString ="Thursday";
}else if(dayString==5){
    dayString ="Friday";
}else if(dayString==6){
    dayString ="Saturday";
}

document.getElementById("displayCurrentDate").innerHTML = dayString+" - "+curDate.getDate()+"."+month+"."+curDate.getFullYear();

// Modal Syntax ********************************************
var modal = document.getElementById('gatherDailyConsumptionModal');

var gatherDailyConsumptionButton = document.getElementById("gatherDailyConsumption");

gatherDailyConsumptionButton.onclick = function(){
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }