const obA = 23.27;
const obB = 35.36;
const obB1 = 39.70;
const obC = 68.74;
const obD = 154.04;
const prov = 139.43;
const eftersix = 147.19;
const efterall = 170.97;
var timlon = 0;
var overtim = 0;
var olovlig = 0;

function berakna() {

    if(document.getElementById('forst').checked) {    
        timlon = prov;
        overtim = 69.715;
      }else if(document.getElementById('six').checked) {
        timlon = eftersix;
        overtim = 73.595;
      }
      else if(document.getElementById('last').checked) {
        timlon = efterall;
        overtim = 85.485;
      }

      const ner = Number(document.getElementById('nervaro').value); 
      const fron = Number(document.getElementById('franvaro').value); 

      const oba_ = Number(document.getElementById('oba').value); 
      const obb_ = Number(document.getElementById('obb').value); 
      const obb1_ = Number(document.getElementById('obb1').value); 
      const obc_ = Number(document.getElementById('obc').value); 
      const obd_ = Number(document.getElementById('obd').value); 
      const vecka = Number(document.getElementById('vecka').value); 
      const monad = Number(document.getElementById('monad').value); 
      var skatt = (document.getElementById('forre')); 

      


      var arbettid =  ner - olovlig;
    
      timlon80 = timlon * 0.80;
    
      var fron80 = fron * timlon80;
      var tim80 = (fron * 0.20) * timlon80;
      var fronvoroo = fron80 - tim80:
    
      var obbs = (oba_ * obA) + (obb_ * obB) + (obb1_ * obB1) + (obc_ * obC) + (obd_ * obD);
      var over = (vecka * overtim) + (monad * overtim);

      var sum = (arbettid * timlon) + obbs + over + fronvoroo ;

      skatt.innerText = sum + " SEK";
     
      




}
