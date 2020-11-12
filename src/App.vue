<template>
    <div id="app" class="container mt-5">
        <router-view
            :cart="cart"
            :cartQty="cartQty"
            :cartTotal="cartTotal"
            :maximum.sync="maximum"
            :products="products"
            @delete="deleteItem"
            @add="addItem"
        ></router-view>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    name: "app",
    created: function() {
        axios.get('http://localhost:8080/api/product/')
            .then((response) => {

                this.products = response.data;
                console.log(response.data);
            });
    },
    data: function() {
        return {
            maximum: 99,
            cart: [],
            products: []
        };
    },
    computed: {
        cartTotal: function() {
            let sum = 0;
            for (let key in this.cart) {
                sum = sum + this.cart[key].product.price * this.cart[key].qty;
            }
            return sum;
        },
        cartQty: function() {
            let qty = 0;
            for (let key in this.cart) {
                qty = qty + this.cart[key].qty;
            }
            return qty;
        }
    },
    methods: {
        deleteItem: function(id) {
            if (this.cart[id].qty > 1) {
                this.cart[id].qty--;
            } else {
                this.cart.splice(id, 1);
            }
        },
        addItem: function(product) {
            var whichProduct;
            var existing = this.cart.filter(function(item, index) {
                if (item.product.id == Number(product.id)) {
                    whichProduct = index;
                    return true;
                } else {
                    return false;
                }
            });
            if (existing.length) {
                this.cart[whichProduct].qty++;
            } else {
                this.cart.push({ product: product, qty: 1 });
            }
        }
    }
};
</script>