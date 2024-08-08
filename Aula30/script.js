function Abas(aba, bot) {
	document.querySelectorAll('section').forEach(x => { x.style.display = 'none'; })
	document.querySelectorAll('.bAba').forEach(x => { x.style.backgroundColor = '#EEE'; x.style.color = '#000'; })
	const ab = document.getElementById(aba);
	aba.style.display = 'block';
	bot.style.backgroundColor = '#444';
	bot.style.color = '#EEE';
}