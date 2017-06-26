AgendaController = function () {

    this.agendaService = new AgendaService();

    this.modoEdicao = false;

    //Renderização
    this.renderizarTabelaAgendas = function (arrAgendas) {

        dados = "";
        for (i = 0; i < arrAgendas.length; i++) {
            dados += "<tr>";
            dados += "<td>" + arrAgendas[i].nome + "</td>";
            dados += "<td>" + arrAgendas[i].telefone + "</td>";
            dados += "<td>" + arrAgendas[i].celular + "</td>";
            dados += "<td>" + arrAgendas[i].email + "</td>";
            dados += "<td> <input type='button' value='Excluir' onclick='uc.aoClicarExcluir(" + i + ")'></td>";
            dados += "<td> <input type='button' value='Editar' onclick='uc.aoClicarEditar(" + i + ")'></td>";

            dados += "</tr>";
        }

        document.getElementById("tbAgendas").innerHTML = dados;
    }

    //Eventos dos Botoes
    this.aoClicarSalvar = function () {

        //Leitura dos dados
        nome = document.getElementById("#nome").value;
        telefone = document.getElementById("#telefone").value;
        celular = document.getElementById("#celular").value;
        email = document.getElementById("#email").value;
        //Constroi um objeto usuario
        age = { nome: nome, telefone: telefone, celular:celular, email: email };

        
            //Adiciona no vetor
            //this.agendaService.adicionar(age);
       console.log(age);


    }

    this.aoClicarListar = function () {
        agendas = this.agendaService.buscarTodos();
        this.renderizarTabelaAgendas(agendas);

    }

    
}