function uniqueSort(arr) {
	let uniqueArr = [...new Set(arr)];
	uniqueArr.sort((a,b) =>a-b);
	return uniqueArr;
}