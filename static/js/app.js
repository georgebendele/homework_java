// from data.js
const tableData = data;


// Select the input element and get the raw HTML node

const submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  const filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  

filteredData.forEach(function(siting) {
  const tbody = d3.select("tbody");
  var row = tbody.append("tr");

    for (key in siting){
        console.log(key, siting[key]); 
        const cell = tbody.append("td");
        cell.text(siting[key]);
    }

});

});


