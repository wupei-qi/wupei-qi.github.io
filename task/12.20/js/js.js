Vue.component('navs', {
    template: `
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 text-color="#fff" active-text-color="#9cdee2" background-color= "#043345">
                <el-menu-item index="1"><a href="#/">首頁</a></el-menu-item>
                <el-submenu index="2">
                    <template text-color="#fff" slot="title"><a href="#/about">關於我們</a></template>
                    <el-menu-item text-color="#fff " index="2-1"><a href="#/news-t">医疗器械</a></el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="#/line">在线预约</a></el-menu-item>
                <el-menu-item index="4"><a href="#/news">醫療資訊</a></el-menu-item>
                <el-menu-item index="5"><a href="#/contact">联系我们</a></el-menu-item>
        </el-menu>
    </div>
    
    `,
    data() {
        return {
            activeIndex2: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
})


Vue.component('ban', {
    template: `
    <div>
    <div class="block">
        <el-carousel trigger="click" height="305px">
            <el-carousel-item v-for="item in arr">
                <div style="width:678;height: 304px;" :key="item">
                    <img style="width:678;height: 304px;" :src="item" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</div> 
    `,
    data() {
        return {
            arr: [
                'https://ccdn.goodq.top/caches/6e87fcb6b82084bd1cefe0e3cf607d3e/aHR0cDovLzU2OGNkNGE2Y2ZhMmEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS9kMzVlYjZmMGQ4YjU5ZDM4ODViYmQ1NmJiYzI2M2QyYy5qcGc_p_p100_p_3D.jpg',
                'https://ccdn.goodq.top/caches/6e87fcb6b82084bd1cefe0e3cf607d3e/aHR0cDovLzU2OGNkNGE2Y2ZhMmEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS83MTY1OTc0ZjM4MTRlYTkxN2ZhOWZmNTY3MDY0MDM2OC5qcGc_p_p100_p_3D.jpg',

            ]
        }
    }
})
Vue.component('news', {
    template: `
    <div>
            <div class="news-element" v-for="i in arr">
                <div class="news-left">
                    <p>{{i.tit}}</p>
                    <p style="font-size: 16px;"> {{i.text}}</p>
                </div>
                <div class="news-right">
                    <div class="news-r-img">

                        <img :src="i.img" alt="">

                    </div>
                    <div class="news-r-top">
                        <p>{{i.tit}}</p>
                        <p style="font-size: 16px;">{{i.text}}</p>
                    </div>
                    <div class="news-r-text">
                        <p>{{i.con1}}</p>
                        <p>{{i.con2}}</p>
                        <p>{{i.con3}}</p>
                    </div>
                </div>
            </div>
        </div>
    
    `,
    data() {
        return {
            arr: [

                {
                    tit: '關 於 我 們',
                    text: 'CONTACT US',
                    img: 'https://ccdn.goodq.top/caches/6e87fcb6b82084bd1cefe0e3cf607d3e/aHR0cDovLzU2OGNkNGE2Y2ZhMmEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS8xYjMzMzFkM2FkMjY1OWFkZWRlNWM0MTI4YjQxYTE0MC5qcGc_p_p100_p_3D.jpg',
                    con1: ' 応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨忩忪忬忭忮忯忰忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒恇恈恉恊恌恍恎恏。恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡恦，恻恽恾恿悀悁悂悃悆悇悈悊。',
                    con2: ' 朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡。忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎.攴 朰朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡。忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅 怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳 忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎。',
                    con3: '怦怩怫怬怭怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎.攴 朰朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。'
                },
            ],
            arr2: [{
                tit: '醫 療 器 械',
                text: 'M A C H I N E R Y',
                img: 'https://ccdn.goodq.top/caches/6e87fcb6b82084bd1cefe0e3cf607d3e/aHR0cDovLzU2OGNkNGE2Y2ZhMmEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS80NDE3NGZhMWIwMDc1M2IxZDA1MzgyOWNmMDMxYmE4YS0xMDAweDUwMC5qcGc_p_p100_p_3D.jpg',
                cno1: '朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡。忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃忥忦忨忩忪忬忭忮忯忰。朰朲朳枛朸桸桹怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎。',
                con2: '  怦怩怫怬怭怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎.攴 朰朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。'
            }]
        }
    }
})
Vue.component('news2', {
    template: `
    <div>
            <div class="news-element" v-for="i in arr2">
                <div class="news-left">
                    <p>{{i.tit}}</p>
                    <p style="font-size: 16px;"> {{i.text}}</p>
                </div>
                <div class="news-right">
                    <div class="news-r-img2">

                        <img :src="i.img" alt="">

                    </div>
                    <div class="news-r-top">
                        <p>{{i.tit}}</p>
                        <p style="font-size: 16px;">{{i.text}}</p>
                    </div>
                    <div class="news-r-text">
                        <p>{{i.con1}}</p>
                        <p>{{i.con2}}</p>
                    </div>
                </div>
            </div>
        </div>
    
    `,
    data() {
        return {
           
            arr2: [{
                tit: '醫 療 器 械',
                text: 'M A C H I N E R Y',
                img: 'https://ccdn.goodq.top/caches/6e87fcb6b82084bd1cefe0e3cf607d3e/aHR0cDovLzU2OGNkNGE2Y2ZhMmEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS80NDE3NGZhMWIwMDc1M2IxZDA1MzgyOWNmMDMxYmE4YS0xMDAweDUwMC5qcGc_p_p100_p_3D.jpg',
                con1: '朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏恑恒！恓恔恖恗恘恙恚恛恜恝恞恠恡。忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃忥忦忨忩忪忬忭忮忯忰。朰朲朳枛朸桸桹怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎。',
                con2: '怦怩怫怬怭怲怳怴怵怶怷怸怹怺怼悙怿。恀恁恂恃恄恅，恒忢忣忥忦忨忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换，攴朰朲朳枛朸桸桹桺奿妀夲夳夵壱売壳圢圤圥圦圧圩圪囡団囤囥咍咎.攴 朰朲朳枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恊恌恍恎恏。'
            }]
        }
    }
})
Vue.component('articles',{
    template:`
    <div>
            <div class="mc-article" v-for="i in arr">
                <a href="#/essays"><h5 class="mc-tit">{{i.tit}}</h5></a>
                <p class="mc-time">{{i.time}} </p>
                <div class="mc-conent">{{i.con}}</div>
                <a href="#/essays"><span class="read">{{i.read}}</span></a>
            </div>
        </div>
    `,
    data(){
        return{
            arr:[
                {tit:'醫療諮詢圢圤圥圦圧圩#7',time:'发布日期：2016-01-27 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥。',read:'阅读正文'},
                {tit:'醫療諮詢圢圤圥圦圧圩#6',time:'发布日期：2016-01-27 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
                {tit:'醫療資訊圢圤圥圦圧圩圢圤圥圦圧圩#5',time:'发布日期：2016-01-25 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
                {tit:'醫療資訊圢圤圥圦圧圩圥圧#4',time:'发布日期：2016-01-25 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
                {tit:'醫療資訊圢圤圥圦圧圩圥圧#3',time:'发布日期：2016-01-25 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
                {tit:'醫療資訊圢圤圥圦圧圩圥圧#2',time:'发布日期：2016-01-25 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
                {tit:'醫療資訊圢圤圥圦圧圩圥圧#1',time:'发布日期：2016-01-25 分类：未分类 ',con:'夳夵壱売壳圢圤圥圦圧圩圪咍，壱売壳圢圤怅怆怐，怗怘怙怚怛怞怟怡怢怣怤怦怩怭夳夵壱売壳圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売壳夲夳夵壱売壳圢圤圥圦夲。圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。壱売圢圤圥夲夳夵壱売壳。恀夳夵壱売壳圢圤圥夲夳夵壱売壳恌恍恎恏。恒恔恖恘恙恜恧恬恺，恽夳夵壱売壳圢圤圥夲夳夵壱売壳。夲夳夵壱売壳圢圤圥夲夳夵壱売壳圢圤夳夵。',read:'阅读正文'},
            ]
        }
    }
})

