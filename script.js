
const calculateSalary=()=>{
    const basicSalary=parseInt(document.getElementById('basicSal').value);
    const allowance=parseInt(document.getElementById('allowance').value);
    const deduction=parseInt(document.getElementById('deduct').value);
    const week=parseInt(document.getElementById('perWeek').value);
    const hr=parseInt(document.getElementById('hrs').value);
    console.log(basicSalary)
    console.log(allowance);
    console.log(deduction)
  
    //calculate monthly salary
      const monthly_salary=(basicSalary+allowance - deduction).toFixed(2);
    //annual salary
    const annual_salary=(monthly_salary*12).toFixed(2);
    //calculate weekly salary
    const weekly_salary=(monthly_salary/(week *4)).toFixed(2)
    //daily salary
    const daily_salary=(monthly_salary/(week*4*hr)).toFixed(3)
    //hr salary
    const hr_salary=(monthly_salary/(week*4*hr*60)).toFixed(3)
    
    const form=document.querySelector('.ff');
    form.style.display='none';
    const res=document.getElementById('result');
    res.style.display='block';
    document.getElementById('an').innerText=`Annual Salary : ${annual_salary}`
    document.getElementById('mon').innerHTML=`Monthly Salary : ${monthly_salary}`
    document.getElementById('wee').innerHTML=`Weekly Salary : ${weekly_salary}`
    document.getElementById('day').innerHTML=`Daily Salary : ${daily_salary}`
    document.getElementById('hrss').innerHTML=`Hourly Salary : ${hr_salary}`
    
}
const resetInputFields=()=>{
  document.getElementById('basicSal').value=" ";
  document.getElementById('allowance').value=" ";
  document.getElementById('deduct').value=" ";
  document.getElementById('perWeek').value=" ";
  document.getElementById('hrs').value=" ";
}
const goBack=()=>{
  const form=document.querySelector('.ff');
  form.style.display='block';
  const res=document.getElementById('result');
  res.style.display='none';
   resetInputFields()
 
}