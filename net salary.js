function calculateNetSalary(netSalary){

  const benefits = netSalary;

  const basicSalary = netSalary;

  let payee = Math.floor(basicSalary+benefits) * 0.25;

  let NHIFDeduction = Math.floor(basicSalary) * 2.75;

  let NSSFDeduction = Math.floor(basicSalary) *6;

  let grossSalary = Math.floor((basicSalary+benefits));

  netSalary = (grossSalary - payee - NHIFDeduction - NSSFDeduction);

}
console.log(calculateNetSalary(24000))