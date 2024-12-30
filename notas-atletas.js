let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];
function calcularMedia(atletas) {
    atletas.forEach(atleta => {
        let notas = atleta.notas.sort((a, b) => a - b);
        let notasComputadas = notas.slice(1, notas.length - 1);
        let soma = 0;
        notasComputadas.forEach(nota => { soma += nota; });
        let media = soma / notasComputadas.length;
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
        console.log(`Média Válida: ${media}`); console.log("");
    });
}

calcularMedia(atletas);

