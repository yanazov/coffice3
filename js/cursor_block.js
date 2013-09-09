function access_menu_click(current_this){
	var i=0;	
	for(i=0; i<3; i++ )
	{
		document.getElementsByClassName("access_menu_li")[i].style.color = "#919a9d";
		document.getElementsByClassName("access_menu_li")[i].style.background = "none";
	}	
	current_this.style.color = "#393939";
	current_this.style.background = "#fff";
}