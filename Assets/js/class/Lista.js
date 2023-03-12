class Lista {
    //Variaveis
    lista;

    constructor(){
        this.lista = new Array();
    }

    add(item){
        this.lista.push(item);
    }
    
    remove(posicao){
        this.lista = this.lista.filter((item) => item.codigo != posicao);
    }

    total(){
        const total = this.lista.reduce((acumulador, item) => acumulador + Number(item.valor) * Number(item.quantidade), 0);
        return total.toFixed(2);
    }
}

export default Lista;