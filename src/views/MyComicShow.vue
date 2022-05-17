<template>
    <div class="bg-gradient-to-t to-indigo-900 from-purple-900">
        <div class="">
            <div class="bg-gray-300 w-full h-10 border-t-2 border-b-2 border-black">
                <div class="text-center text-lg pt-1">Favorited Comics</div>
            </div>
        </div>
        <div class="px-5 pt-5">
            <grid-show :items="comics" />
        </div>

        <div>
            <div class="pt-5">
                <div class="bg-gray-300 w-full h-10 border-t-2 border-b-2 border-black">
                    <div class="text-center text-lg pt-1">Purchased Comics</div>
                </div>
            </div>
            <div class="px-5 pt-5">
                <grid-show :items="comics" />
            </div>
        </div>

         <div>
            <div class="pt-5">
                <div class="bg-gray-300 w-full h-10 border-t-2 border-b-2 border-black">
                    <div class="text-center text-lg pt-1">Subscribed Comics</div>
                </div>
            </div>
            <div class="px-5 py-5">
                <grid-show :items="comics" />
            </div>
        </div>
    </div>
</template>

<script>
import GridShow from '../components/GridShow.vue'
import comic from "../assets/comic.jpeg";
export default {
    name: 'my-comic-show',
    components: {
        GridShow,
    },
    data(){
        return {
            comics: [
                {title: "comic 1", image: comic},
                {title: "comic 2", image: comic},
                {title: "comic 3", image: comic},
                {title: "comic 4", image: comic},
                {title: "comic 5", image: comic},
                {title: "comic 6", image: comic},
                {title: "comic 7", image: comic},
                {title: "comic 8", image: comic},
                {title: "comic 9", image: comic},
                {title: "comic 10", image: comic},
            ]
        }
    }
}

</script>

<style>

</style>