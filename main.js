let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calender');

const weekdays = ['Måndag' , 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag',
'Måndag' , 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag',
'Måndag' , 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag',
'Måndag' , 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag',
'Måndag' , 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

const veck = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function load() {
    const dt = new Date();

    if (nav !==0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
  

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

 const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const paddingDays = veck.indexOf(dateString.split(', ')[0]);
  console.log(paddingDays);
  document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;
  

calendar.innerHTML = '';

for(let i = 1; i <= paddingDays + daysInMonth; i++){
const daySquare = document.createElement('div');

//dagcheckboxs
const dayCheckbox = document.createElement('div');
const x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
x.classList.add('dag');

//natt checkboxs
const nightCheckbox = document.createElement('div');
const c = document.createElement("INPUT");
c.setAttribute("type", "checkbox");
c.classList.add('natt');

daySquare.classList.add('day');

//lägg till dagar på kalender
if (i > paddingDays) {
  
    daySquare.innerText = i - paddingDays + ' ' + weekdays[i- 2];
    


    dayCheckbox.innerText = "Dagpass";
    nightCheckbox.innerText = "Kvälls/nattpass";
    dayCheckbox.appendChild(x);
    nightCheckbox.appendChild(c);
    
    
    daySquare.addEventListener('click', () => console.log('click'));
}else{
daySquare.classList.add('padding');

}

daySquare.appendChild(dayCheckbox);
daySquare.appendChild(nightCheckbox)
calendar.appendChild(daySquare);


}
 }
 //markera alla dagpass
 function dayy() {
  var daypass = document.getElementById('allDay');
  const dagbox = document.getElementsByClassName('dag');


  if (daypass.checked == true){
   
    var arrldag = dagbox.length;

    for (var i = 0; i < arrldag; i++) {
      
      dagbox[i].checked = true;
  }
    
    
    
  } else {
     
     var arrldag = dagbox.length;
     for (var i = 0; i < arrldag; i++) {
      
      dagbox[i].checked = false;
  }
  }
}

 //markera alla nattpass
 function night() {
  var nattpass = document.getElementById('allnight');
  const nattbox = document.getElementsByClassName('natt');


  if (nattpass.checked == true){
   
    var arrlnatt = nattbox.length;

    for (var i = 0; i < arrlnatt; i++) {
      
      nattbox[i].checked = true;
  }
    
    
    
  } else {
     
     var arrlnatt = nattbox.length;
     for (var i = 0; i < arrlnatt; i++) {
      
      nattbox[i].checked = false;
  }
  }
}

 function initButtons(){
document.getElementById('nextButton').addEventListener('click', () => {
nav++;
load();
});
document.getElementById('backButton').addEventListener('click', () => {
  nav--;
  load();
});
}


 initButtons();
 load();