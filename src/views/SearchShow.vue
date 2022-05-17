<template>
    <div class="relative  flex w-full flex-wrap items-stretch">
        <input type="text" placeholder="search" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" />
        <button class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
    <div class="px-5 py-5 bg-gradient-to-t  to-indigo-900 from-purple-900">
        <div class="mb-3 text-white">
            <div>
                <div class="text-white float-right">More</div>
                <div>Comic Search Results</div>
            </div>
            <!-- <mq-responsive target="sm-" tag="span">
                <div>
                    <horizontal-slider
                        :items="processToHorizontalSlider(comics)"
                        :config="config"
                        objectCategory="all"
                        @nextPage="nextPage"
                    ></horizontal-slider>
                </div>
            </mq-responsive>
            <mq-responsive target="md+" tag="span"> -->
                <div>
                    <grid-show :items="comics" />
                </div>
            <!-- </mq-responsive> -->
        </div>
    </div>
</template>

<script>
import GridShow from '../components/GridShow.vue'
import comic from "../assets/comic.jpeg";
export default {
    name: 'search-show',
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
                {title: "comic 11", image: comic},
                {title: "comic 12", image: comic},
                {title: "comic 13", image: comic},
                {title: "comic 14", image: comic},
                {title: "comic 15", image: comic},
                {title: "comic 16", image: comic},
                {title: "comic 17", image: comic},
                {title: "comic 18", image: comic},
                {title: "comic 19", image: comic},
                {title: "comic 20", image: comic},
            ]
        }
    }
}

</script>

<style>

</style>