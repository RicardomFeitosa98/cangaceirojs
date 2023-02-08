export	class View	{
    /*	código	omitido	*/
        }
class View{

    constructor(seletor){
        this._elemento = document.querySelector(seletor)
    }

    update(model) {
        this._elemento.innerHTML = this.template(model)
    }
    template(model) {
        throw new Error('Voce precisa implementar um template antes')
    }





    }