var tmp = 0;
var current_scroll=0;

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

    if (false == !!event) event = window.event;
    var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;    
	
	tmp -= direction/2;
	if (tmp < 0)
		tmp=0;
	
/*	document.getElementsByClassName("screen1")[0].style.top = tmp*20+"px";     */
	/*window.scrollBy(0, -direction*120);*/
	$('html,body').animate ({scrollTop: tmp*70}, 90);
	
	
	
	event.returnValue = false;
			if(direction < 0)
				$('body').top = 626;	
} 	

window.onscroll = function fixed_menu(elem) {
		var br=container.getBoundingClientRect()
		document.getElementsByClassName("tmp")[0].innerHTML = -br.top;
		
		/*document.getElementsByClassName("screen1_coffe_machine")[0].style.top=100+"px";	*/
		if ((-br.top >  100) && (-br.top <  600))
		{
			if(-br.top > 170)
			{
				document.getElementsByClassName("screen1_coffe_machine")[0].style.left=br.top+170+"px";					
			}
			if(-br.top > 130)
			{
				document.getElementById('scr1_coffe').style.top=(br.top+130)*2+492+"px";
				/*document.getElementById('scr1_coffe_shadow')[0].style.opacity = 0;			*/
				document.getElementsByClassName("scr2_coffe")[0].style.top=-20+(-br.top-130)/20+"%";	
			}
			
			
			
			if(-br.top > 150)
			{
				document.getElementsByClassName("scr2_left_txt")[0].style.left=-60+(-br.top-150)/5+"%";	
				document.getElementsByClassName("scr2_right_txt")[0].style.left=+60+(br.top+150)/5+"%";	
				document.getElementsByClassName("scr2_right_txt")[0].style.opacity= 1;
				
				if (-50+(-br.top-150)/5 > 0){					
					document.getElementsByClassName("scr2_left_txt")[0].style.left=0+"%";	
					document.getElementsByClassName("scr2_right_txt")[0].style.left=0+"%";	
				}
			}
			if(-br.top > 430){
				document.getElementsByClassName("scr2_txt12")[0].style.opacity= 0+(-br.top-430)/150;
				document.getElementsByClassName("scr2_txt13")[0].style.opacity= 0+(-br.top-430)/150;
				document.getElementsByClassName("scr2_txt14")[0].style.opacity= 0+(-br.top-430)/150;
				document.getElementsByClassName("scr2_arrow")[0].style.opacity= 0+(-br.top-430)/150;
				
				document.getElementsByClassName("scr2_coffe_machine2")[0].style.left=136+(br.top+430)/3+"%";	
			}			
		}	
		/* SCREEN 3 UL*/
			if(-br.top > 950){
				document.getElementsByClassName("scr3_property_li")[0].style.left=-300+(-br.top-950)*3+"px";			
				if(-300+(-br.top-950)*3 > 0)
					document.getElementsByClassName("scr3_property_li")[0].style.left=0+"px";					
			}
			if(-br.top > 1020){
				document.getElementsByClassName("scr3_property_li")[1].style.left=-300+(-br.top-1020)*3+"px";			
				if(-300+(-br.top-1020)*3 > 0)
					document.getElementsByClassName("scr3_property_li")[1].style.left=0+"px";					
			}
			if(-br.top > 1090){						
				document.getElementsByClassName("scr3_property_li")[2].style.left=-300+(-br.top-1090)*3+"px";	
				document.getElementsByClassName("scr3_coffe1")[0].style.top=262-(-br.top-1090)*0.09+"px";	
				document.getElementsByClassName("scr3_coffe2")[0].style.top=262+(-br.top-1090)*0.09+"px";	
				if(-br.top > 1190){	
					document.getElementsByClassName("scr3_property_li")[2].style.left=0+"px";	
				}
				if(-br.top > 1290){	
					document.getElementsByClassName("scr3_coffe1")[0].style.top=244+"px";	
					document.getElementsByClassName("scr3_coffe2")[0].style.top=280+"px";
				}
				/*if((-300+(-br.top-1090)*3 > 0) && (current_scroll > 1300)){
					
					document.getElementsByClassName("scr3_property_li")[2].style.left=0+"px";					
				}*/
			}
		
		
		
		
		
		
		
		
		
		
		
		current_scroll = -br.top;	
			
}