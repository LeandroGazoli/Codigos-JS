
	var letra 
	// var codigo = '58L3-3F56-RRH4D-3FKP-'+ match.ramdom 

function makeid(length) {
   var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
for (var x = 0; x < 10; x++) {
	var y = '58L3-3F56-RRH4D-3FKP-'+x+'LBD'
	document.write(y);
	document.write('<br>')
}


