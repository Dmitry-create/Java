
let summBusket = {

    arr: [
        {
            product: "молоко",
            weight: 2,
            cost: 3,
        },
        {
            product: "сметана",
            weight: 5,
            cost: 1,
        },
        {
            product: "масло",
            weight: 6,
            cost: 1,
        }
    ],
    init() {
        this.goodList = document.querySelector('.good_list');
        document.querySelector('.button').addEventListener('click', this.clearCart.bind(this));

        this.render()
    },
    render() {
        if (this.arr.length) {
            this.arr.forEach(item => {
                this.goodList.insertAdjacentHTML('beforeend', this.itemElem.render(item));
            });
            this.goodList.insertAdjacentHTML('beforeend', `В корзине <b>${this.arr.length}</b> товаров стоимостью <b>${this.summ()}</b>`);
        } else {
            this.goodList.textContent = 'Корзина пуста';
        }
    },
    itemElem: {
        render(arr) {
            return `<div class="busket">
        <div><b>Наименование</b>: ${arr.product}</div>
        <div><b>Цена за шт.</b>: ${arr.cost}</div>
        <div><b>Количество</b>: ${arr.weight}</div>
    </div>`;
        }
    },
    summ() {
        return this.arr.reduce((total, amount) => total + amount.weight * amount.cost, 0);
    },
    clearCart() {
        this.arr = [];
        this.render();
    },
};
summBusket.init()
