var tmp = 0;
var current_scroll=0;
var scr5_x = 0;
var home_status = 0;
var slider_revers=1;
var slider_x = 0;
var br_top = 0;
var scroll_delta = 0;

window.onload = function() {
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
	if	(document.getElementsByClassName("container_center")[0].offsetWidth > 880)
		slider_timet=setTimeout(function() {slider_timer()}, 1000);
	$('html,body').animate ({scrollTop: 0}, 10);
	document.getElementById('scr1_coffe').style.top=492+"px";
	document.getElementById('scr1_coffe_shadow').style.opacity = 1;	
	document.getElementsByClassName("screen1_coffe_machine")[0].style.left=0+"px";	
	tmp = 0;
	if (window.addEventListener) window.addEventListener("DOMMouseScroll", mouse_wheel, false);
		window.onmousewheel = document.onmousewheel = mouse_wheel;

				
	/*document.addEventListener ("MozMousePixelScroll", 
	  function() { return false }, false);    */

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
/*	if (tmp > 115 && document.getElementsByClassName("container_center")[0].offsetWidth > 880)
		tmp=115;  	
	document.getElementsByClassName("screen1")[0].style.top = tmp*20+"px";     */
	/*window.scrollBy(0, -direction*40);*/
	
	/*$('html,body').animate ({scrollTop: tmp*30}, 30);
	/*window.scrollTo(0, 450);*/
	scroll_delta = 30;
	scroll_timer=setTimeout(function() {js_main_scroll(direction)}, 10);
	event.returnValue = false;
			/*if(direction < 0)
				$('body').top = 626;*/
} 	

function js_main_scroll(scroll_flag){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scroll_flag > 0 && scroll_delta > 0){
		window.scrollTo(0, scrollTop - 5);
		scroll_delta -= 2;
	}
	if(scroll_flag < 0 && scroll_delta > 0){
		window.scrollTo(0, scrollTop + 5);
		scroll_delta -= 2;
	}
	clearInterval(scroll_timer);
	if (scroll_delta != 0)
		scroll_timer=setTimeout(function() {js_main_scroll(scroll_flag)}, 10);	
	return 0; 
}

window.onscroll = function fixed_menu(elem) {
		var br=container.getBoundingClientRect()
		
		document.getElementsByClassName("tmp")[0].innerHTML = -br.top;
		
		if	(document.getElementsByClassName("container_center")[0].offsetWidth > 880){
			/*document.getElementsByClassName("screen1_coffe_machine")[0].style.top=100+"px";	*/
			if ((-br.top >  30) && (-br.top <  700))
			{
				if(-br.top > 30)
				{
					document.getElementsByClassName("screen1_coffe_machine")[0].style.left=br.top+30+"px";					
				}
				if(-br.top > 70)
				{
					document.getElementById('scr1_coffe').style.top=(br.top+70)*2+492+"px";
					document.getElementById('scr1_coffe_shadow').style.opacity = 1 - (-br.top-70)/100;			
					document.getElementsByClassName("scr2_coffe")[0].style.top=-20+(-br.top-7)/25+"%";	
				}
				if(-br.top < 70)
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
					document.getElementsByClassName("scr2_coffe_machine2_shadow")[0].style.left=136+(br.top+430)/3+"%";
					document.getElementById("scr2_coffe2").style.left=-42-(br.top+430)/3+"%";
					document.getElementById("scr2_coffe3").style.left=-74.5-(br.top+430)/2+"%";
					document.getElementById("scr2_coffe2_shadow").style.left=-40-(br.top+430)/3+"%";
					document.getElementById("scr2_coffe3_shadow").style.left=-74-(br.top+430)/2+"%";
					
					
				}	
				if(-br.top > 600){
					document.getElementsByClassName("scr2_txt12")[0].style.opacity= 170/150;
					document.getElementsByClassName("scr2_txt13")[0].style.opacity= 170/150;
					document.getElementsByClassName("scr2_txt14")[0].style.opacity= 170/150;
					document.getElementsByClassName("scr2_arrow")[0].style.opacity= 170/150;
					
					document.getElementsByClassName("scr2_coffe_machine2")[0].style.left=136+(-600+430)/3+"%";
					document.getElementsByClassName("scr2_coffe_machine2_shadow")[0].style.left=136+(-600+430)/3+"%";
					document.getElementById("scr2_coffe2").style.left=-42-(-600+430)/3+"%";
					document.getElementById("scr2_coffe3").style.left=-74.5-(-600+430)/2+"%";
					document.getElementById("scr2_coffe2_shadow").style.left= 17+"%";
					document.getElementById("scr2_coffe3_shadow").style.left=-74-(-600+430)/2+"%";
					
					
				}	
			}	
			/* SCREEN 3 UL*/			
				if(-br.top > 950){
					document.getElementsByClassName("scr3_property_li")[0].style.left=-300+(-br.top-950)*3+"px";
					document.getElementsByClassName("scr3_italy")[0].style.right=-300+(-br.top-950)*3+"px";
					
					document.getElementsByClassName("scr3_coffe1")[0].style.top=262-(-br.top-950)*0.27+"px";	
					document.getElementsByClassName("scr3_coffe2")[0].style.top=262+(-br.top-950)*0.27+"px";
					if(-br.top > 1090){	
						document.getElementsByClassName("scr3_coffe1")[0].style.top=224+"px";	
						document.getElementsByClassName("scr3_coffe2")[0].style.top=300+"px";
					}
					
					if(-300+(-br.top-950)*3 > 80)
						document.getElementsByClassName("scr3_italy")[0].style.right=8+"%";
					if(-300+(-br.top-950)*3 > 0)
						document.getElementsByClassName("scr3_property_li")[0].style.left=0+"px";					
				}
				if(-br.top > 1020){
					document.getElementsByClassName("scr3_property_li")[1].style.left=-300+(-br.top-1020)*3+"px";			
					if(-300+(-br.top-1020)*3 > 0)
						document.getElementsByClassName("scr3_property_li")[1].style.left=0+"px";					
				}
				if(-br.top < 1090){	
					document.getElementsByClassName("scr3_property_li")[2].style.display="none";						
				}
				if(-br.top > 1090){		
					document.getElementsByClassName("scr3_property_li")[2].style.display="block";	
					document.getElementsByClassName("scr3_property_li")[2].style.left=-300+(-br.top-1090)*3+"px";	
					document.getElementsByClassName("scr3_673")[0].style.right=-300+(-br.top-1090)*3.3+"px";
					
					
					if(-br.top > 1190){	
						document.getElementsByClassName("scr3_property_li")[2].style.left=0+"px";	
						document.getElementsByClassName("scr3_673")[0].style.right=5+"%";
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
						scr5_timet=setTimeout(function() {scr5_animation()}, 400);
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
		document.getElementsByClassName("btn_order")[0].style.display="block";	
		clearInterval(scr5_timet);
		return 0; 
	}
}

function office_slide(){	
	/*document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1.png)";*/
	clearInterval(slider_timet);
	if(slider_revers == 0){
		slider_timet=setTimeout(function() {slider_timer()}, 40);
		document.getElementById("scr1_btn_home").style.backgroundImage= "url(img/scr1_home.png)";
		document.getElementById("scr1_btn_office").style.backgroundImage= "none";
		document.getElementsByClassName("screen1_txt3")[0].innerHTML = "в Вашем офисе!";
	}
}

function home_slide(){
	/*document.getElementsByClassName("screen1")[0].style.backgroundImage= "url(img/screen1_1.png)";*/
	clearInterval(slider_timet);
	if(slider_revers == 1){
		slider_timet=setTimeout(function() {slider_timer()}, 40);
		document.getElementById("scr1_btn_office").style.backgroundImage= "url(img/scr1_office.png)";
		document.getElementById("scr1_btn_home").style.backgroundImage= "none";
		document.getElementsByClassName("screen1_txt3")[0].innerHTML = "у Вас дома!";
	}
}


function slider_timer(){
	if(slider_revers  == 1){
		slider_x +=4;
		document.getElementsByClassName("screen1")[0].style.backgroundPosition= slider_x+"%";		
	}
	else{
		slider_x -=4;
		document.getElementsByClassName("screen1")[0].style.backgroundPosition= slider_x+"%";
	}
	
	if(slider_x == 100){
		clearInterval(slider_timet);
		slider_revers  = 0;
		document.getElementById("scr1_btn_office").style.backgroundImage= "url(img/scr1_office.png)";
		document.getElementById("scr1_btn_home").style.backgroundImage= "none";
		document.getElementsByClassName("screen1_txt3")[0].innerHTML = "у Вас дома!";
		if	(document.getElementsByClassName("container_center")[0].offsetWidth > 880)
			slider_timet=setTimeout(function() {slider_timer()}, 5000);
		return 0;
	}
	if(slider_x == 0){
		clearInterval(slider_timet);
		slider_revers  = 1;
		document.getElementById("scr1_btn_home").style.backgroundImage= "url(img/scr1_home.png)";
		document.getElementById("scr1_btn_office").style.backgroundImage= "none";
		document.getElementsByClassName("screen1_txt3")[0].innerHTML = "в Вашем офисе!";
		if	(document.getElementsByClassName("container_center")[0].offsetWidth > 880)
			slider_timet=setTimeout(function() {slider_timer()}, 5000);
		return 0;
		
	}
	setTimeout(function() {slider_timer()}, 10);
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