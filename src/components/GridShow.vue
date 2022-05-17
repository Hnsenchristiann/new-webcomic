<template>
    <div class="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 flex-wrap overflow-x-auto overflow-x-hidden min-h-72">
        <div v-for="item in items" class="w-12 card mr-1 bg-gradient-to-t from-indigo-900 to-indigo-400 min-w-full rounded-lg" :key="item.index">
            <router-link to="item.url">
                <div class="rounded-lg text-sm p-2 image text-white flex flex-col justify-end bg-cover bg-center w-full h-full" :style="'background-image:linear-gradient(to bottom, rgba(245, 246, 252, 0), rgb(0 0 0 / 73%)), url(' + item.image + ');'">
                    {{item.title}}
                </div>
            </router-link>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <div class="bg-green-500 w-24 mt-5 h-7 flex justify-center items-center rounded-lg text-center" @click="loadMore">load more</div>
    </div>
</template>

<script>
export default {
    name: 'grid-show',
     props: {
        items: {
            type: Array,
            default: () => []
        },
    },
    data(){
        return {
        }
    },
    methods:{
    }
}

</script>>

<style>

</style>