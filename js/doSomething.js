function doSomething(length){
	
	var start = new Date().getTime() ;
	while((new Date().getTime() - start) < 1000 * length){}
}

doSomething(3) ;