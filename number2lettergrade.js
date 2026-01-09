//input
let nGrade = 75;
let letterGrade = "";
//processing
//select among letter grades
if(nGrade < 50){
    letterGrade = "you failed"
}else if(nGrade >= 90){
	letterGrade = "A+";
}else{
	letterGrade = "you passed";
}

//output

console.log(letterGrade)
