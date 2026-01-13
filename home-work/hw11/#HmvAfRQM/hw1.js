

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObject => {
        let {carts} = cartsObject;
        console.log(carts);

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main_div');
        document.body.appendChild(mainDiv);

        for (let cart of carts) {
            let cart_div = document.createElement('div');
            cart_div.classList.add('cart_div');
            let infoDiv = document.createElement('div');
            infoDiv.classList.add('info_div');
            infoDiv.innerText =
                `
                discountedTotal: ${cart.discountedTotal}    
                id: ${cart.id}    
                total: ${cart.total}   
                totalProducts: ${cart.totalProducts}    
                totalQuantity: ${cart.totalQuantity}    
                userId: ${cart.userId}
            `;

            let ol = document.createElement('ol');


            for (let product of cart.products) {

                const li = document.createElement('li');
                const info = document.createElement('p');
                info.innerText =
                    `
                    "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal},
                `
                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img,info);
                ol.append(li);



            }

            cart_div.append(infoDiv,ol)
            mainDiv.appendChild(cart_div)





        }


        });


