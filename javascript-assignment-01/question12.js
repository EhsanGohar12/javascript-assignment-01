           //  Question 12: Salary Calculator (10 Marks)  //


// A company calculates employee salaries using the following structure:
// • Basic Salary: Entered by the user
// • House Allowance: 20% of basic salary
// • Medical Allowance: 10% of basic salary
// • Tax Deduction: 5% of basic salary
// Calculate:
// 1. House allowance
// 2. Medical allowance
// 3. Tax deduction
// 4. Gross salary
// 5. Net salary after tax


var basicSalary = +prompt("Enter your basic salary"); 


var houseAllowance = basicSalary * 20 / 100;
var medicalAllowance = basicSalary * 10 / 100;

var overTime = basicSalary * 80 / 100;
var grossSalary = basicSalary + houseAllowance + medicalAllowance + overTime;

var taxDeduction = basicSalary * 5 / 100;

var netSalary = grossSalary - taxDeduction;


console.log("basicSalary:" , basicSalary);
console.log("houseAllowance:" , houseAllowance);
console.log("overTime", overTime);
console.log("grossSalary:" , grossSalary);
console.log("taxDeduction:" , taxDeduction);
console.log("netSalary:" , netSalary);




