import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        { ID: gera_id(), Nome: "Matheus", Email: "mathhardw@gmail.com", Senha: "123", Data: "1998-08-08", Tipo: 1 },
        { ID: gera_id(), Nome: "Lucas", Email: "lucas@gmail.com", Senha: "123", Data: "1990-08-09", Tipo: 2 },
    ],
};

function gera_id() {
    var size = 10;
    var randomized = Math.ceil(Math.random() * Math.pow(10, size));//Cria um número aleatório do tamanho definido em size.
    var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
    while (digito > 10) {//Pega o digito inicial e vai refinando até ele ficar menor que dez
        digito = Math.ceil(Math.log(digito));
    }
    var id = randomized + '-' + digito;//Cria a ID

    return id;
}

function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, data: [...state.data, action.user] };
        default:
            return state;
    }
}

const store = createStore(users);

export default store;