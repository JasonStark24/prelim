const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter your Grade? ', (answer) => {
  // TODO: Log the answer in a database
  
  var grades = parseInt(answer);
  addAge(grades,5);
 
 
 
  rl.close();
});

function addAge(grades,increment){
    
    var grade = grades + increment;
    
    
if(grade < 74)
  console.log('Your grade is low'+grade);



else if(grade >=75)
  console.log('Your new grade is '+grade);


}