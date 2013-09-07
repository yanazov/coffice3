var tmp = 0;
var current_scroll=0;
var scr5_x = 0;
var home_status = 0;

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
	if (tmp > 96)
		tmp=96;  	
/*	document.getElementsByClassName("screen1")[0].style.top = tmp*20+"px";     */
	/*window.scrollBy(0, -direction*40);*/
	$('html,body').animate ({scrollTop: tmp*30}, 30);
	
	event.returnValue = false;
			if(direction < 0)
				$('body').top = 626;	
} 	

window.onscroll = function fixed_menu(elem) {
		var br=container.getBoundingClientRect()
		document.getElementsByClassName("tmp")[0].innerHTML = tmp;
		if	(document.getElementsByClassName("container_center")[0].offsetWidth > 880){
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
					document.getElementById('scr1_coffe_shadow').style.opacity = 1 - (-br.top-130)/100;			
					document.getElementsByClassName("scr2_coffe")[0].style.top=-20+(-br.top-130)/20+"%";	
				}
				if(-br.top < 130)
				{
					document.getElementById('scr1_coffe').style.top=492+"px";
					document.getElementById('scr1_coffe_shadow').style.opacity = 1;	
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
				}
				/*   SCREEN 4  */
				if(-br.top > 1500){	
					document.getElementsByClassName("img_1000")[0].style.left=300-(-br.top-1500)*2+"px";	
					document.getElementsByClassName("img_white_1000")[0].style.left=300-(-br.top-1500)*2+"px";	
					document.getElementsByClassName("img_red_1000")[0].style.left=300-(-br.top-1500)*2+"px";
					document.getElementsByClassName("scr4_new")[0].style.display="none";					
					if(-br.top > 1650){	
						document.getElementsByClassName("img_1000")[0].style.left=0+"px";	
						document.getElementsByClassName("img_white_1000")[0].style.left=0+"px";	
						document.getElementsByClassName("img_red_1000")[0].style.left=0+"px";	
						document.getElementsByClassName("scr4_new")[0].style.display="block";							
					}
				}
				/*    SCREEN 5  */
				if((-br.top > 2300) && (current_scroll < 2405)){
					document.getElementsByClassName("scr5_txt2")[0].style.top=80+(-br.top-2300)*1+"px";	
					document.getElementsByClassName("scr5_txt2")[0].style.display="block";	
				}
				if(-br.top > 2405 && current_scroll < 2465)
				{
					document.getElementsByClassName("scr5_txt2")[0].style.top=185+"px";	
					document.getElementsByClassName("scr5_txt3")[0].style.top=175+(-br.top-2405)*1+"px";	
					document.getElementsByClassName("scr5_txt3")[0].style.display="block";			
				}
				if(-br.top > 2465 && current_scroll < 2522){			
					document.getElementsByClassName("scr5_txt3")[0].style.top=235+"px";	
					document.getElementsByClassName("scr5_txt4")[0].style.top=231+(-br.top-2465)*1+"px";	
					document.getElementsByClassName("scr5_txt4")[0].style.display="block";	
				}
				if(-br.top > 2522 && current_scroll < 2590){		
					document.getElementsByClassName("scr5_txt4")[0].style.top=290+"px";
					document.getElementsByClassName("scr5_txt5")[0].style.top=288+(-br.top-2522)*1+"px";	
					document.getElementsByClassName("scr5_txt5")[0].style.display="block";					
				}
				if(-br.top > 2589){	
					document.getElementsByClassName("scr5_txt5")[0].style.top=355+"px";	
					if (scr5_x == 0){
						/*document.getElementsByClassName("scr5_txt6")[0].style.display="block";	*/
						/*document.getElementsByClassName("scr5_caps")[0].style.display="block";	*/
						scr5_timet=setTimeout(function() {scr5_animation()}, 500);
					}
				}
				/*  begin cap  */
				if((-br.top > 2300) && (current_scroll < 2565)){
					document.getElementsByClassName("scr5_coffe_cap")[0].style.display="block";	
					document.getElementsByClassName("scr5_coffe_cap")[0].style.bottom=-400+(-br.top-2300)*1.5+"px";	
					
				}
				if(-br.top > 2565){
					document.getElementsByClassName("scr5_coffe_cap")[0].style.bottom=0+"px";						
				}				
				/*  end cap   */
				/*  begin coffe  */
				if(-br.top > 2300){
					/*document.getElementsByClassName("scr5_coffes")[0].style.display="block";	*/
					document.getElementsByClassName("scr5_coffes")[0].style.top=-70+(-br.top-2300)*0.2+"px";	
					
				}
				if(-br.top > 2565){
					/*document.getElementsByClassName("scr5_coffes")[0].style.top=0+"px";						*/
				}				
				/*  end coffe   */				
				
			if(-br.top > current_scroll)
				current_scroll = -br.top;

		}		
}

function scr5_animation(){
	document.getElementsByClassName("scr5_txt6")[0].style.opacity= 0+scr5_x/80;	
	document.getElementsByClassName("scr5_caps")[0].style.opacity= 0+scr5_x/80;		
	
	scr5_x+=1;
	setTimeout(function() {scr5_animation()}, 40);
	if(scr5_x > 800){
		/*document.getElementsByClassName("scr5_txt6")[0].style.opacity=0+scr5_x;	
		document.getElementsByClassName("scr5_caps")[0].style.opacity=0+scr5_x;	*/
	}
	if(scr5_x > 120){
		document.getElementsByClassName("scr5_btn")[0].style.display="block";	
		clearInterval(scr5_timet);
		return 0; 
	}
}

function office_slide(){	
	document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1.png)";
	document.getElementById("scr1_btn_home").style.backgroundImage= "url(img/scr1_home.png)";
	document.getElementById("scr1_btn_office").style.backgroundImage= "none";
	document.getElementsByClassName("screen1_txt3")[0].innerHTML = "в Вашем офисе!";
}

function home_slide(){
	document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1.png)";
	document.getElementsByClassName("screen1_txt3")[0].innerHTML = "у Вас дома!";
}


function m_slide(){
	if(home_status > 0){
	document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1.png)";
	document.getElementsByClassName("screen1_txt3")[0].innerHTML = "в Вашем офисе!";
	document.getElementById("scr1_btn_m").innerHTML = "Дом";
	home_status=0;
	}
	else{
		document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1_1.png)";
		document.getElementsByClassName("screen1_txt3")[0].innerHTML = "у Вас дома!";
		document.getElementById("scr1_btn_m").innerHTML = "Офис";
		home_status=1;
	}
}