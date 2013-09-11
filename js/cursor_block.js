var status_basket = 0;
var basket_y = 0;
var scroll_delta = 0;

/*   анимация меню        */ 
function access_menu_click(current_this, number){
	for(i=0; i<3; i++ )	{
		document.getElementsByClassName("access_menu_li")[i].style.color = "#919a9d";
		document.getElementsByClassName("access_menu_li")[i].style.background = "none";
	}	
	current_this.style.color = "#393939";
	current_this.style.background = "#fff";
	if(number == 1){	
		document.getElementsByClassName("cont_status1")[0].style.display = "block";
		document.getElementsByClassName("cont_status2")[0].style.display = "none";
		document.getElementsByClassName("cont_status3")[0].style.display = "none";		
	}
	if(number == 2){	
		document.getElementsByClassName("cont_status1")[0].style.display = "none";
		document.getElementsByClassName("cont_status2")[0].style.display = "block";
		document.getElementsByClassName("cont_status3")[0].style.display = "none";		
	}
	if(number == 3){	
		document.getElementsByClassName("cont_status1")[0].style.display = "none";
		document.getElementsByClassName("cont_status2")[0].style.display = "none";
		document.getElementsByClassName("cont_status3")[0].style.display = "block";		
	}
}

window.onload = function() {
		if (window.addEventListener) window.addEventListener("DOMMouseScroll", mouse_wheel, false);
			window.onmousewheel = document.onmousewheel = mouse_wheel;

			
document.addEventListener ("MozMousePixelScroll", 
  function() { return false }, false);

document.onkeydown = function(e) {
  if (e.keyCode >= 33 && e.keyCode <= 40) return false;
}
			
		}
	
var mouse_wheel = function(event) {
	if(status_basket == 1){
		if (false == !!event) event = window.event;
		var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;    
		
		/*tmp -= direction/2;
		if (tmp < 0)
			tmp=0;
		if (tmp > 96 && document.getElementsByClassName("container_center")[0].offsetWidth > 880)
			tmp=96;  	
	/*	document.getElementsByClassName("screen1")[0].style.top = tmp*20+"px";     */
		/*window.scrollBy(0, -direction*40);*/
		/*tmp = -br.top/30;*/
		if(direction > 0)
			scroll_delta += 40;
		if(direction < 0)
			scroll_delta -= 40;
		timer_scroll = setTimeout(function() {scroll_basket()}, 40);
		/*document.getElementsByClassName("access_basket_body")[0].style.top=-50+"px";*/
		
		/*$('body').style.position: "fixed";*/
		event.returnValue = false;
			/*	if(direction < 0)
					$('body').top = 626;	*/
	}
} 	

/* затемнение корзины */
function open_basket(){
	document.getElementsByClassName("access_basket_blank")[0].style.display = "block";
	status_basket=1;
}

function js_basket_close(){
	document.getElementsByClassName("access_basket_blank")[0].style.display = "none";
	status_basket=0;
}


function scroll_basket(){
	if(scroll_delta < 0){
		basket_y -= 4;
		scroll_delta += 4;		
		
		if(scroll_delta == 0 || document.getElementsByClassName("access_basket_body")[0].offsetHeight - window.innerHeight + basket_y < -200){
			clearInterval(timer_scroll);
			scroll_delta = 0;
			return 0;			
		}
		document.getElementsByClassName("access_basket_body")[0].style.top=basket_y+"px";
	}
	
	if(scroll_delta > 0){
		basket_y += 4;
		scroll_delta -= 4;
		
		if(scroll_delta == 0 || document.getElementsByClassName("access_basket_body")[0].offsetTop > 100){
			clearInterval(timer_scroll);
			scroll_delta = 0;
			return 0;
		}
		document.getElementsByClassName("access_basket_body")[0].style.top=basket_y+"px";
	
	}
	
	setTimeout(function() {scroll_basket()}, 10);
}