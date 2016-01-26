/**
 * 
 */

function changeImage()
{
	document.getElementById("profilepicture").style.height="35%";
	document.getElementById("profilepicture").style.width="35%";
	return true;
}
function toggleMe(a){
	var e=document.getElementById(a);
	if(!e)return true;
	if(e.style.display=="none"){
	e.style.display="block"
	}
	else{
	e.style.display="none"
	}
	return true;
}
