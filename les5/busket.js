
// let summBusket = {
//     arr: [],

//     init() {
//         this.goodList = document.querySelector('.good_list');
//         this.button = document.querySelector('.button')
//         this.button.addEventListener('click', this.clearCart.bind(this));

//         this.render()
//     },
//     render() {
//         if (this.arr.length) {
//             this.arr.forEach(item => {
//                 this.goodList.insertAdjacentHTML('beforeend', this.itemElem.render(item));
//             });
//             this.goodList.insertAdjacentHTML('beforeend', `В корзине <b>${this.arr.length}</b> товаров стоимостью <b>${this.summ()}</b>`);
//         } else {
//             this.goodList.textContent = 'Корзина пуста';
//         }
//     },

//     summ() {
//         return this.arr.reduce((total, amount) => total + amount.weight * amount.cost, 0);
//     },
//     clearCart() {
//         this.arr = [];
//         this.render();
//     },




// };

// summBusket.init()

let catalog = {

    catalogList: [
        {
            product: "молоко",
            weight: 2,
            cost: 3,
            id: 123,
        },
        {
            product: "сметана",
            weight: 5,
            cost: 1,
            id: 123,
        },
        {
            product: "масло",
            weight: 6,
            cost: 1,
            id: 123,
        },
    ],


    renderCatalog() {
        if (this.catalogList.length) {
            this.catalogBlock.innerHTML = '';
            this.catalogList.forEach(item => {
                this.catalogBlock.insertAdjacentHTML('beforeend', this.itemElem(item));
            });
        }
    },

    itemElem(item) {
        return `
            <div class="busket">
        <p>Наименование: ${item.product}<p>
       <p>Цена за шт: ${item.cost}</p>
        <p>Количество: ${item.weight}</p>
         <button data-id_product="${item.id}" >купить<button></div>`;
    },
    init() {

        this.catalogBlock = document.querySelector('.catalogClass'),
            this.renderCatalog()



    },

}
catalog.init()
