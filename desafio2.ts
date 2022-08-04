enum Trabalho {
    Programador,
    Eletricista,
    Aposentado
}

type Humano = {
    nome: string,
    idade: number,
    profissao?: Trabalho
}

let pessoa1: Humano = {
    nome: 'Ricardo',
    idade: 54,
    profissao: Trabalho.Aposentado
};

let pessoa2: Humano = {
    nome: 'Carlos',
    idade: 22,
    profissao: Trabalho.Eletricista
};

let pessoa3: Humano = {
    nome: 'Tamires',
    idade: 30
};

let pessoa4: Humano = {
    nome: "Sophia",
    idade: 5,
}