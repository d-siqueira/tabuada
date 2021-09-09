export function gerarSequencia(valorMaximo: number): number[] {
    let chavesSequencia = Array(valorMaximo).keys();
    let sequencia = Array.from(chavesSequencia, e => e + 1);
    return sequencia;
};