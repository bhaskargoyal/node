/*function getValue(key){
	var index = process.argv.indexOf(key);
	return (index !== -1)? process.argv[index+1] : null;
}

var name = getValue('--name');
var age = getValue("--age");
if(age == null){
	age = 19;
}

if(name || age){
	console.log(`hello ${name}, i think your age is ${age}`)
} else {
	console.log("please provide full data.");
}*/

/*var questions = ['enter age', 'enter name', 'enter hello'];
var answers = [];
var index=0;
ask(index);
process.stdin.on('data',function(data){
	answers[index] = data.toString().trim();
	index++;
	if(index<3) {
		ask(index);
	} else {
		process.exit();
	}
});

process.on('exit', ()=>{
	process.stdout.write(`${answers[2]} ${answers[1]}, i think your age is ${answers[0]}.`);
});

function ask(index){
	process.stdout.write(questions[index]+": ");
}*/
/*
var waitTime  = 1000;
var requestTime = 100;
var time = 0;
var percent = 0;
function writePercent(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Percent loaded ${p}% `);
}
setTimeout(function () {
	writePercent(100);
	clearInterval(intervalHandler);
}, waitTime);

var intervalHandler = setInterval(function () {
	time += requestTime;
	writePercent(Math.floor((time/waitTime)*100));
}, requestTime);


writePercent(percent);*/


/*var util = require("util");
var path = require("path");
var v8 = require("v8");
util.log(path.join(__dirname, "www", "files", "uploads"));
setTimeout(()=>{
	util.log(v8.getHeapStatistics());
},1000);*/
/*
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var person = {
	name: "",
	sayings: []
};
var prompt = 1;
rl.setPrompt("Tell Us What's Your Name? ");
rl.prompt();
rl.on('line', function (answer){
	
	if(answer.toLowerCase().trim() == "exit"){
		rl.close();
	} else if(prompt == 1) {
		person.name = answer;
		prompt++;
		rl.setPrompt(`What else would ${person.name} say?(exit to leave)`);
		rl.prompt();
	} else {
		person.sayings.push(answer.toString().trim());
		rl.setPrompt(`What else would ${person.name} say?(exit to leave)`);
		rl.prompt();
	}
});

rl.on('close',function(){
	console.log("\n\nCredentials : \n" + person.name + "\n" + person.sayings);
})

*/

/*var events = require('events');
var emitter = new events.EventEmitter();  // object is created with name emitter

emitter.on('custom', function(str){
	console.log(str);
});


emitter.emit('custom', "welcome to customs");*/

/*
var Person = require('./lib/Person');

var ben = new Person("bhaskar goyal");
ben.on('speaks', function (said){
	console.log(`${this.name} : ${said}`);
});
ben.emit('speaks', 'hello my name is Bhaskar Goyal');
*/


/*var exec = require('child_process').exec;

exec('ls', function(err, stdout){
	if(err){
		throw err;
	}
	console.log(stdout.toString().trim());
});
*/

var spawn = require("child_process").spawn;
var cp = spawn("node", ["temp"]);

cp.stdout.on('data',function(data){
	console.log(`from the childprocess => ${data.toString().trim()}`);
});

cp.on("close",function(){
	process.exit();
});


setTimeout(function(){
	cp.stdin.write("stop");
},4000);
























































