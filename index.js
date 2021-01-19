var readlinesync=require("readline-sync");
var chalk=require("chalk");
var username=readlinesync.question(chalk.bold.green
("What's your name? " ));
console.log("Hi!! "+chalk.italic(username));
var score =0;
var b=false;
var know=readlinesync.question("Do you know Ruchika? ");
if(know.toUpperCase()==='YES')
b=true;
function play( quest, ans)
{
var useranswer=readlinesync.question(quest);
if(useranswer.toUpperCase()===ans.toUpperCase())
{
console.log("Yeah:) You're correct")
score++;
}
else
console.log("ohhh"+":("+" You're wrong");

}



if(b)
{
var questionList=
[
  {
  question: chalk.yellow("Where she lives? "),
  answer:   "Lucknow"
},
{
  question: chalk.yellowBright("Where she works? "),
  answer:   "wipro"
},
{
  question: chalk.blueBright("Her work location? "),
  answer:   "mumbai"
},
{
  question: chalk.cyanBright("Is she a writer? "),
  answer:   "yes"
},
{
  question: chalk.magentaBright("How many number of her poetries are on youtube?  "),
  answer:   "5"
}
]
for(var i=0;i<questionList.length;i++)
{
  console.log("----------")
  var Question=questionList[i].question;
  var Answer=questionList[i].answer;
  play(Question,Answer);
}

console.log("------------------------------------------------")
var ahead=readlinesync.question(chalk.red("Do you want to know your score? "));
if(ahead.toUpperCase()=='YES')
{
  if(score>4)
  console.log("Excellent!! Your score is 5 out of 5");
  else if(score>=3)
  console.log("Good!! Your score is "+ score+" out of 5");
  else
  console.log("Your score is "+ score+" out of 5")
}
}