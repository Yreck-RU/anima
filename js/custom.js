function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

// Анимация Index block ======================================

/*const inAniItems =  document.querySelectorAll('.in-ani-item');
let inAniItemNamber = 10;
if (inAniItems) {
	alert("k");
	for (let i = 0; i < inAniItems.length; i++) {
		//alert("k5");
		let inAniItem = inAniItems[i];
		inAniItemNamber = inAniItemNamber + 20;
		inAniItem.style.left = `${inAniItemNamber}px`;
	}
}*/


const inAniItems =  document.querySelectorAll('.in-ani-item');
let inAniItemNamber = 0;
if (inAniItems) {
	//alert("k");
	for (let i = 0; i < inAniItems.length; i++) {
		//alert("k5");
		let inAniItem = inAniItems[i];
		let inAniItemDecorTop = inAniItem.querySelector('.in-ani-item__decor_top');
		let inAniItemDecorBottom = inAniItem.querySelector('.in-ani-item__decor_bottom');
		inAniItemNamber = inAniItemNamber + 0.15;
		inAniItem.style.animationDelay = `${inAniItemNamber}s`;
		inAniItemDecorTop.style.animationDelay = `${inAniItemNamber}s`;
		inAniItemDecorBottom.style.animationDelay = `${inAniItemNamber}s`;
		//console.log(inAniItemDecor.childNodes.length);
		//inAniItem.style.animationDelay = `${inAniItemNamber}s`;document.body.childNodes.length
		//inAniItemDecor.childNodes.style.animationDelay = `${inAniItemNamber}s`;
	}
}
//============================================================