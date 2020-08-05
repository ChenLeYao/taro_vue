function useRem() {
	let deviceWidth = document.body.clientWidth || document.documentElement.clientWidth ;
	let devicePixelRatio = window.devicePixelRatio ;
	let theme = document.getElementById('theme');
	let foot = document.getElementById('foot');
	document.documentElement.style.fontSize = '100px';
	if ( deviceWidth * devicePixelRatio > 751 ){
		theme.style.width= '360px';
		foot.style.width= '360px';
		foot.style.left = 'calc(( 100% - 360px )/2)';
	}
	window.onresize = function(){
		console.log('---尺寸改变---');
		clearTimeout(this.time);
		this.time = setTimeout(function(){
			console.log(document.body.clientWidth);
			console.log(window.devicePixelRatio);
			console.log(document.body.clientWidth * window.devicePixelRatio);
		},500)
	}
}

export default useRem;
