function url_title(filename) {  
	return title  
		.replace(/\W+/g, ' ')  
		.trim()  
		.split(' ')  
		.slice(0, 5)  
		.join('-')  
		.toLowerCase();  
}  
module.exports = url_title;