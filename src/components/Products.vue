<template>
    <div>
        <h1>My Store</h1>
        <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
        <product-list :maximum="maximum" :products="products"></product-list>
    </div>
</template>



<script>

import Navbar from "./Navbar.vue";
import ProductList from "./ProductList.vue";

export default {
    name: "products",
    props: [
        "products",
        "maximum",
        "cart",
        "cartQty",
        "cartTotal"
    ],
    components: {
        Navbar,
        ProductList
    }
};
</script>