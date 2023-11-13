function matrix(x, y, z) {
	let result = [];
	for(let i=0; i<x; i++){
		let subarray = [];
		for(let j=0; j<y; j++){
			subarray.push(z);
		}
		result.push(subarray);
	}
	return result;
}