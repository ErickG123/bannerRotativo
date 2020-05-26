// Definindo o tempo de rotação das imagens
let time = 5000,
    currentImageIndex = 0, // Falando qual imagem está no banner no momento
    images = document // Pegando todas as imagens do #slider img
        .querySelectorAll("#slider img")
    max = images.length; // Conta a quantidade de imagens e define como o máximo

// Função responsável por mudar a imagem do banner
function nextImage() {
 
    // Sempre que ele for mudar de imagem ele remove o 'selected' da img anterior 
    images[currentImageIndex]
        .classList.remove("selected")

    // Adiciona '+1' no currentImageIndex par mudar de imagem 
    currentImageIndex++

    // Verifica o banner chegou na última imagem e reseta o processo voltando para o '0'
    if (currentImageIndex >= max)
        currentImageIndex = 0

    // Adicionando a classe 'selected' ao elemento (Img)
    images[currentImageIndex]
        .classList.add("selected")

}

// Funciona que da inicio a rotação do banner
function start() {
    // setInterval executa uma função a cada interlavo (Time)
    setInterval(() => {
        // Troca de imagem de acordo com o tempo
        nextImage()
    }, time)
}

// Executa a função start() depois que a janela carregar
window.addEventListener("load", start) 