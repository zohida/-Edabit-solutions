//-----------------------------------1-----------------------------------------------------
// function findPerimeter(length, width) {
// 	return (length + width)*2
// }
// console.log(findPerimeter(20,40));

//-----------------------------------2-----------------------------------------------------

// function cubes(a) {
// 	return a ** 3
// }
// console.log(cubes(2));

//-----------------------------------3-----------------------------------------------------

// function binary(decimal) {
//     if (decimal === 0) {
//   return "0";
// }

// let binaryString = "";
// let value = 1;

// while (value <= decimal) {
//   const bit = (decimal & value) ? "1" : "0";
//   binaryString = bit + binaryString;
//   value *= 2;
// }

// return binaryString;
// }

// console.log(binary(100))


//-----------------------------------4-----------------------------------------------------

// function numberSplit(n) {
// 	let half = Math.floor(n/2);
// 	let otherHalf = n - half;
	
// 	if(n%2 ===1){
// 		if(n>0){
// 			otherHalf;
// 		}else{
// 			otherHalf--;
// 		}
// 	}
// 	return [half, otherHalf]
// }


//-----------------------------------5-----------------------------------------------------

//-----------------------------------6-----------------------------------------------------
// function isAvgWhole(arr) {
// 	let sum = 0;
	
// 	for(let i=0; i<arr.length; i++){
// 		sum= `${sum}`+ arr[i];
// 	}
// 	let average = sum/arr.length;
// 	return Number.isInteger(average);
// }

//-----------------------------------7-----------------------------------------------------

// function arrayOfMultiples (num, length) {
// 	let newArray = [];
// 	for(let i=1; i<=length; i++){
// 		newArray.push(num*i)
// 	}
// 	return newArray;
// }

//-----------------------------------8-----------------------------------------------------

// function countOnes(matrix) {
// 	let count = 0;
	
// 	for(let i=0; i<matrix.length; i++){
// 		for(let j=0; j<matrix[i].length; j++){
// 			if(matrix[i][j] ===1){
// 				count++
// 			}
// 		}
// 	}
// 	return count;
// }

//-----------------------------------9-----------------------------------------------------

// function boxSeq(step) {
// 	let boxes = 0;
	
// 	for(let i=1; i<=step; i++){
// 		if(i%2===1){
// 			boxes +=3;
// 		}else{
// 			boxes-=1;
// 		}
// 	}
	
// 	return boxes;
// }

// console.log(boxSeq(5));

//-----------------------------------10-----------------------------------------------------


// function hashPlusCount(str) {
// 	let hashes = 0;
// 	let pluses = 0;
	
// 	for(let i=0; i<str.length; i++){
// 		if (str[i] ==='#'){
// 			hashes++;
// 		}else if (str[i] ==='+'){
// 			pluses++;
// 		}
// 	}
// 	return [hashes, pluses];
// }



