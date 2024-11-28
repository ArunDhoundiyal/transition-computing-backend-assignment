const express = require("express");
const cors = require("cors");
const axios = require("axios");
const checklistRules = require("./checklist-rules");
const server_instance = express();
server_instance.use(cors());
server_instance.use(express.json());

server_instance.listen(3005, () => {
  console.log("server is running on 3005 port");
});

server_instance.get("/", async (request, response) => {
  try {
    const { data } = await axios.get(
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"
    );
    if (data) {
      const outputResult = checklistRules.map((eachCheckList) => ({
        checkListName: eachCheckList.name,
        checklistRules: eachCheckList.checklistRules(data)
          ? "passed"
          : "Failed",
      }));
      response.status(200).send(outputResult);
    } else {
      response
        .status(500)
        .send(
          "Data is not being fetched from API due to some reason kindly try it again after some time !"
        );
    }
  } catch (error) {
    response.status(400).send(`Error while fetching data: ${error}`);
  }
});

// Complete description of the dashboard and future conditions

// (1) Working process of this entire backend dashboard
// a) First, we set up the Node.js project in the directory ~/transition-computing-backend-assignment by running npm init -y to generate a package.json file.
// b) Second, we install the required packages such as cors, express, and axios.
// c) Third, we initialize the server, which runs on port 3000.
// d) Fourth, we import the checklist-rules.js module into index.js. This file contains an array with two keys: name and checklistRules. The checklistRules function contains the logic to evaluate whether a condition is true or false, and it returns either 'passed' or 'failed' based on the API fetched Data result.
// e) Fifth, we use an external API to retrieve data and create the checklist system based on the fetched data.
// f) Sixth, we pass the fetched data from index.js to the checklist-rules.js module. The checklistRules function inside the module receives this data as an argument and performs the necessary operation.
// g) Seventh, from the API response, we access the fields isValuationFeePaid, isUkResident, riskRating, loanRequired, and purchasePrice to evaluate them against the checklist rules.

// (2) Future Condition (Adding a New Condition)
// a) Define a new rule object and add it to the `checklistRules` array.
// b) Provide a descriptive `name` for the rule.
// c) Implement the `validate` function to check the condition.
//  - The function should take `data` as input and return `true` or 'false' based on API data then we will get status (Passed/Failed).
// * Example:
// {
//  name: "isAccountVerified",
//  validate: (data) => data?.accountStatus === "verified"
// }
