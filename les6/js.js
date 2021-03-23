

let catalog = {
    catalogBlock: null,
    summBusket: {},
    catalogList: [
        {
            product: "молоко",
            cost: 3,
            id: 121,
        },
        {
            product: "сметана",
            cost: 5,
            id: 122,
        },
        {
            product: "масло",
            cost: 7,
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
         <button data-id_product="${item.id}" >купить<button></div>`;
    },
    init(catalogBlock) {
        this.summBusket = summBusket;
        this.catalogBlock = document.querySelector('.catalogClass');
        this.renderCatalog();
        this.eventGoodsCatalog();
    },
    eventGoodsCatalog() {
        this.catalogBlock.addEventListener('click', event => this.addBusket(event))
    },
    addBusket(event) {
        const id = +event.target.dataset.id_product;
        const addProduct = this.catalogList.find((product) => product.id === id);
        this.summBusket.addBusket(addProduct);
    }
}

let summBusket = {
    arr: [],

    init(goodList, button) {
        this.goodList = document.querySelector('.good_list');
        this.button = document.querySelector('.button')
        this.button.addEventListener('click', this.clearCart.bind(this));

        this.render()
    },
    addBusket(product) {
        if (product) {
            const findInBasket = this.arr.find(({ id }) => product.id === id);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.arr.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    render() {
        if (this.arr.length) {
            this.goodList.innerHTML = '';
            this.arr.forEach(item => {
                this.goodList.insertAdjacentHTML('beforeend', this.renderItemElem(item));
            });

            this.goodList.insertAdjacentHTML('beforeend', `В корзине <b>${this.arr.length}</b> товаров стоимостью <b>${this.summ()}</b>`);
        } else {
            this.goodList.textContent = 'Корзина пуста';
        }
    },

    summ() {
        return this.arr.reduce((total, amount) => total + amount.quantity * amount.cost, 0);
    },
    clearCart() {
        this.arr = [];
        this.render();
    },

    renderItemElem(item) {
        return `<div>
                <h3>${item.product}</h3>
                <p>${item.cost} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },


};


catalog.init('catalogClass', summBusket)
summBusket.init('.good_list', 'button')