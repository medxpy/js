let userName = 'MEd';
function greeting (userName){
  if(userName !== ''){
    return ('Hello '+ userName + '!'); //change console.log to: return
  } else {
    return ('Hello!') //same thing here
  }
};
console.log(greeting(userName)); 
let userQuestion = 'How much can you earn per year ?';
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightball = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply haz try again';
    break;
  case 3 :
    eughtBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
};
console.log(`The Magic Eight Ball’s is: ${eightBall}`);

  


