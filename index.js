let btn = document.querySelector('button')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let clo=document.querySelector(".c")

btn.onclick = () => {
    modal.style.display = "block"
    modal_bg.style.display = "block"
    
    setTimeout(() => {
        modal_bg.style.opacity = "1"
        modal.style.opacity = "1"
        modal.style.transform = "translate(-50%, -50%) scale(1)"
    }, 200);
       
}
clo.onclick=()=>{
    modal.style.display = "none"
    modal_bg.style.display = "none"

}
let btns = document.querySelector('.color[data-color]')

let img = document.querySelector('img')
let phones = {
    white: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346280',
    green: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385495',
    black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346288',
}
btns.forEach(btn  => {
btn.onclick=()=>{
    let key=btn.getAttribute("data-color")
    img.setAttribute("src", phones[key])
}
})