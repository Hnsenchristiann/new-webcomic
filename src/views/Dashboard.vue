<template>
    <div class="pa-2 w-full">
        <div class="flex flex-col justify-end items-center bg-blue-100 w-150 h-40 featured-block w-full h-screen-navbar sm:h-96">
            <banner-slider
                :banners="banners"
            ></banner-slider>
        </div>
        <div class="text-white bg-gradient-to-t to-indigo-900 from-purple-900">
            <div class="px-5 py-5">
                <div class="mb-3">
                    <div class="flex items-center justify-between">
                        <div>All Comics</div>
                        <div>More</div>
                    </div>
                    <mq-responsive target="sm-" tag="span">
                        <horizontal-slider :content="comics"/>
                    </mq-responsive>
                    <mq-responsive target="md+" tag="span">
                        <grid-show :items="comics"/>
                    </mq-responsive>
                </div>
            </div>

            <div class="px-5 py-5">
                <div class="mb-3">
                    <div class="flex items-center justify-between">
                        <div>Adventure</div>
                        <div>More</div>
                    </div>
                    <mq-responsive target="sm-" tag="span">
                        <horizontal-slider :content="comics"/>
                    </mq-responsive>
                    <mq-responsive target="md+" tag="span">
                        <grid-show :items="comics"/>
                    </mq-responsive>
                </div>
            </div>

            <div class="px-5 py-5">
                <div class="mb-3">
                    <div class="flex items-center justify-between">
                        <div>Science Fiction</div>
                        <div>More</div>
                    </div>
                    <mq-responsive target="sm-" tag="span">
                        <horizontal-slider :content="comics"/>
                    </mq-responsive>
                    <mq-responsive target="md+" tag="span">
                        <grid-show :items="comics"/>
                    </mq-responsive>
                </div>
            </div>

            <div class="px-5 py-5">
                <div class="mb-3">
                    <div class="flex items-center justify-between">
                        <div>Authors</div>
                        <div>More</div>
                    </div>
                    <mq-responsive target="sm-" tag="span">
                        <horizontal-slider :content="comics"/>
                    </mq-responsive>
                    <mq-responsive target="md+" tag="span">
                        <grid-show :items="comics"/>
                    </mq-responsive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HorizontalSlider from '../components/HorizontalSlider.vue'
import GridShow from '../components/GridShow.vue'
import BannerSlider from '../components/BannerSlider.vue'
// import Grid from '../Components/Grid.vue'
// import AppLayout from '@/Layouts/AppLayout.vue'
// import Banner from '../Components/Banner.vue'
import user from "../assets/user.png";
import comic from "../assets/comic.jpeg";
export default {
    name: 'dash-board',
    components: {
        HorizontalSlider,
        BannerSlider,
        GridShow,
        // AppLayout,
        // Banner,
        // Grid,
    },
    props: ['tags', 'genres', 'banners'],
    // created(){
    //     localStorage.removeItem('lastPage')
    //     this.shownTags = usePage().props.value.tags
    //     this.banners = usePage().props.value.banners
    //     this.shownTags.forEach((elem) => {
    //         this.comics[elem] = {}
    //         this.comics[elem].comics = []
    //         this.getComics(route('api.comics.list', {...this.query, where_tag: elem}), elem)
    //     })
    //     this.getComics(route('api.comics.list', {...this.query, sort_by_popular: 1}), 'popular')
    //     this.getComics(route('api.comics.list', {...this.query, recommended_comics: 1}), 'recommended')
    //     this.getComics(route('api.comics.list', this.query), 'all')
    //     this.getAuthors(route('api.authors.list', this.query), 'all')
    // },
    data(){
        return {
            authors: [
                {title: "andi", image: user},
                {title: "Fransiska", image: user},
                {title: "Maria", image: user}
            ],
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
            // banners: {

            // },
            // shownTags: [
            // ],
            // authors: {
            //     all: {
            //         authors: []
            //     }
            // },
            // comics: {
            //     all: {
            //         comics: []
            //     },
            //     popular: {
            //         comics: []
            //     },
            //     recommended: {
            //         comics: []
            //     }
            // },
            // query: {
            //     paginate: 12,
            //     page: 1
            // },
            // config: {
            //     image: 'cover_url',
            //     title: 'title'
            // },
            // configAuthor: {
            //     image: 'cover_url',
            //     title: 'title'
            // },
            // karaIcon: require('../../assets/kara_logo.png')
        }
    },
    methods:{
        // processToAuthorHorizontalSlider(authorObjects){
        //     let retVal = []
        //     console.log(authorObjects)
        //     authorObjects.authors.forEach(element => {
        //         retVal.push({
        //             url: '/author/' + element.id,
        //             cover_url: element.profile_picture_url,
        //             title: element.name
        //         })
        //     });
        //     return {items: retVal, nextPageUrl: authorObjects.nextPageUrl}
        // },
        // processToHorizontalSlider(comicObjects){
        //     let retVal = []
        //     comicObjects.comics.forEach(element => {
        //         retVal.push({
        //             url: '/comic/' + element.id,
        //             cover_url: element.cover_url,
        //             title: element.title
        //         })
        //     });
        //     return {items: retVal, nextPageUrl: comicObjects.nextPageUrl}
        // },
        // getAuthors(url, category){
        //     axios.get(url)
        //     .then((response) => {
        //         if(!this.authors[category]){
        //             this.authors[category] = {}
        //             this.authors[category].authors = response.data.data
        //         }else{
        //             this.authors[category].authors = this.authors[category].authors.concat(response.data.data)
        //         }
        //         this.authors[category].paginationData = response.data
        //         this.authors[category].prevDisabled = this.authors[category].paginationData.prev_page_url === null
        //         this.authors[category].nextDisabled = this.authors[category].paginationData.next_page_url === null
        //         this.authors[category].prevPageUrl = this.authors[category].paginationData.prev_page_url
        //         this.authors[category].nextPageUrl = this.authors[category].paginationData.next_page_url
        //     })
        //     .catch((error) => {
        //         //do error catching later
        //     })
        // },
        // getComics(url, category){
        //     axios.get(url)
        //     .then((response) => {
        //         if(!this.comics[category]){
        //             this.comics[category] = {}
        //             this.comics[category].comics = response.data.data
        //         }else{
        //             this.comics[category].comics = this.comics[category].comics.concat(response.data.data)
        //         }
        //         this.comics[category].paginationData = response.data
        //         this.comics[category].prevDisabled = this.comics[category].paginationData.prev_page_url === null
        //         this.comics[category].nextDisabled = this.comics[category].paginationData.next_page_url === null
        //         this.comics[category].prevPageUrl = this.comics[category].paginationData.prev_page_url
        //         this.comics[category].nextPageUrl = this.comics[category].paginationData.next_page_url
        //     })
        //     .catch((error) => {
        //         //do error catching later
        //     })
        // },
        // nextAuthorPage(category){
        //     if(!this.authors[category].nextDisabled){
        //         this.getAuthors(this.authors[category].nextPageUrl, category)
        //     }
        // },
        // nextPage(category){
        //     if(!this.comics[category].nextDisabled){
        //         this.getComics(this.comics[category].nextPageUrl, category)
        //     }
        // },
        // prevPage(category){

        // }
    }
}
</script>

<style>
.subsubtitle{
    color: #41b3a9;
}
.featured-block{
    /* height: calc(100vh - 64px); */
    background-size: cover;
    background-position: center;
}
.vueperslides, .vueperslides__inner, .vueperslides__parallax-wrapper, .vueperslides__track{
    height: inherit;
}
</style>
