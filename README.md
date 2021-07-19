Nome: Flávio Vinicius Ribeiro da Silva Data:   16/07/2021

PROCESSO SELETIVO

Conhecimentos Gerais

    1 É possível efetuar a instalação de um sistema feito em c# em uma máquina Linux? Porque?
       
R. Sim, pois basta instalar algum copilador para c# e alguma VM para rodar. 


    2 Onde que pode-se verificar os logs de erros que o Windows captura?
       R. Ferramentas administrativas tem um visualizador de eventos ou logs. 
                       

    3 Qual é o valor para a variável ‘resultado’ na seguinte expressão.
        3.a Var resultado = 10%2;
R. Resto da divisão = 0


    4 Para que serve o “try” e “catch” em programação ?
       R. Tratam as execuções , erros , exceções . 
       
	
    5 Qual a diferença entre Viewstate e Session ?
       R . Session é o periodo de tempo que o usuario fica conectado com a aplicação e viewstate  é um conjunto de informação que monitora as mudanças na pagina 

Questões de Lógica

    6 Faça uma função recursiva em c#, javascript ou jquery para que receba o id de um elemento e retorne seus elementos filhos baseado na tabela abaixo:

ID
NOME
IDPAI
1
OSAS
0
2
TECNOLOGIA
1
3
INFRA
2
4
DESENVOLVIMENTO
2
5
ADMINISTRAÇÃO
1
6
FINANCEIRO
5








let pessoas = [{
        id: 1,
        nome: 'osas',
        idpai: 0
    },
    {
        id: 2,
        nome: 'tecnologia',
        idpai: 1
    },
    {
        id: 3,
        nome: 'infra',
        idpai: 2
    },
    {
        id: 4,
        nome: 'desenvolvimento',
        idpai: 2
    },
    {
        id: 5,
        nome: 'administração',
        idpai: 1
    },
    {
        id: 6,
        nome: 'financeiro',
        idpai: 5
    }
];

function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function(acc, obj) {
        let key = obj[propriedade];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
};

console.log(agruparPor(pessoas, 'idpai'));









    7 Considerando as Tabelas abaixo, faça as seguintes queries:
        7.a Faça um select para retornar todos os usuários que tenham o “nome” iniciado com a letra “W”.
        7.b Faça um select para retornar todos os grupos do usuário que tenha o id = 5.
        7.c Faça a query para realizar um update para atualizar o nome do usuário para “usuário teste” que seu login = “jose”.
        7.d Faça um select para retornar todos os usuários e seus grupos.

SELECT nome FROM tbl_usuario WHERE nome LIKE ‘W%’;

SELECT id_grupo FROM tbl_grupo_usuario WHERE id=5;

UPDATE nome FROM tbl_usuario WHERE login = “jose”;

SELECT * FROM tbl_usuario, tbl_grupo_usuario WHERE id.nome = id_usuario.id_grupo;



TABELAS
TBL_USUARIO
Id
Nome
Login

TBL_GRUPO
Id
Nome

TBL_GRUPO_USUARIO
Id_usuário
Id_grupo

Consumo de API
Objetivo: Listar o total de casos de COVID no Brasil e nos Argentina, por mês. Será disponibilizado uma API Pública que retorna todos os casos dia a dia. API [GET]: 
https://api.covid19api.com/country/brazil/status/confirmed 
https://api.covid19api.com/country/argentina/status/confirmed

Os casos retornados pela API são acumulativos, ou seja, sempre crescente. Será necessário analisar os dados para saber quantos casos ocorreram em cada mês. 
O resultado deverá ser exibido em um grid na tela. 
Será avaliado a qualidade do código implementado, organização, nomenclatura e parte visual (UI).
2) Instruções: 
Parte visual: Poderá ser feita a critério do candidato ( Blazor, MVC, Web Forms, HTML + Javascript, etc). 
Poderá efetuar chamada direto do front, para as APIs, trabalhar os dados e renderizar a tela.
 Deve ser apresentado um dropdown com os países aqui mencionados e um grid abaixo, contendo o mês e o total de casos. 
Ao disparar o evento de change do dropdown, deverá ser renderizado os dados no grid com os valores do país selecionado Poderá ser apresentado da seguinte forma:

País: [DROPDOWN ] 
Total de casos de COVID no [PAIS SELECIONADO], agrupados por mês: 
Mês
Total
Janeiro
0
Fevereiro
500
Março
600
Abril
400

Assim por diante!
Deverá ser entregue a solution Zipada
Boa Prova!!!