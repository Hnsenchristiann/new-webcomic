<template>
    <div class="bg-white h-full">
        <div class="flex items-center justify-center pt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
            <div class="px-2 mt-2">You have 200 tokens</div>
        </div>
        <div>
            <ul class="divide-y divide-black px-3">
                <div class="flex items-center justify-center mt-3">
                </div>
                <div class="divide-y divide-black">
                    <div class="flex items-center" v-for="priceObj in prices" :key="priceObj.index">
                        <div class="w-1/6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="max-h-7 w-5 h-5 my-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                            </svg>
                        </div>
                        <div class="flex-grow w-2/6 items-center">
                            <li class="">{{priceObj.amount}} Coin</li>
                        </div>
                        <div class="flex items-center justify-end w-1/2">
                            <button class="bg-blue-500 w-28 text-center text-white rounded">Buy Coin</button>
                        </div>
                    </div>
                </div>
                <div class="text-center text-lg font-bold bg-gray-200 h-14 pt-4">Informasi Koin</div>
            </ul>
        </div>
        <ul class="list-disc text-left ml-10 pb-5">
            <li>Koin yang telah di beli tidak dapat di tukarkan kembali</li>
            <li>Episode berbayar hanya bisa di beli dengan koin</li>
            <li>Riwayat pembelian bisa di lihat di halaman riwayat</li>
            <li>Episode yang telah di beli tidak dapat di kembalikan</li>
            <li>Jika kamu membeli koin, kamu setuju dengan kebijakan visi8-webcomic yang berlaku</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'my-token-show',
    data(){
        return {
            prices: [
                {amount: '100'},
                {amount: '200'},
                {amount: '300'},
                {amount: '400'},
                {amount: '500'},
            ]
        }
    }
}
</script>

<style>

</style>