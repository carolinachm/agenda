AgendaService = function () {
    this.agendas = [];

    //C REATE
    this.adicionar = function (age) {
        this.agendas.push(age);
    }
    //R ETRIEVE
    this.buscarTodos = function () {
        return this.agendas;
    }
    //U PDATE
    this.alterar = function (indice, usu) {
        // alteracao no vetor
        

    }
    //D ELETE
    this.excluir = function (indice) {
        //remover no vetor
        
    }

    
}