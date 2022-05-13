<template>
    <div class="scrolling-wrapper">
        <div v-for="item in content" class="w-12 card scroller-container mr-1 bg-gradient-to-t from-indigo-900 to-indigo-400" :key="item.index">
            <div class="text-sm p-2 image scroller-block text-white flex flex-col justify-end" :style="'background-image:linear-gradient(to bottom, rgba(245, 246, 252, 0), rgb(0 0 0 / 73%)), url(' + item.image + ');'">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'horizontal-slider',
    props: {
        content: {
            type: Array,
            default: () => []
        },
    }
}
</script>

<style scoped>
.scrolling-wrapper{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-top: 5px;
}
.scrolling-wrapper.card{
    flex: 0 0 auto;
}
.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
.scroller-container{
    max-height: 205px;
    min-width: 150px;
    height: 205px;
    border-radius: 10px;
}

.image{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 80px;
    max-width: 100%;
}
.scroller-block{
    height: calc(100vh - 64px);
    background-size: cover;
    background-position: center;
    max-height: 100%;
}
</style>
