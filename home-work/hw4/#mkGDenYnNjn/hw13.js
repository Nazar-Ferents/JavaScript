


function exchange(sumUAH,currencyValues,exchangeCurrency,) {

    for (let i of currencyValues){

         if (exchangeCurrency === i.currency){
             let result = sumUAH / i.value;
             return result + ' ' + exchangeCurrency;
         }



    }
    return 'Currency not found';



}




console.log(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'USD'))
console.log(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'EUR'))