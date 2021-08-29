
// async function getCmntList(newsid, page) {
//     const url = `https://comment5.news.sina.com.cn/page/info?channel=blog&newsid=${newsid}&page=${page}&page_size=10&oe=utf-8&list=asc`
//     return new Promise((resolve) => {
//         $.ajax(url, {
//             dataType: 'jsonp', // !!!!!!
//             success: function(data) {
//                 resolve(data)
//             }
//         })
//     });
// }
document.addEventListener('DOMContentLoaded', () => {
    // 目录开合
    // $('ul.ulCate > li > a').on('click', function () {
    //     $(this).parent().next().toggle()
    // })
    document.querySelectorAll('ul.ulCate > li > a').forEach(e => {
        e.addEventListener('click', () => {
            const display = e.parentElement.nextElementSibling.style.display
            if (display !== 'block') {
                e.parentElement.nextElementSibling.style.display = 'block'
            } else {
                e.parentElement.nextElementSibling.style.display = 'none'
            }
        })
    })

    // $('.show-reply').on('click', function () {
    //     $("#divReply").toggle();
    // })
    const divReply = document.querySelector('#divReply')

    document.querySelector('.show-reply')?.addEventListener('click', () => {
        if (divReply.style.display !== 'block') {
            divReply.style.display = 'block'
        } else {
            divReply.style.display = 'none'
        }
    })

    // 只展示缠师回复切换
    // $('#divReply').on('click', '[type="checkbox"]', function () {
    //     $("#divReply").toggleClass("showHostOnly");
    // });
    divReply?.querySelector('[type="checkbox"]')?.addEventListener('click', () => {
        divReply.classList.toggle('showHostOnly')
    })

    const params = new URLSearchParams(window.location.search);
    const newsid = params.get("newsid");
    const from = params.get("from");
    // 调整上一篇和下一篇链接
    if (from === 'cat') {
        // $(".page-prev.time, .page-next.time").css('display', 'none');
        // $(".page-prev.cat, .page-next.cat").css('display', 'block');
        document.querySelectorAll('.page-prev.time, .page-next.time').forEach(e => {
            e.style.display = 'none'
        })
        document.querySelectorAll('.page-prev.cat, .page-next.cat').forEach(e => {
            e.style.display = 'block'
        })
    }

    // const ReplyList = {
    //     data() {
    //         return {
    //             replyList: [
    //             ]
    //         }
    //     },
    //     async mounted () {
    //         if (newsid) {
    //             const data = await getCmntList(newsid, 1);
    //             this.replyList = data.result.cmntlist;
    //         }
    //     }
    // }

    // const app = Vue.createApp(ReplyList)

    // app.component('reply-item', {
    //     props: ['reply'],
    //     template: `<div class="divReplyIsHostFalse vue" style="margin:10px">
    //     <fieldset>
    //         <div style="margin:10px">
    //             <span class="author" style="margin-right:5px">{{reply.nick}}</span>
    //             <span class="pubtime">{{reply.time}}</span>
    //         </div>
    //         <div style="margin:10px" v-html="processContent(reply.content)"></div>
    //         </fieldset>
    //     </div>
    //     `,
    //     methods: {
    //         processContent (content) {
    //             content = content.replace(/\[emoticons=(.*?)\](.*?)\[\/emoticons\]/gsi, '<img src="https://www.sinaimg.cn/uc/myshow/blog/misc/gif/$1.gif" style="margin:1px;" border="0" title="$2">')
    //             content = content.replace(/\\n/igs, '<br>')
    //             return content;
    //         }
    //     },
    // })

    // app.mount('#divReply2')
})
