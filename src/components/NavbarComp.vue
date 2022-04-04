<template>
  <div class="block">
    <div class="bg-secondBG">
      <div class="container mx-auto">
        <div class="topbar flex items-center justify-between py-4">
          <div class="bg-white w-max p-2 rounded-md">
            <i class="fas fa-map-marker-alt text-mapIcon"></i>
            <select class="bg-white" name="" id="">
              <option value="">Алматы</option>
              <option value="">Астана</option>
              <option value="">Павлодар</option>
            </select>
          </div>
          <div class="flex bg-or p-2 rounded-md items-center">
            <i class="fas fa-phone text-sm text-grayText"></i>
            <p class="mx-2 text-sm text-grayText">
              Горячая линия с 08:00 до 00:00
            </p>
            <a href="tel:1717">1717</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container mx-auto py-2">
        <div class="flex items-center justify-between">
          <router-link to="/"><h1 class="text-3xl">LOGO</h1></router-link>
          <div
            class="flex items-center bg-mainCol text-white py-2 px-4 rounded-md"
          >
            <i class="fas fa-list-ul mr-3"></i>
            <p class="uppercase text-sm font-semibold">Каталог</p>
          </div>
          <div class="relative w-2/5">
            <input
              type="text"
              class="w-full bg-white text-gray-300 border border-mainCol rounded-lg p-2"
              placeholder="Я хочу найти"
            />
            <i class="fas fa-search search-but"></i>
          </div>
          <div class="flex">
            <div class="text-center mx-3">
              <i class="fas fa-heart"></i>
              <p class="text-grayText">Избранное</p>
            </div>
            <div class="text-center mx-3">
              <i class="fas fa-balance-scale-left"></i>
              <p class="text-grayText">Сравнить</p>
            </div>
            <div class="text-center mx-3 relative">
              <i class="fas fa-shopping-cart"></i>
              <p @click="shoFunc()" class="text-grayText">Корзина</p>
              <div v-if="showCart === 1" class="h-auto bg-white rounded-lg cart">
                <div class="p-4" v-for="products of addedProducts" :key="products">
                  <div class="flex items-center justify-between">
                    <img class="w-12 h-12" :src="products.images[0].first" alt="">
                    <p class="mx-3 text-xs">{{ products.name }}</p>
                    <p class="font-bold">{{ products.price }}т.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mx-3">
              <i class="fas fa-user"></i>
              <p class="text-grayText">Вход</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "NavbarComp",
  computed: mapGetters(['addedProducts']),
  data() {
    return {
      showCart: 0
    }
  },
  methods: {
    shoFunc() {
      if(this.showCart === 0) {
        this.showCart = 1
      } else {
        this.showCart = 0
      }
    }
  }
};
</script>
