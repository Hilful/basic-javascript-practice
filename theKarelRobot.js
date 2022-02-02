/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 function main(){
    putBeeper();
    turnLeftThreeTimes();
    turnLeft();
    putBoxInPlace();
    turnLeftThreeTimes();
    putBoxInPlace();
    turnLeftThreeTimes();
    putBoxInPlace();
    turnLeftThreeTimes();
    putBoxInPlace();
  }
  
  
  function putBoxInPlace(){
     move();
    turnLeft();
    move();
    putBeeper();
     }
  
  function turnLeftThreeTimes(){
     turnLeft();
    turnLeft();
    turnLeft();
     }
  
  