if (process.argv[2]>0){
	console.log(process.argv[3]);
} else if (process.argv[2]<0){
	console.log(process.argv[3].split('').reverse().join(''));
}