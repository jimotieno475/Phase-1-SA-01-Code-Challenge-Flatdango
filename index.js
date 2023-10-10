let films=[]
function fetchData() {
    return fetch("http://localhost:3000/films")
    .then(res=>res.json())
    .then(data=>functionData(data))
    
}
fetchData()

function functionData(films) {
let movieTitle=document.getElementById("title")
let moviePoster=document.getElementById("movie-poster");
let movieRuntime=document.getElementById("runTime");
let movieShowtime=document.getElementById("showTime");
let availableTickets=document.getElementById("available tickets")
let movieButton=document.getElementById("btn")
let movieCapacity=document.getElementById("capacity")
let movieSoldTichet=document.getElementById("sold")
films.forEach((film)=> {
 movieTitle.innerText=film.title;
 moviePoster.src =film.poster;
movieRuntime.innerText=film.runtime;
movieShowtime.innerText=film.showtime;

movieButton.addEventListener("click",function(e){
    e.preventdefult
    let y=availableTickets.innerText=film.capacity-film.tickets_sold
   
    if (y > 0) {
     alert(`Ticket purchased successfully ${y-1} tickets are still available for booking`) ;
  } else {
    alert('Sorry, this showing is sold out.');
  }

   }) 
})
   
}
