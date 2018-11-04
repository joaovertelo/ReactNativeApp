// import {
//     CHANGE_VALUE,
//     CADASTRA_USUARIO_ERRO,
//     CADASTRA_USUARIO_SUCESSO,
//     LOGIN_SUCESSO,
//     LOGIN_ERROR
// } from './loginActions'


const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    loginError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return {
                ...state,
                [action.name]: action.payload
            }
        // case CADASTRA_USUARIO_SUCESSO:
        //     return {
        //         ...state,
        //         nome: '', senha: ''
        //     }
        // case LOGIN_SUCESSO:
        //     return {
        //         ...state,
        //         loginError: ''
        //     };
        // case LOGIN_ERROR:
        //     return {
        //         ...state,
        //         loginError: action.payload
        //     }
        default:
            return state
    }

}