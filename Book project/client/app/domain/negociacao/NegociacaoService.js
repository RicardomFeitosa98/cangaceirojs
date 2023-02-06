class	NegociacaoService	{
	obterNegociacoesDaSemana(){
        const xhr	= new XMLHttpRequest();
        xhr.open('GET',	'negociacoes/semana');
        xhr.onreadystatechange	=	()	=>	{
            if(xhr.readyState	==	4)	{
                if(xhr.status	==	200)	{
                        JSON
                        .parse(xhr.responseText)
                        .map(objeto	=>	new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                        .forEach(negociacao	=>	this._negociacoes.adiciona(negociacao));
                        this._mensagem.texto	='Negociações importadas com sucesso!';
                }
                else	{
                    console.log(xhr.responseText);
                    this._mensagem.texto = "Não foi possivel obter as negociações da semana"
                        }
            }


        }
        xhr.send()
        }
	}