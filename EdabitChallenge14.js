function rps(p1, p2) {
	if(p1===p2){
		return "It's a draw"
	}else if ((p1==="Rock" && p2==="Scissors") || (p1==="Paper" && p2==="Rock") || (p1==="Scissors" && p2==="Paper")){
		return "The winner is p1"
	}else {
		return "The winner is p2"
	}
	
}