const fs = require("fs");
const { Promiseaccess, readFile } = require("./Modules");

promiseReturner();

async function promiseReturner() {
  try {
    await Promise.all([
      Promiseaccess("names.txt"),
      Promiseaccess("numbers.txt"),
    ]);
    userObject(
      await Promise.all([readFile("names.txt"), readFile("numbers.txt")])
    );
  } catch (err) {
    console.log(err);
  }
}

function userObject([names, numbers]) {
  let person = {};
  let peopleNames = names.split("\r\n");
  for (const element1 of peopleNames) {
    [key, value] = element1.split(" - ");
    person[key] = value;
  }
  let phones = {};
  let peopleNumbers = numbers.split("\r\n");
  for (const element2 of peopleNumbers) {
    [key, value] = element2.split(" - ");
    if (phones[key]) {
      phones[key] = [...phones[key], value];
    } else {
      phones[key] = [value];
    }
  }
  format(person, phones);
}

function format(person, phones) {
  let result = "";
  for (let key in person) {
    switch (phones[key]?.length) {
      case undefined:
        result += `${person[key]} has't any phone number.`;
        break;
      case 1:
        result += `${person[key]} phone number is ${phones[key][0]}.\r\n`;
        break;
      default:
        result += `${person[key]} phone numbers are ${phones[key]}.\r\n`;
        break;
    }
  }

  console.log(result);
}
