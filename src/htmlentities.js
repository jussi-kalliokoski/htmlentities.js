var htmlentities = (function(document){

function encode(str){
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(str));
	str = div.innerHTML;
	div = null;
	return str;
}

encode.decode = function(str){
	var div = document.createElement('div');
	div.innerHTML = str;
	str = div.innerText || div.textContent;
	div = null;
	return str;
};
return (encode.encode = encode);

}(document));
