// Write your code in this fil

function scuberGreetingForFeet(distance) {
  if (distance<=400){
    return "This one is on me!"
  } else if ( distance < 2500 && distance > 2000){
    return "I will gladly take your thirty bucks.";
  } else if ( distance > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city ==== "NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tipString){
  if (tipString === 'Gererous'){
      return 'Thank you so much.'
  } else if (tipString === 'Not as generous'){
      return 'Thank you.'
  } else if (tipString ==='Thanks for everything'){
      return 'Bye.'
  } 
}