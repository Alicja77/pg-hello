Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @Alicja77
Sign out
0
0 158 olkastepien/pg-hello
forked from stalj/pg-hello
 Code  Pull requests 0  Projects 0  Wiki  Insights
pg-hello/www/js/pgb.js
f3c1051  2 days ago
@olkastepien olkastepien acc
     
72 lines (54 sloc)  2 KB
function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function daneKon() {
alert ("Aleksandra Stępień");
}

function net() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}

net();

function card() {
	
	d =  'BUSINESS CARD' + '\n' +
			'=====' + '\n' +
			'Aleksandra Stępień' + '\n' +
			'stepien.aleksandra95@gmail.com    '     + '\n' + 
			'www.facebook.com/olkastepien '  + '\n' + 
			'KrDZIS1012 '  + '\n' + 
			'Applied Informatics'     + '\n' ;
			
	navigator.notification.alert(d);
	
}

function motion(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

document.getElementById("Accelerometer").addEventListener("click", navigator.accelerometer.getCurrentAcceleration(motion, onError));
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
