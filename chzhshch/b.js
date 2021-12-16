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
    const showReply = document.querySelector('.show-reply')

    if (showReply) {
        showReply.addEventListener('click', () => {
            if (divReply.style.display !== 'block') {
                divReply.style.display = 'block'
            } else {
                divReply.style.display = 'none'
            }
        })
        // 默认展示回复
        divReply.style.display = 'block'
    }

    // 只展示缠师回复切换
    // $('#divReply').on('click', '[type="checkbox"]', function () {
    //     $("#divReply").toggleClass("showHostOnly");
    // });
    if (divReply) {
        const cb = divReply.querySelector('[type="checkbox"]')
        cb.addEventListener('click', () => {
            divReply.classList.toggle('showHostOnly')
        })
        // 默认checked
        cb.trigger('click')
    }

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
})
