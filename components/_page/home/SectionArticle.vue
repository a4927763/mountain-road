<template>
    <div class="article-page">
        <div class="container">
            <div class="mb-7">
                <SectionTitle text="精選文章" />
            </div>
            <div class="grid grid-cols-3 gap-6">
                <div 
                    class="card" 
                    v-for="item in list" 
                    :key="item.id"
                >
                    <div class="card__img">
                        <img :src="item.url" alt="">
                    </div>

                    <div class="card__text">
                        <h5>{{item.title}}</h5>
                        <p>{{item.des}}</p>
                    </div>

                    <div class="card__footer">
                        <div class="card__footer__author">
                            <img :src="item.author_url" alt="">
                            <p>{{item.author}}</p>
                        </div>
                        <div class="card__footer__date">
                            <span class="i"></span>
                            <p>{{item.date}}</p>
                        </div>
                        <div class="card__footer__like">
                            <span class="i"></span>
                            收藏
                        </div>
                         <div class="card__footer__share">
                            <span class="i"></span>
                            分享
                        </div>
                    </div>
                </div>
            </div>
            
             <div class="mx-auto w-min">
                <button class="btn btn-primary">點我看更多</button>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "~/components/_shared/title/SectionTitle.vue";

export default {
    components: {
        SectionTitle
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    url: "https://fakeimg.pl/250x100/",
                    title: "【登山知識】參加登山團前你該知道的事 撤退只能靠自己！",
                    des: '對新手而言，我們到底要怎樣選擇路線、選擇適合自己的團體呢？因為登山社團的發達，大家常常看到高手在放百岳大景美圖，看著看著也會想去，很像唾手可得，但這些路線真的適合自己嗎？.......',
                    author_url: "https://fakeimg.pl/250x100/",
                    author: 'Rita Yang',
                    date: '2022/05/27',
                    like: false,
                },
                {
                    id: 2,
                    url: "https://fakeimg.pl/250x100/",
                    title: "【新手專區】我是新手，我想去高島縱走！ ",
                    des: '六星級的森林步道饗宴，優遊自在的在迷霧中漫步，那是大家對高島縱走的第一印象，隨著越來越多山友造訪，高島縱走這條P字型的路線，已經成了假日會人滿為患的火熱程度，已經是無人不曉....',
                    author_url: "https://fakeimg.pl/250x100/",
                    author: 'Rita Yang',
                    date: '2022/05/27',
                    like: false,
                },
                {
                    id: 3,
                    url: "https://fakeimg.pl/250x100/",
                    title: "【產品實測】Smartwool 經典羊毛衣，聰明穿著，山裡保暖的幫手！",
                    des: '羊毛的特性將身體的熱能包覆在裡頭，但背包因為緊貼著背部，流的汗來不及被蒸發帶走，卸下包包時會有微微的悶熱與流汗，但不會因為強風吹拂而感到寒冷，羊毛還是可以達到很棒的保暖效果....',
                    author_url: "https://fakeimg.pl/250x100/",
                    author: 'Kira Chen',
                    date: '2022/05/27',
                    like: false,
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.article-page
    padding-top: 34px
    padding-bottom: 56px
</style>