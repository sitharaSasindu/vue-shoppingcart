<template>
    <transition-group
        name="fade"
        tag="div"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
        <div v-for="(item, index) in products" :key="item.id" :data-index="index">
            <div class="row d-flex mb-1 align-items-center">
                <div class="col-1 m-auto">
                    <button class="btn btn-info" @click="$parent.$emit('add', item)">+</button>
                </div>
                <div class="col-4">
                    <img class="img-fluid d-block" :src="item.productImageURL" :alt="item.productName" />
                </div>
                <div class="col">
                    <h3 class="text-info">{{ item.productName }}</h3>
                    <p class="mb-0" style="font-weight: bold ">Units in Carton : {{ item.numberOfUnitsInCarton }}</p>
                    <p class="mb-0">{{ item.productDescription }}</p>
                    <div class="h5 float-right">
                        <price :value="Number(item.priceOfCarton)"></price>
                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
import Price from "./Price.vue";

export default {
    name: "product-list",

    components: {
        Price
    },

    props: ["products"],

    computed: {},

    methods: {
        beforeEnter: function(el) {
            el.className = "d-none";
        },

        enter: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className =
                    "row d-flex mb-2 align-items-center animate__animated animate__fadeInRight";
            }, delay);
        },

        leave: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className =
                    "row d-flex mb-2 align-items-center animate__animated animate__fadeOutRight";
            }, delay);
        }
    }
};
</script>