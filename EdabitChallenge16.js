function assignPersonToJob(names, jobs) {
	let result = {};
	for (let i = 0; i<names.length; i++){
		let name = names[i];
		let job = jobs[i];
		
		result[name] = job;
	}
	return result
}
