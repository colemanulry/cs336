// Coleman Ulry
// CS 336 - Web Dev hmwk6

import {DataService} from "../hmwk8/dataService";

// this function will get data from dataService.js and create row for each object
async function addDataRows() {
  // data service object
  let newData = new DataService();
  // call fetch data, await for data to be fetched
  await newData.fetchData();
  // get data, assign to variable
  let temp = newData.getData();

  let i: number;
  for(i = 0; i < 1; i++){
    temp.forEach(createRow);
  }
}

// this function creates a row for each object in array
function createRow(rowData:any) {
  let table = document.getElementById("rows") as HTMLTableElement;
  let row = table.insertRow(0);
  const input1 = row.insertCell(0);
  const input2 = row.insertCell(1);
  const input3 = row.insertCell(2);
  const input4 = row.insertCell(3);
  const input5 = row.insertCell(4);
  const input6 = row.insertCell(5);

  // change each cell based on data given
  input1.innerHTML = rowData.name.first + " " + rowData.name.last;
  input2.innerHTML = rowData.gender;
  input3.innerHTML =
    rowData.location.street.number +
    " " +
    rowData.location.street.name +
    ", " +
    rowData.location.city +
    ", " +
    rowData.location.country;
  input4.innerHTML = rowData.dob.age;
  input5.innerHTML = rowData.phone;

  let picture = document.createElement("img");
  // assign picture to src attribute
  picture.src = rowData.picture.medium;
  input6.append(picture);
};
