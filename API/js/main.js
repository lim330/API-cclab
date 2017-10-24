//
// //Constructors for API URL Request. We'll use these later
// var baseURL = "https://swapi.co/api/";
// var films = "/people";
// var id1 = "/20";
var fullURL = "https://swapi.co/api/people/11/";

//Pull in our HTML elements so we can talk to them using JS
var title = document.getElementById("title");
var description = document.getElementById("description");
var height = document.getElementById("height");

// runs whole function as soon as page opens. We wrap all our code in this function.
(function() {
  //Set Event listener on Button. When clicked, run the makeRequest function defined below
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 
  //variable to hold httpRequest info
  var httpRequest;
  //makeRequest function runs when button is clicked
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    //If something is wrong with request, pop-up an alert that says so
    if (!httpRequest) {
      alert("It did not work 😞");
      return false;
    }
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();
  }

  //Function that Runs When API Call is finished
  function fillInfo() {
    //variable to hold the response from API GET request
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          // console.log(httpRequest.responseText);
        
//         /*Save the response in responseContent variable.
//         Note that the response has ' ' around it. This means it is a String.*/
        responseContent = httpRequest.responseText;
        console.log(responseContent);
//         /*
//         Since responseContent is a string, we need to change it into an object
//         to use it. To do this, we can use JSON.parse. This parses or translates
//         a JSON object from a String.
//         */
        var parsed = JSON.parse(responseContent);
//         //Now we can use the info the same way as an object.
        console.log(parsed.title);
        console.log(parsed.description);
        console.log(parsed.height);
        
//         /* Now lets update our actual HTML using this info.
//         We already have two variables, title and description which we
//         pulled into our code using document.getElementById() earlier.
//         We can update these variables with the information from the API
//         by using the .innerHTML command. */
        title.innerHTML = parsed.name;
        description.innerHTML = parsed.skin_color; 
        height.innerHTML = parsed.height;

      } else {
        alert("There was a problem with the request.");
        
      //   parsed.height;            
      // } else {
      //   alert("There was a problem with the request.");
      }
    }
  }
  //Make sure you ad the () after the end of the function.
})();