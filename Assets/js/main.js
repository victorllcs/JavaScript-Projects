function formatarData(data)
{
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const diaSemana = data.getDay();

    return `${getDiaSemanaExtenso(diaSemana)}, ${dia} de ${getMesAnoExtenso(mes)} de ${ano} ${criaZeroEsquerda(hora)}:${criaZeroEsquerda(minuto)}`;
}

function criaZeroEsquerda(num)
{
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaExtenso(diaSemana)
{
    let diaSemanaTexto

    const diaSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
    return diaSemana[diaSemana];
}

function getMesAnoExtenso(mesAno)
{
    let mesAnoExtenso;

    const mesAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return mesAno[mesAno];
}

const data = new Date();
const dataTexto = formatarData(data)

h1=document.getElementById('principal')

h1.innerHTML = `<p>${formatarData(data)}</p>`;

//Faz a mesma coisa do código acima, porém de forma muito simplificada
// const h1 = document.getElementById('principal')
// const data = new Date();
// const opcoes ={
// dateStyle = 'full'
// timeStyle = 'short'
//};
// h1.innerHTML = data.toLocaleDateString('pt-BR, opcoes);