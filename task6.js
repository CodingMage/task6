class Cart {
    constructor() {
        this.item = {}
        this.basket = []
    }
    addItem(itemName, quantity, price, ) {
        // this.item.itemName = itemName
        // this.item.quantity = quantity
        // this.item.price = price
        this.basket.push({
            itemName,
            quantity,
            price
        })
    }


    updateItem(itemName, parameter, value) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].itemName === itemName) {
                if (parameter === 'price') {

                    this.basket[i].price = value
                } else if (parameter === 'quantity') {
                    this.basket[i].quantity = value
                }
            }
        }

    }

    removeItem(itemName, quantity) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].itemName === itemName) {
                if (this.basket[i].quantity < quantity) {
                    console.log('the quantity you inputed is greater than the available');

                } else if (this.basket[i].quantity === quantity) {
                    this.basket.splice(i, 1)
                } else if (this.basket[i].quantity > quantity) {
                    this.basket[i].quantity = this.basket[i].quantity - quantity
                }
            }
        }

    }

    total() {
        let totalprice = 0
        for (let i = 0; i < this.basket.length; i++) {
            totalprice += this.basket[i].price

        }
        return totalprice
    }
}

class Shop extends Cart {
    // constructor() {
    //     // this.addItem
    //     // this.updateItem
    //     // this.removeItem
    //     this.addItem('bag', 3, 56)
    //     this.addItem('phone', 33, 44
    //     }

    checkOut(cash) {
        if (cash >= this.total()) {
            return (cash - this.total())
        } else {
            return false
        }
    }
}


let shop = new Shop()
shop.addItem('bag', 3, 56)
shop.addItem('phone', 33, 44)
console.log(shop.checkOut(130))