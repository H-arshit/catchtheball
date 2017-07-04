	var element = document.getElementById("ball");

	console.log(element);


	element.style.top = '0px';
	element.style.left = '0px';



	var number;


	function move(event)

		{


			var maxheight = document.body.clientHeight;
			var maxwidth = document.body.clientWidth;

			var newtop = Math.random() * maxheight	- 50 ;
			var newleft = Math.random() * maxwidth	- 50 ;



			var oldtop = parseFloat(element.style.top.slice(0,-2));
			var oldleft = parseFloat(element.style.left.slice(0,-2));





			var deltatop =(newtop  - oldtop) / 100.0;
			var deltaleft =(newleft - oldleft) /100.0 ; 



			if (number!=null) {
				clearInterval(number);
			}


			number  = setInterval(function(){ 

			var curtop = parseFloat(element.style.top.slice(0,-2));
			var curleft = parseFloat(element.style.left.slice(0,-2));

			var mod = curtop - newtop;

			if (mod<0) {


					mod = -1 * mod ;

			}


			if (mod<0.1) {
				clearInterval(number);
			}


			element.style.top = (curtop + deltatop ) + "px";
			element.style.left = (curleft + deltaleft ) + "px";




			},6);



		}


	element.addEventListener('mouseover', move);
