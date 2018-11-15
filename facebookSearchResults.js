function runScraper(){
	var arr = [];
	var divs = document.getElementsByTagName('div');
	for(i=0; i<divs.length; i++){
		var attr = divs[i].getAttribute('data-testid');
		if(attr == 'browse-result-content'){
			arr.push(divs[i].parentElement.parentElement.innerText);
		}
	}
	console.log(arr);
}

function scroller(){
	window.scrollTo(0, document.body.scrollHeight);
}
setTimeout(()=>{
	scroller();
},555);

var domObserver = new MutationObserver((mChanges, ob)=>{
	var endOfScroll = document.getElementById('browse_end_of_results_footer');
	if(endOfScroll != null){
		runScraper();
		ob.disconnect();
		return;
	}else{
		scroller();
	}
});

domObserver.observe(document, {
	childList: true,
	subtree: true
});
