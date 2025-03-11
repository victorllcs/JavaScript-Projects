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
    //No lugar do switch, poderia ser usado um array!!
    // const diasSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
    // return diasSemana[diaSemana];

    let diaSemanaTexto

    switch(diaSemana){
        case 0:
            diaSemanaTexto='Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto='Segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto='Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto='Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto='Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto='Sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto='Sábado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto=''
    }
}

function getMesAnoExtenso(mesAno)
{
    let mesAnoExtenso;

    switch(mesAno)
    {
        case 0:
            mesAnoExtenso='Janeiro';
            return mesAnoExtenso;
        case 1:
            mesAnoExtenso='Fevereiro';
            return mesAnoExtenso;
        case 2:
            mesAnoExtenso='Março';
            return mesAnoExtenso;
        case 3:
            mesAnoExtenso='Abril';
            return mesAnoExtenso;
        case 4:
            mesAnoExtenso='Maio';
            return mesAnoExtenso;
        case 5:
            mesAnoExtenso='Junho';
            return mesAnoExtenso;
        case 6:
            mesAnoExtenso='Julho';
            return mesAnoExtenso;
        case 7:
            mesAnoExtenso='Agosto';
            return mesAnoExtenso;
        case 8:
            mesAnoExtenso='Setembro';
            return mesAnoExtenso;
        case 9:
            mesAnoExtenso='Outubro';
            return mesAnoExtenso;
        case 10:
            mesAnoExtenso='Novembro';
            return mesAnoExtenso;
        case 11:
            mesAnoExtenso='Dezembro';
            return mesAnoExtenso;
    }
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