<template>  
    <div>
        <div class="text-left pt-64 description-block text-white flex flex-col justify-end p-5" :style="'background-image:linear-gradient(to bottom, rgba(245, 246, 252, 0), rgb(0 0 0 / 73%)), url(' + comics + ');'"><!-- top block -->
            <div>
                <template v-for="(genre, idx) in genres" :key="'genre-' + idx">
                    <div>{{genre.title}}</div>
                </template>
            </div>

            <div class="flex flex-row justify-between">
                <div class="text-2xl font-bold w-2/3">Comic Title</div>
                <!-- <button :class="{'bg-transparent ring-white ring-inset ring-2': subscribed, 'bg-green-400': !subscribed}" class="animated w-fit-content h-fit-content inline-flex items-center justify-center px-2 py-1 rounded-full text-gray-50 bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    Subscribe
                </button> -->
            </div>

            <div>
                <template v-for="(author, idx) in authors" :key="'author-' + idx">
                    <div>{{author.name}}</div>
                </template>
            </div>

            <div class="text-sm">Comic Description</div>

            <div class="flex mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <div class="text-sm px-2">1.000 views</div>
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div class="text-sm px-2">30</div>
                </div>
            </div>

            <div class="flex flex-row content-center justify-between">
                <button class="text-sm mt-3 inline-flex items-center justify-center px-2 py-1 rounded-full text-gray-50 bg-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="continueReading(true)">Subscribe</button>
                <!-- <template v-if="purchased">
                    <button class="text-sm mt-3 inline-flex items-center justify-center px-2 py-2 rounded-full text-gray-50 bg-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="continueReading(true)">View with AR</button>
                    <button class="text-sm mt-3 inline-flex items-center justify-center px-2 py-2 rounded-full text-gray-50 bg-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" v-if="isEmpty(bookmark)" @click="startReading">Start Reading</button>
                    <button class="text-sm mt-3 inline-flex items-center justify-center px-2 py-2 rounded-full text-gray-50 bg-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" v-else @click="continueReading(false)">Continue Reading</button>
                </template> -->
                <template>
                    <button class="mt-3 inline-flex items-center justify-center px-2 py-1 rounded-full text-gray-50 bg-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="openModal">Buy Comic</button>
                </template>
                <button class="mt-3 inline-flex items-center justify-center px-2 py-2 rounded-full text-gray-50 bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="favoriteComic">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path class="animated" :class="favorited ? 'fill-white' : 'fill-none'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="divide-y divide-black">
            <div class="flex flex-row h-20 bg-indigo-800 text-white" v-for="(chapter, idx) in chapters" :key="'chapter-'+idx">
                <div class="flex-none w-1/5 lg:w-24">
                    <img class="h-full w-full" :src="chapter.image_url" alt="">
                </div>
                <!-- <div class="flex-grow flex flex-col p-3 w-2/5 lg:w-2" @click="goToChapter(chapter.id)"> -->
                <div class="flex-grow text-left flex flex-col py-3 pl-3 w-2/5 lg:w-2">
                    <div class="w-100">
                        <span class="text-sm">Ep. {{chapter.chapter}}</span>
                        <span class="text-xs ml-2">{{chapter.release_date}}</span>
                    </div>
                    <div class="flex flex-row mt-2">
                        <div class="flex flex-row">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="animated h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                            <div class="text-xs px-0.5">{{chapter.favorites_count}}</div>
                        </div>
                        <div class="flex flex-row ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <div class="text-xs px-0.5">{{chapter.views}}</div>
                        </div>
                    </div>
                </div>

                <div class="w-2/5 flex justify-center items-center" >
                    <router-link to="/page/comic">
                        <button class="text-xs items-center min-h-8 w-116  p-2 rounded-lg text-gray-50 bg-purple-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Buy Ep. {{chapter.chapter}}</button>
                    </router-link>
                    <!-- <button @click="openModal(preview.chapter)">Buy Episode</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import comic from "../assets/comic.jpeg";
export default {
    name: 'comic-show',
    data(){
        return {
            comics: comic,
            genres: [
                {title: 'adventure'}
            ],
            authors: [
                {name: 'Andrew White'}
            ],
            chapters: [
                {image_url: comic, chapter: '1', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '2', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '3', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '4', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '5', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '6', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '7', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '8', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '9', release_date: '17/05/2022', favorites_count: '20', views: 1000},
                {image_url: comic, chapter: '10', release_date: '17/05/2022', favorites_count: '20', views: 1000},
            ]
        }
    }
}
</script>

<style>

</style>