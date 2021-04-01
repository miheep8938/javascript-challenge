// from data.js
var tableData = data;


// Select two variables 
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// Print in the console 
console.log("List of Data:", tableData);

// Loop Through `data` and append to the table 
data.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Define the click handler 
button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    // Filter the data 
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
    
    // clear the existing tbody 
    tbody.html("");
    
    // Loop through `filtered data` and append to the table 
    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
 });

