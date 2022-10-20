// Your code goes here

const Para = document.querySelector('p');
Para.textContent= "JavaScript is so cool. It lets me add text to my page programmatically.";
const event = document.createEvent( 'Event' );

document.addEventListener("DOMContentLoaded", function() {
    //console.log("The DOM has loaded");
    const texts=document.getElementById("text");
    texts.textContent="This is really cool!" 
  });
  