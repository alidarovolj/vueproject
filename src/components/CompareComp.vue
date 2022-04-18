<template>
    <div>
        <div class="container mx-auto">
            <div class="bg-orangelight w-full p-2 rounded-lg my-4">
                <div>
                    Сравниваемые товары
                </div>
                <div v-for="item in items" :key="item">
                    {{ item }}
                </div>
                <button @click="increaseFunc()">Click me!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompareComp",
    data() {
        return {
            items: [],
            i: 0
        }
    },
    methods: {
        increaseFunc() {
            this.i += 1;
            if(this.items.length <= 2) {
                this.items.splice(0, 0, this.i);
            } else {
                this.items.splice(2, 1);
                this.items.splice(0, 0, this.i);
            }
        }
    }
}
</script>