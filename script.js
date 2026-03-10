let randomNum1=Math.floor(Math.random()*10);
let randomNum2=Math.floor(Math.random()*10);
let a = document.getElementById("num1");
let b = document.getElementById("num2");
a.innerText=randomNum1;
b.innerText=randomNum2;
let math = document.getElementById("math");
let operator;
let result;
let temp = document.getElementById("math op");
let arr1=["divide","plus","minus","multiply"];
let r1 = Math.floor(Math.random()*4);
operator=arr1[r1];
math.innerText=operator;
if(operator== "divide")
{
    result = randomNum1/randomNum2;
    temp.innerText="by";
}
else if(operator=="plus")
{
    result = randomNum1+randomNum2;
    temp.innerText="";
}
else if(operator=="minus")
{
    result = randomNum1-randomNum2;
    temp.innerText="";
}
else if(operator == "multiply")
{
    result = randomNum1*randomNum2;
    temp.innerText="by";
}
let s=0;
let button = document.getElementById("btn");

button.addEventListener("click",function(){
    let inp = document.getElementById("answerinput");
    if(result==Number(inp.value))
    {
        s+=1;
    }
    else{
        s-=1;
    }
    let score = document.getElementById("score");
    score.innerText=s;

    randomNum1 = Math.floor(Math.random()*10);
    randomNum2 = Math.floor(Math.random()*10);
    a.innerText = randomNum1;
    b.innerText = randomNum2;

    let arr1=["divide","plus" ,"minus","multiply"];
    let r1 = Math.floor(Math.random()*4);
    operator=arr1[r1];
    math.innerText=operator;
    
    let temp = document.getElementById("math op");
    
    if(operator== "divide")
    {
        result = randomNum1/randomNum2;
        temp.innerText="by";
    }
    else if(operator=="plus")
    {
        result = randomNum1+randomNum2;
        temp.innerText="";
    }
    else if(operator=="minus")
    {
        result = randomNum1-randomNum2;
        temp.innerText="";
    }
    else if(operator == "multiply")
    {
        result = randomNum1*randomNum2;
        temp.innerText="by";
    }
    inp.value="";
})