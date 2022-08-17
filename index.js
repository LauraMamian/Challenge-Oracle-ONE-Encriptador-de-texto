function encriptar() {
    let frase = [];
    let texto = document.getElementById("texto-entrada").value.toLowerCase();

    for (var posicion = 0; posicion < texto.length; posicion++) {
        if (texto[posicion] == "a") {
            frase[posicion] = "ai";
        } else if (texto[posicion] == "e") {
            frase[posicion] = "enter";
        } else if (texto[posicion] == "i") {
            frase[posicion] = "imes";
        } else if (texto[posicion] == "o") {
            frase[posicion] = "ober";
        } else if (texto[posicion] == "u") {
            frase[posicion] = "ufat";
        } else {
            frase[posicion] = texto[posicion];
        }
    }

    document.getElementById("copiar").className = "btn btn-secondary mt-16";
    document.getElementById("person").style = "display: none !important";
    document.getElementById("titulo-salida").className = "d-none";
    document.getElementById("texto-salida").innerText = "";
    document.getElementById("texto-salida").innerText = frase.join("");
}

function desencriptar() {
    let texto = document.getElementById("texto-entrada").value.toLowerCase();

    // Modificadores de texto
    // i -> Indica que no se hace differencia entre mayúsculas y minúsculas
    // g -> Indica que se busca la expresión en todo el texto
    // m -> Indica que se busca la expresión en una cadena multilínea

    let textoDesencriptado = texto.replace(/ai/igm, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/igm, "e")
    textoDesencriptado = textoDesencriptado.replace(/imes/igm, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");

    document.getElementById("copiar").className = "btn btn-secondary mt-16";
    document.getElementById("person").style = "display: none !important";
    document.getElementById("titulo-salida").className = "d-none";
    document.getElementById("texto-salida").innerText = "";
    document.getElementById("texto-salida").innerText = textoDesencriptado;
}

function copiar() {

    const content = document.getElementById('texto-salida').innerText;

    navigator.clipboard.writeText(content).then(()=>{
        Swal.fire(
            '',
            'Copiado con éxito en el portapapeles',
            'success'
        )
    })  
}