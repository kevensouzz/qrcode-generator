const input = document.querySelector('#link')
const qrcode = document.querySelector('#qrCode')
const botaoGerar = document.querySelector('#botaoGerar')
const botaoApagar = document.querySelector('#botaoApagar')

botaoGerar.addEventListener("click", ()=> {
    genQrcode()
})

function genQrcode() {
    if (!input.value) return

    
}

botaoApagar.addEventListener("click", ()=> {
    qrcode.src = ""
    input.value = ''
})