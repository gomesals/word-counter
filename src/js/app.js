(function() {
	'use strict';
	const words = document.getElementById('words');
	const wordCounter = document.getElementById('count-words');
	const charCounterNoSpaces = document.getElementById('count-chars--no-spaces');
	const charCounterSpaces = document.getElementById('count-chars--spaces');
	words.addEventListener('keyup', updateCounter);
	words.addEventListener('keydown', updateCounter);

	function reset() {
		wordCounter.innerText = 0;
		charCounterSpaces.innerText = 0;
		charCounterNoSpaces.innerText = 0;
	}

	function updateCounter() {
		if (words.value.length === 0) {
			reset();
		}
		wordCounter.innerText = words.value.match(/\S+/gim).length;
		charCounterSpaces.innerText = words.value.length;
		charCounterNoSpaces.innerText = words.value.replace(/ /gim, '').length;
	}
})();
