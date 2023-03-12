class Item{
    //Variaveis
    nome = "";
    valor = 0;
    quantidade = 0;
    codigo = -1;

    constructor(codigo, nome, valor, quantidade){
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.codigo = codigo;
    }
}

export default Item ;