const input = document.querySelector('#link')
const qrcode = document.querySelector('#qrCode')
const botaoGerar = document.querySelector('#botaoGerar')
const botaoApagar = document.querySelector('#botaoApagar')

botaoGerar.addEventListener("click", ()=> {
    genQrcode()
})

function genQrcode() {
    if (!input.value) return

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`
}

botaoApagar.addEventListener("click", ()=> {
    qrcode.src = "img/kevensouzzGithub.png"
    input.value = ""
})