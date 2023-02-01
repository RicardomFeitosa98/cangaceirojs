class	NegociacaoController	{
	adiciona(event)	{
	event.preventDefault();
//	a	ideia	é	que	$	seja	o	querySelector
let	$	=	document.querySelector;
let	inputData	=	$('#data');
let	inputQuantidade	=	$('#quantidade');
let	inputValor	=	$('#valor');
console.log(inputData.value);
console.log(parseInt(inputQuantidade.value));
console.log(parseFloat(inputValor.value));
	}
}