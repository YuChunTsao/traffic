//網頁載入後執行。
window.onload = main();

function GetGeolcation(){
	if(navigator.geolocation){
		//watchPosition ==> 持續回傳用戶移動時的更新位置
		navigator.geolocation.watchPosition(ShowPosition);
	}
	else{
		alert("Geolocation is not supported by this browser.");
	}
}
function ShowPosition(position){
	var latlng = {
		"latitude":position.coords.latitude,
		"longitude":position.coords.longitude
	}
	userLocation = ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]);
	var point() = new Point(map , userLocation);
	//document.write(JSON.stringify(latlng) + "<br>");
	console.log(JSON.stringify(latlng));
}

function main(){
	GetGeolcation();
}
