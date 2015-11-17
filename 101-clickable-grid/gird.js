$(document).ready(function(){
	var i, j, n = 10;
	for (i=0; i < n; i++){
		$('<div id="id' + (i) +'"></div>').addClass('row').appendTo('div#container');
		for (j=0; j < n; j++) {
			$('<div>'+(i*n+j+1)*(i*n+j+1)+'</div>').addClass('gird').appendTo('div#id'+i);
		}
	}		
	$('div.gird').click(function(){
		console.log($(this).text());
	});
});
