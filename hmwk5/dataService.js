// Coleman Ulry
// CS 336 - Web Dev hmwk5

// Class
class DataService {
  // constructor that does nothing
  constructor() {}

  // array of 3 objects, with 5 properties each
  data = [
    {
      name: "Bob Smith",
      gender: "M",
      address: "123 Apple Street",
      age: 21,
      phoneNumber: "(181)-818-1818",
    },
    {
      name: "Jack Collins",
      gender: "M",
      address: "472 Orange Street",
      age: 76,
      phoneNumber: "(292)-929-2929",
    },
    {
      name: "Emily Timmer",
      gender: "F",
      address: "292 Blueberry Street",
      age: 46,
      phoneNumber: "(939)-393-9393",
    },
  ];

  // this function will return the whole function if no parameter passed, else, will return only up to parameter
  getData = (numRecords) => {
    if (numRecords === undefined) {
      return this.data;
    } else {
      return this.data.slice(0, numRecords);
    }
  };
}

/* // test code
data1 = new DataService();
console.log("This should log all entries...");
console.log(data1);
const hi = data1.getData(2);
console.log("This should log two entries...");
console.log(hi);
const hi2 = data1.getData(1);
console.log("This should only log one entry...");
console.log(hi2); */
