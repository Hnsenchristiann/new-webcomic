<template>
    <div class="bg-white rounded">
        <div class="font-bold text-xl px-5 pt-3 lg:px-5 lg:pt-5">Book Purchase History</div>
        <div class="px-5">
            <div class="flex items-center justify-center border-2 rounded shadow-lg">
                <div class="bg-white rounded w-full my-5">
                    <div class="divide-y divide-2 divide-black px-2">
                        <div class="grid grid-cols-7 pt-3 pb-1">
                            <div class="col-span-1 text-sm">Name</div>
                            <div class="flex items-center justify-center col-span-3 text-sm">Description</div>
                            <div class="flex items-center justify-center col-span-2 text-sm">Date</div>
                            <div class="flex items-end justify-end col-span-1 text-sm">Token</div>
                        </div>
                        <div>
                            <div class="grid grid-cols-7 pt-3 pb-1" v-for="cpt in purchase_chapters" :key="cpt.index">
                                <div class="col-span-1 text-sm">{{cpt.title}}</div>
                                <div class="flex items-center justify-center col-span-3 text-sm">Ep. {{cpt.chapter}}</div>
                                <div class="flex items-center justify-center col-span-2 text-sm">{{cpt.created_at}}</div>
                                <div class="flex items-center justify-center col-span-1 text-sm">{{cpt.token_amount}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="font-bold text-xl px-5 pt-3 lg:px-5 lg:pt-5">Token Purchase History</div>
        <div class="px-5 pb-10">
            <div class="flex items-center justify-center border-2 rounded shadow-lg">
                <div class="bg-white rounded w-full my-5">
                    <div class="divide-y divide-2 divide-black px-2">
                        <div class="grid grid-cols-3 pt-3 pb-1">
                            <div class=" col-span-1 text-sm">Token</div>
                            <div class="flex items-center justify-center col-span-1 text-sm">Date</div>
                            <div class="flex items-end justify-end col-span-1 text-sm">Price</div>
                        </div>
                        <div>
                            <div class="grid grid-cols-3 pt-3 pb-1" v-for="tkn in purchase_tokens" :key="tkn.index">
                                <div class=" col-span-1 text-sm">{{tkn.token_amount}} Token</div>
                                <div class="flex items-center justify-center col-span-1 text-sm">{{tkn.created_at}}</div>
                                <div class="flex items-end justify-end col-span-1 text-sm">{{tkn.money_value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-transaction-show',
    data(){
        return {
            purchase_chapters: [
                {title: "comic 1", chapter: '1', created_at: '17/05/2022', token_amount: '100'},
                {title: "comic 1", chapter: '2', created_at: '17/05/2022', token_amount: '100'},
                {title: "comic 1", chapter: '3', created_at: '17/05/2022', token_amount: '100'},
                {title: "comic 1", chapter: '4', created_at: '17/05/2022', token_amount: '100'},
                {title: "comic 1", chapter: '5', created_at: '17/05/2022', token_amount: '100'},
            ],
            purchase_tokens: [
                {token_amount: '100', created_at: '17/05/2022', money_value: 'Rp. 20.000'},
                {token_amount: '100', created_at: '17/05/2022', money_value: 'Rp. 20.000'},
                {token_amount: '100', created_at: '17/05/2022', money_value: 'Rp. 20.000'},
                {token_amount: '100', created_at: '17/05/2022', money_value: 'Rp. 20.000'},
                {token_amount: '100', created_at: '17/05/2022', money_value: 'Rp. 20.000'},
            ]
        }
    }
}
</script>

<style>

</style>