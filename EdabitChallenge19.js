function calculateLosses(obj) {
	let totalAmount = 0;
	for(let item in obj){
		totalAmount +=obj[item];
	}
	return totalAmount>0
	? totalAmount: "Lucky you!";
}