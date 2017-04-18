(function() {
    
    var x=getRandomNumber(0, 500);
    var y=getRandomNumber(0, 500);
    var upDownLeftRight='right'
    var distTrav=0
	var canvas;
    var context;
    var size=10;
	var currentLegnthOfLine=1
	var width;
    var height;
        
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        canvas=document.querySelector('canvas');
        context=canvas.getContext('2d');
        width=canvas.width;
        height=canvas.height;        
        window.setInterval(draw, 33);}

    function draw() {
        context.fillStyle='red';
        context.fillRect(x, y, size, size);
        
        if(upDownLeftRight==='right') { 
            distTrav=distTrav + 1
            x=x + size
			
            if (distTrav===currentLegnthOfLine) { 
				upDownLeftRight='down'
				distTrav=0 }}

		else if (upDownLeftRight==='down'){ 
			distTrav=distTrav + 1
			y=y +size
		
			if (distTrav===currentLegnthOfLine){ 
				upDownLeftRight='left'
				distTrav=0
				currentLegnthOfLine=currentLegnthOfLine + 1}}
        
		else if (upDownLeftRight==='left') { //left
			distTrav=distTrav + 1
			x=x - size
        
			if (distTrav===currentLegnthOfLine){ 
				upDownLeftRight='up'
				distTrav=0}}
			
		else { //up
			distTrav=distTrav + 1
			y=y - size
        
			if (distTrav===currentLegnthOfLine) { 
			upDownLeftRight='right'
			distTrav=0
			currentLegnthOfLine=currentLegnthOfLine +1}}}
		
    function getRandomNumber(min, max){
        return Math.round(Math.random() * (max - min)) + min; }

})();