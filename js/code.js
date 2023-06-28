function startAI(){
    var text = document.getElementById("text").value;

    var net = new brain.recurrent.LSTM();
    net.fromJSON(tagBrainAi);

    var result = net.run(text);

    function cambiarEstilo(emoji, color) {
        document.getElementById("result").innerHTML = emoji;
        document.getElementById("body").style.backgroundColor = color;
        document.getElementById("text").style.borderColor = color;
        document.getElementById("button").style.backgroundColor = color;
      }      

    switch (result){
        case "👍":
            cambiarEstilo("👍", "#459d3d")
            break;

        case "👎":
            cambiarEstilo("👎", "#f55858")
            break;

        default:
            cambiarEstilo("🤔", "#e6b720")
            break;
    }
}


function panelDisplay(valor){
    document.querySelector(".button-result").style.display = valor;
}

function textAreaHeight(valor){
    document.getElementById("text").style.height = valor;
}


function clasificacion(){
    document.getElementById("text").disabled = false;
    document.getElementById("text").value = "";
    textAreaHeight("50%")
    panelDisplay("flex")
}

function aboutTagBrain(){
    document.getElementById("text").disabled = true;
    panelDisplay("none")
    textAreaHeight("60%")
    document.getElementById("text").value = textos[0];
}

function textoAleatorio(){
    document.getElementById("text").disabled = false;
    textAreaHeight("50%")
    panelDisplay("flex")
    numeroAleatorio = Math.floor(Math.random()*testData.length)
    document.getElementById("text").value = testData[numeroAleatorio];
}

function licencia(){
    document.getElementById("text").disabled = true;
    panelDisplay("none")
    textAreaHeight("60%")
    document.getElementById("text").value = textos[1];
}