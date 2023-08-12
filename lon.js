const obA = 24.22;
const obB = 36.81;
const obB1 = 41.33;
const obC = 71.56;
const obD = 160.36;
const prov = 145.11;
const eftersix = 153.04;
const efterall = 177.89;
const grupp = 184.87;
var timlon = 0;
var overtim = 0;

function berakna() {

    if(document.getElementById('forst').checked) {    
        timlon = prov;
        overtim = timlon / 2;
      }else if(document.getElementById('six').checked) {
        timlon = eftersix;
        overtim = timlon / 2;
      }
      else if(document.getElementById('last').checked) {
        timlon = efterall;
        overtim = timlon / 2;
      } else if(document.getElementById('grup').checked) {
        timlon = grupp;
        overtim = timlon / 2 ;
      }


      var ner = Number(document.getElementById('nervaro').value); 
      var fron = Number(document.getElementById('franvaro').value); 

      const oba_ = Number(document.getElementById('oba').value); 
      const obb_ = Number(document.getElementById('obb').value); 
      const obb1_ = Number(document.getElementById('obb1').value); 
      const obc_ = Number(document.getElementById('obc').value); 
      const obd_ = Number(document.getElementById('obd').value); 
      const vecka = Number(document.getElementById('vecka').value); 
      const monad = Number(document.getElementById('monad').value); 
      var skatt = (document.getElementById('forre')); 

      


      var arbettid =  ner;
    
      timlon80 = timlon * 0.80;
    
      var fron80 = fron * timlon80;
      var tim80 = (fron * 0.20) * timlon80;
      var fronvoroo = fron80 - tim80;
    
      var obbs = (oba_ * obA) + (obb_ * obB) + (obb1_ * obB1) + (obc_ * obC) + (obd_ * obD);
      var over = (vecka * overtim) + (monad * overtim);

      var sum = (arbettid * timlon) + obbs + over + fronvoroo ;

      skatt.innerText = sum + " SEK";
     
      




}
