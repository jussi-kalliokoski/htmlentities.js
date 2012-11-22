(function(context){
	var dict = {
		"<":"&lt;",
		"!":"&#033;",
		"=":"&#061;",
		'"':"&quot;",
		"'":"&apos;",
		"/":"&#047;",
		">":"&gt;",
		"&":"&amp;"
	};
	var reverse = {};	for(var p in dict)	reverse[dict[p]] = p;
	
	function encode(str) {
		return str.replace(/[<!="'\/>&]/g,
			function(char) {
                    		return dict[char];
                 	}
		);
	}

	function decode(str) {
		return str.replace(/&(?:#\d+|[a-z]+);/g,
				function(ent) {
					return reverse[ent] || ent;
				}
		);
	}

	context.encode = encode;
	context.decode = decode;

})(this);