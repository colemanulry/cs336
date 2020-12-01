// Coleman Ulry
// CS 336 - Web Dev hmwk5

// this function will get data from dataService.js and create row for each object
addDataRows = () => {
  // instance of class
  const dataS = new DataService();
  // assign data to variable
  const holder = dataS.getData();
  // create row for each object
  holder.forEach(createRow);
};

// this function creates a row for each object in array
createRow = (rowData) => {
  const table = document.getElementById("rows");
  const row = table.insertRow(0);
  const input1 = row.insertCell(0);
  const input2 = row.insertCell(1);
  const input3 = row.insertCell(2);
  const input4 = row.insertCell(3);
  const input5 = row.insertCell(4);

  // change each cell based on data given
  input1.innerHTML = rowData.name;
  input2.innerHTML = rowData.gender;
  input3.innerHTML = rowData.address;
  input4.innerHTML = rowData.age;
  input5.innerHTML = rowData.phoneNumber;
};
