const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

document.getElementById("div-aparece").style.display = 'none';



function btnEncriptar(){
    if(inputTexto.value!==""){
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
        aparece();
    }else{
        alert("Por favor ingrese texto")
    }
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    if(inputTexto.value!==""){
        const textoDesencriptado = desencriptar(inputTexto.value);
        mensaje.value = textoDesencriptado;
        inputTexto.value = "";
        aparece();
    }else{
        alert("Por favor ingrese texto")
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert("Texto copiado")
    desaparece();
}

function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
}

function desaparece(){
    document.getElementById("div-desaparece").style.display = 'block';
    document.getElementById("div-aparece").style.display = 'none';
}

function inputverificar() {
    var inputPalabra = document.querySelector(".input-texto");

    const pattern = new RegExp('^[a-zñ ]+$', 'i');
    if(!pattern.test(inputPalabra.value)){ 
        alert('¡Error! \n- cáracter no válido - \n"Solo letras minúsculas y sin acentos."');
    }
    
  }