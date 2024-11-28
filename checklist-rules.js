const checklistRules = [
    {
      name: "isValuationFeePaid",
      checklistRules: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "isUkResident",
      checklistRules: (data) => data.isUkResident === true,
    },
    {
      name: "riskRating",
      checklistRules: (data) => data.riskRating === "Medium",
    },
    {
      name: "Loan-to-Value",
      checklistRules: (data) =>
        Math.ceil(
          (parseInt(
            data.mortgage.loanRequired
              .replace(",", "")
              .slice(1, data.mortgage.loanRequired.length - 1)
          ) /
            parseInt(
              data.mortgage.purchasePrice
                .replace(",", "")
                .slice(1, data.mortgage.purchasePrice.length - 1)
            )) *
            100
        ) < 60,
    },
  ];
  
  module.exports = checklistRules;
  