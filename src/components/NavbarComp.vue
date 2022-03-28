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
    <div class="container mx-auto py-2">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl">LOGO</h1>
        <div
          class="flex items-center bg-mainCol text-white py-2 px-4 rounded-md"
        >
          <i class="fas fa-list-ul mr-3"></i>
          <p class="uppercase text-sm font-semibold">Каталог</p>
        </div>
        <div class="relative w-1/3">
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
          <div class="text-center mx-3">
            <i class="fas fa-shopping-cart"></i>
            <p class="text-grayText">Корзина</p>
          </div>
          <div class="text-center mx-3">
            <i class="fas fa-user"></i>
            <p class="text-grayText">Вход</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>
