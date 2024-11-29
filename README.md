Complete description of the dashboard and future conditions

(1) Working process of this entire backend dashboard
* First, we set up the Node.js project in the directory ~/transition-computing-backend-assignment by running npm init -y to generate a package.json file.
* Second, we install the required packages such as cors (Cross Origin Resource Sharing used for controlling the sharing of resource of an API from different Domain like Port, Domain Name and etc), express (used for creating server-side functionality and API to control reauest, response and many more ), and axios (used to make HTTP requests).
* Third, we initialize the server, which runs on port 3000.
* Fourth, we import the checklist-rules.js module into index.js. This file contains an array with two keys: name and checklistRules. The checklistRules function contains the logic to evaluate whether a condition is true or false, and it returns either 'passed' or 'failed' based on the API fetched Data result.
* Fifth, we use an external API (External API url = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639") to retrieve data and create the checklist system based on the fetched data.
* Sixth, we pass the fetched data from index.js to the checklist-rules.js module. The checklistRules function of the array inside the checklist-rules.js module receives this data as an argument and performs the necessary operation.
* Seventh, from the API response, we access the fields isValuationFeePaid, isUkResident, riskRating, loanRequired, and purchasePrice to evaluate them against the checklist rules.


(2) Future Condition (Adding a New Condition)
a) Define a new rule object and add it to the `checklistRules` array.
b) Provide a descriptive `name` for the rule.
c) Implement the `validate` function to check the condition.
 - The function should take `data` as input and return `true` or 'false' based on API data then we will get status (Passed/Failed).
* Example:
{
 name: "isAccountVerified",
 validate: (data) => data?.accountStatus === "verified"
}
