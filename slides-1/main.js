
let n = 1

$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')

setInterval(() => {
    $(`.images > img:nth-child(${x(n)})`).removeClass('enter current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave current').addClass('enter')
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('enter leave').addClass('current')
    n += 1
}, 3000)

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}