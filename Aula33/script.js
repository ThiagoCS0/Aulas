const conteudos = [
	[
		"Japão me lembra das japonesas e anime.",
		"Brasil me lembra casa e as novinhas.",
		"China me lembra de kung-fu e estudar até morrer."
	],
	[
		"Portugal me lembra as palavras 'incomuns'.",
		"A Índia me lembra o canal 'Fala de Tudo' (Não veja comendo!)",
		"Africa do Sul me lembra tubarões brancos (da para nadar com eles:gaiola!)"
	],
	[
		"Grécia, lembra cavaleiros do zodiaco",
		"Noruegua me lembra de sol da meia noite (loucura!)",
		"Austrália, me lembra de canguro."
	]
]
const
	btnTab1 = document.getElementById('btn-tab1'),
	btnTab2 = document.getElementById('btn-tab1'),
	btnTab3 = document.getElementById('btn-tab1'),
	content = document.getElementById('content');
function displayContent(itens) {

}
function activateButton(btn) {
	btnTab1.className = btnTab2.className = btnTab3.className = "";
	btn.className = 'active'
}
function handleClick(event) {
	const btnId = event.target.id;
	activateButton(event.target);
	if (btnId == 'btn-tab1') { displayContent(content[0]); }
}
btnTab1.addEventListener('click', handleClick);
btnTab2.addEventListener('click', handleClick);
btnTab3.addEventListener('click', handleClick);