

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        let carts_container = document.createElement('div');
        carts_container.classList.add('carts_container');
        document.body.appendChild(carts_container);
        for (let cart of data.carts) {
            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cart_div');
            carts_container.appendChild(cartDiv);
            for(let key in cart) {
                if (typeof cart[key] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${key}: ${cart[key]}`;
                    cartDiv.appendChild(p)
                }
                else if (typeof cart[key] === 'object') {
                    let divInfo = document.createElement('div');
                    let ol = document.createElement('ol');
                    let pObj = document.createElement('p');
                    pObj.innerText = `${key}:`
                    for (let obj of cart[key]) {
                        for (let objKey in obj) {
                            let li = document.createElement('li');
                            li.innerText = `${objKey}:${obj[objKey]}`;

                            ol.appendChild(li);
                            divInfo.append(pObj,ol)


                        }




                    }
                    cartDiv.append(divInfo);

                }

            }

        }


console.log(data);
        }

    );

