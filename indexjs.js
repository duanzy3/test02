function getRabbitNum(num) {
	var result = []
	function fn (n){
		if (n <= 2){
			return 1
		}
		else {
			if(result[n]){
				return result[n];
			}
			else {
				result[n] = arguments.callee(n - 1) + arguments.callee(n -2)
				return result[n];
			}
		}
	}
	fn(num)
	return result;
}

console.log(getRabbitNum(10))
function