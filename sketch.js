function setup() {
    creatcanvas(1920, 1080, webgl);//plano 3D
terra=loadImage('terra.jpg')
}

function draw( ){
    backgraud(205, 109, 94);//cor de fundo
    rotateY(millis()/1000);//rotação da terra
    textTrackCue(terra);//da terra, imagem.
    Spehere(80, 100);//esfera 3D
}