var status_basket = 0;
var status_registr = 0;
var basket_y = 0;
var scroll_delta = 0;
var scroll_delta2 = 0;

/*   анимация меню        */ 
function access_menu_click(current_this, number){
	for(i=0; i<3; i++ )	{
		document.getElementsByClassName("access_menu_li")[i].style.color = "#919a9d";
		document.getElementsByClassName("access_menu_li")[i].style.background = "none";
		document.getElementsByClassName("access_menu_li")[i].style.cursor = "pointer";
		
	}	
	current_this.style.color = "#393939";
	current_this.style.background = "#fff";
	current_this.style.cursor = "default";
	
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

			
		/*document.addEventListener ("MozMousePixelScroll", function() { return false }, false);   */
		
		
		document.onkeydown = function(e) {
		  if (e.keyCode >= 33 && e.keyCode <= 40) return false;
		}
					
		}
	
var mouse_wheel = function(event) {
	event = event || window.event;
	if(status_basket == 1){
		if (false == !!event) event = window.event;
		var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;    
		
		if(direction > 0)
			scroll_delta += 40;
		if(direction < 0)
			scroll_delta -= 40;
		timer_scroll = setTimeout(function() {scroll_basket()}, 40);
		event.returnValue = false;
	}	
	if(status_registr == 1){
		if (false == !!event) event = window.event;
		var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;    
		
		if(direction > 0)
			scroll_delta2 += 40;
		if(direction < 0)
			scroll_delta2 -= 40;
		timer_scroll = setTimeout(function() {scroll_registr()}, 40);
		event.returnValue = false;
	}	
/*  ============================ скрол селекта  ==========================================  */		
	var t = event.target || event.srcElement;
		if((t.className == "option_select" || t.className == "option_select check") && direction < 0)
			document.getElementsByClassName("options")[0].scrollTop = parseInt(document.getElementsByClassName("options")[0].scrollTop)+20;
		if((t.className == "option_select" || t.className == "option_select check") && direction > 0)
			document.getElementsByClassName("options")[0].scrollTop = parseInt(document.getElementsByClassName("options")[0].scrollTop)-20;
		
		
	
} 	

/* затемнение корзины */
function open_basket(){
/*   *************************            для IE     ********************************               */
	if(document.getElementsByClassName == undefined) { 
	   document.getElementsByClassName = function(cl) { 
		  var retnode = []; 
		  var myclass = new RegExp('\\b'+cl+'\\b'); 
		  var elem = this.getElementsByTagName('*'); 
		  for (var i = 0; i < elem.length; i++) { 
			 var classes = elem[i].className; 
			 if (myclass.test(classes)) { 
				retnode.push(elem[i]); 
			 } 
		  } 
		  return retnode; 
	   } 
	}; 
	document.getElementsByClassName("access_basket_blank")[0].style.display = "block";
	document.getElementsByClassName("access_basket_body")[0].style.display = "inline-block";
	status_basket=1;
}

function js_basket_close(){
	document.getElementsByClassName("access_basket_blank")[0].style.display = "none";
	status_basket=0;
	basket_y = 0;
	document.getElementsByClassName("access_basket_body")[0].style.top=basket_y+"px";
	document.getElementsByClassName("access_basket_body")[0].style.display = "none";
	document.getElementsByClassName("access_order_registr")[0].style.display = "none";
}

function js_basket_item_close(number){
	document.getElementsByClassName("basket_item_info")[number-1].style.display = "none";
}

function js_basket_close_fon(event) {
  // получить объект событие
  event = event || window.event
  var t = event.target || event.srcElement
  /*alert(t.className) */
  if(t.className == "access_basket_blank")
     js_basket_close();
 }

function js_access_order_registr(){
	document.getElementsByClassName("access_basket_body")[0].style.display = "none";
	document.getElementsByClassName("access_order_registr")[0].style.display = "inline-block";
	status_registr = 1;
	status_basket=0;
	clearInterval(timer_scroll);
	basket_y = 0;
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
	clearInterval(timer_scroll);
	timer_scroll = setTimeout(function() {scroll_basket()}, 10);
}

function scroll_registr(){
	if(scroll_delta2 < 0){
		basket_y -= 4;
		scroll_delta2 += 4;			
		if(scroll_delta2 == 0 || document.getElementsByClassName("access_order_registr")[0].offsetHeight - window.innerHeight + basket_y < -200){
			clearInterval(timer_scroll);
			scroll_delta2 = 0;
			return 0;			
		}
		document.getElementsByClassName("access_order_registr")[0].style.top=basket_y+"px";
	}	
	if(scroll_delta2 > 0){
		basket_y += 4;
		scroll_delta2 -= 4;
		
		if(scroll_delta2 == 0 || document.getElementsByClassName("access_order_registr")[0].offsetTop > 100){
			clearInterval(timer_scroll);
			scroll_delta2 = 0;
			return 0;
		}
		document.getElementsByClassName("access_order_registr")[0].style.top=basket_y+"px";
	
	}
	clearInterval(timer_scroll);
	timer_scroll = setTimeout(function() {scroll_registr()}, 10);
}

function js_counter_up(number_position){
	var tmp = parseInt(document.getElementsByClassName("basket_counter_value")[number_position-1].value);
	tmp += 1;
	document.getElementsByClassName("basket_counter_value")[number_position-1].value = tmp;
}

function js_counter_dwn(number_position){
	var tmp = parseInt(document.getElementsByClassName("basket_counter_value")[number_position-1].value);
	tmp -= 1;
	if (tmp > -1)
		document.getElementsByClassName("basket_counter_value")[number_position-1].value = tmp;
}