function noreat(arr){
	var i = 0
	len = arr.length
	obj = {}
	result = []
	while(i++<len)
	{
		obj[arr[i]] || result.push(arr[i])
		console.log(obj[arr[i]])
		obj[arr[i]] = true
	}
	return result
}

var arr = [3,3,3,3,4,5,5,6,7,4,3,2]
console.log(noreat(arr))
function(){
	
}