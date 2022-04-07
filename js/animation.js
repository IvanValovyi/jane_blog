export function subscribe_animation(){
    let subscribe_menu = document.querySelector('.subscribe_menu')
    let open_subscribe_btns = document.querySelectorAll('button.subscribe.open')
    let close_subscribe_btns = subscribe_menu.querySelectorAll('.close')

    open_subscribe_btns.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            subscribe_menu.classList.remove('display_none')
        })
    })

    close_subscribe_btns.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            subscribe_menu.classList.add('display_none')
        })
    })
}