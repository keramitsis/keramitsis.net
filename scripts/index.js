document.getElementsByTagName("span")[0].innerHTML = "ten.sistim@reKsotsirhC";
document.getElementsByTagName("html")[0].className = "js";
function iLikeCats(s) {
	location.href = decryptString(s, -1);
}
function decryptCharcode(n, start, end, offset) {
	n = n + offset;
	if (offset > 0 && n > end) {
		n = start + (n - end - 1);
	} else if (offset < 0 && n < start) {
		n = end - (start - n - 1);
	}
	return String.fromCharCode(n);
}
function decryptString(enc, offset) {
	var dec = "";
	var len = enc.length;
	for (var i = 0; i < len; i++) {
		var n = enc.charCodeAt(i);
		if (n >= 0x2b && n <= 0x3a) {
			dec += decryptCharcode(n, 0x2b, 0x3a, offset);
		} else if (n >= 0x40 && n <= 0x5a) {
			dec += decryptCharcode(n, 0x40, 0x5a, offset);
		} else if (n >= 0x61 && n <= 0x7a) {
			dec += decryptCharcode(n, 0x61, 0x7a, offset);
		} else {
			dec += enc.charAt(i);
		}
	}
	return dec;
}
console.log("JavaScript is amazing!");