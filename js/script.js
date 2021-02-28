const txtElement = ['Content Marketer', ' Video Editor', 'Designer','Freelancer'];
let count = 0;
let txIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txIndex = 0;
	}
	setTimeout(ngetik,350);

})();