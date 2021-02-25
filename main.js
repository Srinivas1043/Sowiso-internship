var age_group;
function SubmitAge()
{
    var random_x;
    age_group = document.getElementById('ageSelect').value;
    switch(age_group)
    {
    
        case 'lessthan5':
            document.getElementById('addmain').style.display='block';
            document.getElementById('answer').style.display='block';
            random_x = 99;
            break;
        
        case '5to10':
            document.getElementById('addmain').style.display='block';
            document.getElementById('answer').style.display='block';
            random_x = 999;
            break;
        
        case '10to15':
            document.getElementById('addmain').style.display='block';
            document.getElementById('answer').style.display='block';
            random_x = 9999;
            
            break;
        
        case 'greaterthan15':
            document.getElementById('addmain').style.display='block';
            document.getElementById('answer').style.display='block';
            random_x = 99999;
            
            break;
    
        case 'default':
            document.getElementById('addmain').style.display='None';
            break;
    }
    document.getElementById("wrong").style.display = "None";
    document.getElementById("correct").style.display = "None";

    document.getElementById('ansgroup').style.display = 'None';
    document.getElementById('result_total').value = "";
    if(age_group == 'greaterthan15')
    {
        IntegerRandomProblemGeneration(random_x);
    }
    else
    {
    RandomProblemGeneration(random_x);
    }
}

var num1, num2;

function IntegerRandomProblemGeneration(RandomX)
{
    //Generates Random Number integers within the range -1000 to + 1000
    let random_number_1 = (Math.random() * RandomX) * (Math.round(Math.random()) ? 1 : -1); 

    //Generates Random Number integers from -1000 to 1000 
    let random_number_2 = (Math.random() * RandomX) * (Math.round(Math.random()) ? 1 : -1);
    if (random_number_1 < 0){
        document.getElementById("parenthesis").style.display ='inline';
        document.getElementById("parenthesis0").style.display ='inline';
    }
    
    if(random_number_2 < 0){
        document.getElementById("parenthesis1").style.display ='inline';
        document.getElementById("parenthesis01").style.display ='inline';
    }
    
    //Displays the random integers on to the web broswer through DOM functions.
    document.getElementById("addition").innerHTML = random_number_1;
    document.getElementById("addition1").innerHTML = random_number_2;
   
    num1 = random_number_1;
    num2 = random_number_2;
}


function RandomProblemGeneration(RandomX)
{
    //Generates Random Number integers within the range -1000 to + 1000
    let random_number_1 = Math.ceil(Math.random() * RandomX) * (Math.round(Math.random()) ? 1 : -1); 

    //Generates Random Number integers from -1000 to 1000 
    let random_number_2 = Math.ceil(Math.random() * RandomX) * (Math.round(Math.random()) ? 1 : -1);
    if (random_number_1 < 0){
        document.getElementById("parenthesis").style.display ='inline';
        document.getElementById("parenthesis0").style.display ='inline';
    }
    
    if(random_number_2 < 0){
        document.getElementById("parenthesis1").style.display ='inline';
        document.getElementById("parenthesis01").style.display ='inline';
    }
    
    //Displays the random integers on to the web broswer through DOM functions.
    document.getElementById("addition").innerHTML = random_number_1;
    document.getElementById("addition1").innerHTML = random_number_2;
   
    num1 = random_number_1;
    num2 = random_number_2;
}



function ValidateCorrectAnswer()
{

    var result = (num1) + (num2);
    console.log(result);
    //Gets the user's result input of two randomly generated numbers
    var user_result = document.getElementById("result_total").value;
    
    //Checks if the user result is correct and displays a message on the browser
    if(user_result == result)
    {
        document.getElementById('ansgroup').style.display = 'block';
        document.getElementById("correct").style.display = "block"; 
    }

    //Check if the user result is not correct and displays a message on the browser
    else
    {
        document.getElementById('ansgroup').style.display = 'block';
        document.getElementById("correct_answer").innerHTML = result;
        document.getElementById("wrong").style.display = "block";

    }
}

function NextQuestion()
{
    SubmitAge();
}