// metodo n1 adicionei diferente de number caso usuario digite um numero
function verificaPalidromo(string) {
    if(!string || Number) return 'string inexistente';
 // a função split divide uma string em um array de strings de acordo com algum separador
 return string.split("").reverse().join("") === string;
}

// solução  2

function verificaPalidromo2(string) {
    if(!string ) return 'string inexistente';

    for (let i = 0; i < string.length / 2; i ++) {
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }   
    }

    return true;
}

console.log(verificaPalidromo2("omo"))