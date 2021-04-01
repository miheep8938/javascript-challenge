// from data.js
var tableData = data;

// Select the table to append the data 
var tbody = d3.select("tbody");


// Select the button and input field for datetime 
var filterButton = d3.select("#filter-btn");
// var dateinputField = d3.select("datetime");


// Print in the console 
console.log("List of Data:", tableData);


// ---------------------------------------------------------------------------
// Filter for Data 
// Loop Through the data and append to the table 
data.forEach((data) => {
  var tableRow = tbody.append("tr");
  Object.entries(data).forEach(([key, value]) => {
    var tableCell = tableRow.append("td");
    tableCell.text(value);
  });
});


// Define the click handler 
filterButton.on("click", function () {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateinputValue = d3.select("#datetime").property("value");
  var cityinputValue = d3.select("#city").property("value");
  var stateinputValue = d3.select("#state").property("value");
  var countryinputValue = d3.select("#country").property("value");
  var shapeinputValue = d3.select("#shape").property("value");

  var filteredData = data;
  // Filter the data 
  // check if (variable) exists 
  if (dateinputValue) { filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === dateinputValue);}
  if (cityinputValue) { filteredData = filteredData.filter(ufoSighting => ufoSighting.city === cityinputValue);}
  if (stateinputValue) { filteredData = filteredData.filter(ufoSighting => ufoSighting.state === stateinputValue);}
  if (countryinputValue) { filteredData = filteredData.filter(ufoSighting => ufoSighting.country === countryinputValue);}
  if (shapeinputValue) { filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === shapeinputValue);}

  // clear the existing tbody 
  tbody.html("");

  // Loop through `filtered data` and append to the table 
  filteredData.forEach(ufoSighting => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
});

// // ---------------------------------------------------------------------------
// // Filter for city 
// // select city buttons
// var cityButton = d3.select("#filter-btn");
// // var cityinputField = d3.select("#city");

// // Define the click handler 
// cityButton.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var cityinputElement = d3.select("#city");

//   // Get the value property of the input element
//   var cityinputValue = cityinputElement.property("value");

//   console.log(cityinputValue);

//   // Filter the data 
//   var cityfilteredData = data.filter(dataTwo => dataTwo.city === cityinputValue);

//   console.log(cityfilteredData);

//   // clear the existing tbody 
//   tbody.html("");

//   // Loop through `filtered data` and append to the table 
//   cityfilteredData.forEach((cityData) => {
//       var row0 = tbody.append("tr");
//       Object.entries(cityData).forEach(([key, value]) => {
//         var cell0 = row0.append("td");
//         cell0.text(value);
//       });
//   });
// });

