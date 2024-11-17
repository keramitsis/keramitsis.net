document.addEventListener('DOMContentLoaded', function () {

	// cursor follow , without konami break, has body variable
	const MathUtils={lineEq:(e,s,t,i,o)=>{const l=(e-s)/(t-i);return l*o+(s-l*i)},lerp:(e,s,t)=>(1-t)*e+t*s,getRandomFloat:(e,s)=>(Math.random()*(s-e)+e).toFixed(2)},body=document.body,docEl=document.documentElement;let winsize;const calcWinsize=()=>winsize={width:window.innerWidth,height:window.innerHeight};calcWinsize(),window.addEventListener("resize",calcWinsize);const getMousePos=s=>{let t=0,i=0;return s||(e=window.event),s.pageX||s.pageY?(t=s.pageX,i=s.pageY):(s.clientX||s.clientY)&&(t=s.clientX+body.scrollLeft+docEl.scrollLeft,i=s.clientY+body.scrollTop+docEl.scrollTop),{x:t,y:i}};let mousepos={x:winsize.width/2,y:winsize.height/2};window.addEventListener("mousemove",e=>mousepos=getMousePos(e));class Cursor{constructor(e){this.DOM={el:e},this.DOM.circle=this.DOM.el.querySelector(".cursor__inner--circle"),this.bounds=this.DOM.circle.getBoundingClientRect(),this.lastMousePos={x:0,y:0},this.scale=1,this.lastScale=1,this.lastY=0,requestAnimationFrame(()=>this.render())}render(){this.lastMousePos.x=MathUtils.lerp(this.lastMousePos.x,mousepos.x-this.bounds.width/2,.15),this.lastMousePos.y=MathUtils.lerp(this.lastMousePos.y,mousepos.y-this.bounds.height/2,.15),this.direction=this.lastY-mousepos.y>0?"up":"down",this.lastScale=MathUtils.lerp(this.lastScale,this.scale,.15),this.DOM.circle.style.transform=`translateX(${this.lastMousePos.x}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`,this.lastY=mousepos.y,requestAnimationFrame(()=>this.render())}enter(){this.scale=2.1}leave(){this.scale=1}click(){this.lastScale=.4}}const cursor=new Cursor(document.querySelector(".cursor"));[...document.querySelectorAll("a")].forEach(e=>{e.addEventListener("mouseenter",()=>cursor.enter()),e.addEventListener("mouseleave",()=>cursor.leave())}),document.addEventListener("click",()=>cursor.click())
	
	document.getElementsByTagName("span")[0].innerHTML = "ten.sistim@reKsotsirhC";
	document.getElementsByTagName("html")[0].className = "js";

	console.log('%c Konami Code ... ', 'background: #222; color: lime; font-weight: bold; font-size: 20px;');
	let allowedKeys = {37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
	let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
	let audio = new Audio('audio/achievment_02.mp3');
	let konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {
		let key = allowedKeys[e.keyCode];
		let requiredKey = konamiCode[konamiCodePosition];

		if (key == requiredKey) {
			konamiCodePosition++;
			if (konamiCodePosition === konamiCode.length) {
				activateCheats(body);
				konamiCodePosition = 0;
			}
		} else {
			konamiCodePosition = 0;
		}
	});

	window.addEventListener("click", confettiClick);

}, false); // DOM ready

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
	let dec = "";
	let len = enc.length;
	for (let i = 0; i < len; i++) {
		let n = enc.charCodeAt(i);
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

function activateCheats(body) {
	let audio = new Audio('audio/achievment_02.mp3');
	audio.play();
	body.classList.add('speed');
	console.log('%c Konami Code ACTIVE ', 'background: #222; color: lime; font-weight: bold; font-size: 20px;');
}

function confettiClick(e) {	
	let wp = e.x / window.innerWidth;
	let hp = e.y / window.innerHeight;
	confetti({
		particleCount: 96,
		startVelocity: 36,
		spread: 360,
		gravity: -.4,
		ticks: 50,
		scalar: .4,
		colors: ['#e17ab3', '#1af4e2'],
		origin: {
			x: wp,
			y: hp
		}
	});
}
