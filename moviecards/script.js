// Step 1: Create a movie object with details 
const movie = { 
  title: "Alice in Wonderland", // Movie title 
  year: 1951,                                  // Release year 
  genre: "Animation, Musical",                 // Movie genre 
  rating: "7.3/10"                             // IMDB rating 
}; 


/* 
 This is a regular object. It holds key-value pairs (just like 
a contact card). 
*/ 
 
// Step 2: Destructure values from the movie object 
const { title, year, genre, rating } = movie; 
 
/* 
 This is ES6 object destructuring: 
  - It pulls out individual values (title, year, etc.) into 
their own variables. 
  - Same as writing: 
    const title = movie.title; 
    const year = movie.year; 
*/


// Step 3: Create HTML string using template literals 
const movieHTML = ` 
  <h2>${title}</h2> 
  <p><strong>Year:</strong> ${year}</p> 
  <p><strong>Genre:</strong> ${genre}</p> 
  <p><strong>IMDB Rating:</strong> ${rating}</p> 
`; 
 
/* 
 This uses template literals: 
  - Backticks (\`) let us make multi-line strings. 
  - ${} inserts JavaScript variables into the HTML string. 
*/

// Step 4: Insert the string into the webpage 
document.getElementById("movie-container").innerHTML = 
movieHTML; 
 
/* 
 This finds the <div> with id movie-container and injects the 
HTML into it. 
JavaScript
  - innerHTML is a property that lets us insert HTML strings 
directly into the DOM. 
*/ 