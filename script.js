// complete the given function
function palindrome(str){
	let arr ='';
	for(let i = str.length-1; i>=0 ; i--){
		let char = str.charAt(i);
		if(/[a-zA-Z]/.test(char)){
			arr += char;
		}
	}
	return arr;

}


module.exports = palindrome
