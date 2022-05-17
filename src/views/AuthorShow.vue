<template>
    <div class="rounded-xl m-5 bg-gray-200 bg-opacity-70 border border-indigo-600">
        <div class="flex flex-row p-5">
            <div>
                <img class="w-24 h-36" :src="user" />
            </div>
            <div>
                <div class="ml-4 text-2xl font-bold">
                    Andrew White
                </div>
                <div class="ml-4 text-lg mt-3">
                    andrew.white@gmail.com
                </div>
                <div>
                    <div class="ml-4 mt-3 text-sm">
                        Social Media :
                    </div>
                    <div class="flex w-8">
                        <div class="w-10"></div>
                        <!-- <img class="ml-3" :src="facebookIcon.default" />
                        <img class="ml-5" :src="instagramIcon.default" />
                        <img class="ml-5" :src="twitterIcon.default" /> -->
                        <div>face</div>
                        <div>Instagram</div>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-5">
                <div class="text-xl font-bold">About Author :</div>
                <div>Author telah memiliki banyak buku</div>
            </div>
            <div class="p-5">
                <div class="text-xl font-bold">Author Books :</div>
                <div class="mb-3">
                    <div>
                        <horizontal-slider :content="comics"></horizontal-slider>
                    </div>
                </div>
            </div>
    </div>

</template>

<script>
import user from "../assets/user.png";
import HorizontalSlider from '../components/HorizontalSlider.vue'
import comic from "../assets/comic.jpeg";
export default {
    name: 'author-show',
    components: {
        HorizontalSlider,
    },
    data(){
        return {
            user: user,
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

