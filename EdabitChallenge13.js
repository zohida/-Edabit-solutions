function diceGame(arr) {
	let score = 0;
	for (let  i =0; i<arr.length; i++){
		let dice1 = arr[i][0];
		let dice2= arr[i][1];
		
		if(dice1===dice2){
			return 0;
		}
		
		score+= dice1+dice2;
	}
	
	return score
}