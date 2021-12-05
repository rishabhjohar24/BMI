let count = require("../model/CategoryCount");
module.exports = calculate = (value) => {
  const height = value.height / 100;
  const weight = value.weight;
  const BMI = weight / (height * height);
  BMI.toString(2);
  const x = {
    height: height * 100 + " CM",
    weight: weight + " KG",
    gender: value.gender,
    BMI: BMI.toFixed(2),
    BMI_Category: "",
    Health_Risk: "",
  };
  if (BMI <= 18.4) {
    count.Underweight += 1;
    x.BMI_Category = "Underweight";
    x.Health_Risk = "Malnutrition Risk";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    count.Normal_Weight += 1;
    x.BMI_Category = "Noramal Weight";
    x.Health_Risk = "Low Risk";
  } else if (BMI >= 25 && BMI <= 29) {
    count.Overweight += 1;
    x.BMI_Category = "Overweight";
    x.Health_Risk = "Enhanced Risk";
  } else if (BMI >= 30 && BMI <= 34.9) {
    count.Moderately_Obese += 1;
    x.BMI_Category = "Moderately Obese";
    x.Health_Risk = "Medium Risk";
  } else if (BMI >= 35 && BMI <= 39.9) {
    count.Severely_Obese += 1;
    x.BMI_Category = "Severly Obese";
    x.Health_Risk = "High Risk";
  } else {
    count.Very_Severely_Obese += 1;
    x.BMI_Category = "Very Severly Obese";
    x.Health_Risk = "Very High Risk";
  }
  return x;
};
