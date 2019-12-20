// 首页统计组件
Vue.component('no1', {
    template: `
    <div>
        <div class="header_title" v-for="(i) in arr" >
            <div class="hover">
                <span class="header_title-span">{{i.a}}</span>
                <span class="tit-col">{{i.b}}</span>
            </div>
        </div>
    </div>
    `,
    props: ['aa'],
    data() {
        return {
            arr: [{
                    a: '12000+',
                    b: '成功案例'
                },
                {
                    a: '010+',
                    b: '解决方案'
                },
                {
                    a: '200+',
                    b: '合作伙伴'
                },
                {
                    a: '050',
                    b: '技术专利'
                }
            ],
        }
    }
})

// 首页文章组件
Vue.component('list', {
    template: `
    <div>
        <div class="itembody"  v-for="(i) in list" >
            <a href="">
                <h4>{{i.a}}</h4>
            </a>
            <div class="post-title"></div>
            <p class="post_excerpt">{{i.b}}</p>
            <div class="vc_read_more"><a href="">{{i.c}}</a></div>
        </div>
    </div>
    `,
    data() {
        return {
            list: [{
                    a: '医疗PPP有望成后起之秀 概念股早盘活跃',
                    b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...',
                    c: '→'
                },
                {
                    a: '国产高端医疗设备凭高性价比应对“GP...',
                    b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...',
                    c: '→'
                },
                {
                    a: '医疗器械国产化命脉：“供应商”转型...',
                    b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...',
                    c: '→'
                }
            ]
        }
    }
})
// 首页产品
Vue.component('no2', {
    template: `
    <div>
            <div class="bg-color" v-for="(i) in lists">
                <div class="column_containter">
                    <div class="column-img">
                        <img :src="i.url" alt="">
                    </div>
                    <div class="colume-txt">
                        <a href=""><span style="color: #fff;font-size:18px;">{{i.tit}}</span></a>
                    </div>
                    <div class="colume-txt">
                        <a href=""><span style="color: #fff;font-size:18px;">{{i.num}}</span></a>
                    </div>
                </div>
            </div>
        </div>
    
    `,
    data() {
        return {
            lists: [{
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8wN2I3NjA1NGMyNDA5ZmY3ZjAzYzFlMWUyOWY5OThhNi0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                    tit: 'THE PROJECT',
                    num: 'NAME 01'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85MDE3OWU5MzhmYWExODNmOGIwMWM4ODBmMDM3OTc2Ny0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                    tit: 'THE PROJECT',
                    num: 'NAME 02'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8zYmUyZTI0MWQ1Mzg2MGZmZGQ3MzM2M2I5YmIyN2M1My0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                    tit: 'THE PROJECT',
                    num: 'NAME 03'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9mNmY4MjRjNmU0YmVlZDVkMjRmZGVkZGVkMGRmZjZkOS0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                    tit: 'THE PROJECT',
                    num: 'NAME 04'
                }
            ]
        }
    }
})
// 轮播图
Vue.component('ban', {
    template: `
    <div class="swiper-container ">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(i) in arr">
            <img :src="i"alt="">
            </div>
        </div>
        <div class="swiper-pagination">
        </div>
    </div>
    `,
    data() {
        return {
            arr: [
                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9mZWQ2MDIwMDJlNmI2NGRiNWFkODQyYTA3ZTliODk4Ni5wbmc_p_p100_p_3D.png',
                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS84MGQyNjk2NjM0MmY1MzVmN2RiYTAyNjY5M2YyZDlmNy5wbmc_p_p100_p_3D.png',
                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS83NjkwMTEyZDQyMjM3ZjlhODQ5ZWM2NzQ3Y2Y4YzFhZi5wbmc_p_p100_p_3D.png'
            ]
        }
    }
})
// 新闻页
Vue.component('news', {
    template: `
    <div>
    <div style="max-width:99.8%;margin-bottom: 24px;padding-bottom: 24px;min-height: 100px;" v-for="i in arrs">
        <div style="width: 100%;height: 100%;">
            <div style="width:160px;padding-right: 30px;padding-bottom:20px;float: left;">
                <div id="cc">
                    <img :src="i.url" alt="">
                </div>
            </div>
            <div style="width:80%;height: 100%;">
                <p style="font-family: 微软雅黑;"><a href="" style="font-size: 16px;line-height: 16px;">{{i.tit}}</a></p>
                <p style="padding-top: 5px;padding-bottom: 8px;color: #afafaf;font-size: 12px;margin-bottom: 5px;">
                    <span style="line-height: 12px;">{{i.tim}}</span>
                </p>
                <p style="color: #8c8c8c;font-size: 12px;font-family: 微软雅黑;line-height: 22px;">
                    {{i.con}}
                </p>
            </div>
        </div>
    </div>
    
    </div>
    
    `,
    data() {
        return {
            arrs: [{
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '医疗PPP有望成后起之秀概念股早盘活跃 ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjNiYTc5YzZhYWVmOGRmMjQzNmVmNjNlYjY1OWFiODYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '国产高端医疗设备凭高性价比应对“GPS”垄断局面 ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjE2N2Y5ZWFhNjZiZWUwMWI3YzAzNzZlODI2OGQxNTYtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '医疗器械国产化命脉：“供应商”转型“合作伙伴” ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZTY0ZDU0MTRhMzBlMjE5ZjUyNTE3OTVjNmQ1NThhZGMtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '医疗器械9只概念股价值解析” ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDgvZWY5ZGYwNDViYzVmZDE0ZjA4ZTRiMjA1YzYxNjYyZDQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '医疗器械抽验 7批产品不合标准” ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNTAzZmQ2N2U3OTkxMDU5NTFmOGUwNDk0ODU1ZTVjNTEtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '第五届生物产业大会 与专家共议未来发展 ',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                    tit: '医疗器械行业上半年利润增速达29.30%',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
                {
                    url: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMTBjMjRlN2I2NmRmMWQ5MjZiNzMwZjZjNTVmZmM4Y2UtMTYweDEwMC5wbmc_p_p100_p_3D.png',
                    tit: '20种进口医疗器械产品减税力度空前',
                    tim: '发布日期：2017年03月15日',
                    con: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...'
                },
            ]
        }
    }
})
// 加入我们
Vue.component('wes', {
    template: `
    <div>
        <div >
            <div class="cr">
                <div class="ct">
                    <strong>区域销售经理</strong>
                    <span>发布日期：2016-08-10</span>
                </div>
                <span>公司事业部：</span><strong>某某公司</strong>
                <span style="margin-left: 130px;">工作地点：</span><strong>北京</strong><br>
                <span>职位性质：</span><strong>制造/生产/加工</strong>
                <span style="margin-left: 98px;">招聘人数：</span><strong>10人</strong>
                <h4>职位概述：</h4>
                <p>负责公司全产品华东区域分销工作。</p>
                <h4>职位描述：</h4>
                <p>1. 负责指定地区设备的市场推广工作，完成各项销售目标；</p>
                <p>2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；</p>
                <p>3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；</p>
                <p>4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；</p>
                <p>5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；</p>
                <p>6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</p>
                <h4>任职条件：</h4>
                <p>1. 理工科相关专业，大学本科以上学历；</p>
                <p>2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；</p>
                <p>3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；</p>
                <p>4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；</p>
                <p>5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</p>
                <div class="cb">
                    <button>申请该职位</button>
                </div>
            </div>
        </div>
    </div>
    
    `,
    data() {
        return {

        }
    }
})