import Funcions from "./Function/outher.js";
import Item from "./class/Item.js";
import Lista from "./class/Lista.js";

const lista = new Lista();

const elementTotal = Funcions.getId("box-total");
const elementInputDesc = Funcions.getId("input-desc");
const elementInputValor = Funcions.getId("input-valor");
const elementInputQuant = Funcions.getId("input-quant");
const elementBtnGravar = Funcions.getId("btn-gravar");
const elementLista = Funcions.getId("lista");

/* Funcoes */
const App = {
    calcularTotal () { 
        elementTotal.innerText = lista.total();
    },
    
    limparCampos () {
        elementInputDesc.value = "";
        elementInputValor.value = "";
        elementInputQuant.value = "";
    },
    
    criaItemHTML (item) {
        
        const tr = document.createElement("tr");
        const tdDesc = document.createElement("td");
        const tdValor = document.createElement("td");
        const tdQuant = document.createElement("td");
        const tdTotal = document.createElement("td");
        const tdBtn = document.createElement("td");
        const btn = document.createElement("button");
        
        tdDesc.innerText = item.nome;
        tdQuant.innerText = Number(item.quantidade).toFixed(2);
        tdValor.innerText = Number(item.valor).toFixed(2);
        tdTotal.innerText = Number(item.valor * item.quantidade).toFixed(2);
        btn.innerText = "Remover";
        btn.onclick = () => App.removeItemLista(item.codigo);

        tdBtn.appendChild(btn);
        tr.appendChild(tdDesc);
        tr.appendChild(tdValor);
        tr.appendChild(tdQuant);
        tr.appendChild(tdTotal);
        tr.appendChild(tdBtn);
        tr.setAttribute('codigolista', item.codigo);
        
        return tr;
    },
    
    updateListaHTML () {
        elementLista.innerText = "";
        lista.lista.forEach((item) => elementLista.appendChild(App.criaItemHTML(item)));
        App.calcularTotal();
        App.limparCampos();
    },
    
    addItemLista (item) {
        lista.add(item);
        App.updateListaHTML();
    },

    removeItemLista(id){
        lista.remove(id);
        App.updateListaHTML();
    },
    
    verificarCampos(desc, quant, valor){
        
        let resultado = true;

        if(desc === ''){
            alert("Descrição dever ser preenchida!");
            resultado = false;
        }else if(quant == 0 || quant == ''){
            alert("Quantidade dever ser preenchida!");
            resultado = false;
        }else if(valor == 0 || valor == ''){
            alert("Valor dever ser preenchida!");
            resultado = false;
        }
        
        return resultado;
    },

    garvarItem () {
        /* Constantes */
        const desc = elementInputDesc.value;
        const valor = elementInputValor.value;
        const quant = elementInputQuant.value;
        const codigo = lista.lista.length;

        // Criando Item
        if(App.verificarCampos(desc, quant, valor)){
            const item = new Item(codigo, desc, valor, quant);
            
            /* Adicionando item na lista */
            App.addItemLista(item);
        }        
    }
}


/*  Adicionando função em avento */
elementBtnGravar.onclick = App.garvarItem;

export default App;