var i = ['er','rt','erwe','erwerwer','werwerwrwe'];

var index=0;

var interval= setInterval(function(){
	console.log(i[Math.floor(Math.random()*(i.length))]);
},1000);

process.stdin.on('data', function(data){
	console.log("stopped because of "+ data.toString().trim());
	clearInterval(interval);
	process.exit();
});