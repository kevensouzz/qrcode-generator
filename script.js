const input = document.querySelector('#link')
const qrcode = document.querySelector('#qrCode')
const botaoGerar = document.querySelector('#botaoGerar')
const botaoApagar = document.querySelector('#botaoApagar')

botaoGerar.addEventListener("click", ()=> {
    genQrcode()
})

function genQrcode() {
    if (!input.value) return

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}

botaoApagar.addEventListener("click", ()=> {
    qrcode.src = ""
    input.value = ""
})