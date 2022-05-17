<template>
    <vueper-slides slide-image-inside class="w-full">
        <vueper-slide v-for="banner in banners" :key="banner.index" :title="banner.title" :image="banner.image">
            <template #content>
                <img :src="banner.image" alt="">
            </template>
        </vueper-slide>
    </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import comic from "../assets/comic.jpeg"
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'banner-slider',
    components: {
        VueperSlides,
        VueperSlide,
        // Carousel,
        // Slide,
        // Pagination,
        // Navigation
    },
    created(){
        console.log(this.banners)
    },
    props: {
        banners: {
            type: Array,
            default: () => {
                return [
                    {
                        title: 'testing',
                        route: {
                            name: 'web.comic',
                            params: {comic: 1}
                        },
                        image: comic
                    },
                    {
                        title: 'testing',
                        route: {
                            name: 'web.comic',
                            params: {comic: 1}
                        },
                        image: comic
                    }
                ]
            }
        }
    },
    methods: {
        goToItem(route){
            this.$inertia.visit(route(route.name, route.params))
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
}
</script>
