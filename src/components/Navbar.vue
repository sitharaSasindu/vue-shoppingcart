<template>
    <nav class="navbar navbar-light fixed-top">
        <div class="navbar-text ml-auto d-flex">
            <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
<!--                <font-awesome-icon icon="dollar-sign"></font-awesome-icon>-->
            </button>
            <div class="dropdown ml-2" v-if="cart.length>0">
                <button
                    class="btn btn-success btn-sm dropdown-toggle"
                    id="cartDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span class="badge badge-pill badge-light mr-3">{{cartQty}}</span>
                    <font-awesome-icon icon="shopping-cart" class="mr-3"></font-awesome-icon>
                    <price :value="Number(cartTotal)"></price>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cartDropdown">
                    <div v-for="(item, index) in cart" :key="index">
                        <div class="dropdown-item-text text-nowrap text-right">
                            <span
                                class="badge badge-pill badge-warning align-text-top mr-1"
                            >{{item.qty}}</span>
                            {{item.product.productName}}
                            <b>
                                <price :value="Number(item.qty * item.product.priceOfCarton)"></price>
                            </b>
                            <a
                                href="#"
                                @click.stop="$parent.$emit('delete',index)"
                                class="badge badge-danger text-white"
                            >-</a>
                        </div>
                    </div>
                    <router-link class="btn btn-sm btn-outline-info text-dark float-right mr-4 mt-2" to="checkout">Checkout</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Price from "./Price";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    name: "navbar",
    props: ["cart", "cartQty", "cartTotal"],
    components: {
        Price,
        FontAwesomeIcon
    }
};
</script>

<style scoped>
</style>