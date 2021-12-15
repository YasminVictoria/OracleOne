import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Victoria", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("yasmin", 5000, 12345609611);

const estaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(estaLogado);