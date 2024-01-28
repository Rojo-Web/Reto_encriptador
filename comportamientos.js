/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/


function asignarText(element, texto) {
    let elementoHtml = document.querySelector(element);
    elementoHtml.innerHTML = texto;
}

function inicial() {
    asignarText('h3', "Ningún mensaje fue encontrado");
    asignarText('p', "Ingresa el texto que desees encriptar o desencriptar.");
    document.getElementById('copiar').style.display = 'none';
    document.getElementById('busqueda').style.display = 'inline';
}

function des_incriptado(codigo) {
    document.getElementById('busqueda').style.display = 'none';
    asignarText('h3', 'Texto encriptado');
    asignarText('p', codigo);
    document.getElementById('copiar').style.display = 'inline';
}


function validateTextarea() {
    const codigo = document.getElementById('codigo1').value;
    console.log(codigo);
    const text = codigo;
    const regex = /^[a-zA-Z\s,.¡!¿?']+$/;

    if (!regex.test(text)) {
        alert('El texto solo puede contener letras, sin acentuacion');
        document.querySelector('#codigo1').value = '';
        return false;
    }

    return true;
}


function incriptar() {
    let val = validateTextarea();
    console.log(val);
    if (val == true) {
        let codigo = document.getElementById('codigo1').value;
        let codigo_minuscula = codigo.toLowerCase()
        let codigo_encriptado = "";

        for (let index = 0; index < codigo.length; index++) {
            let letra = codigo_minuscula.charAt(index);
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                switch (letra) {
                    case 'a':
                        letra = 'ai';
                        break;
                    case 'e':
                        letra = 'enter';
                        break;
                    case 'i':
                        letra = 'imes';
                        break;
                    case 'o':
                        letra = 'ober';
                        break;
                    case 'u':
                        letra = 'ufat';
                        break;
                }
            }

            codigo_encriptado += letra;
        }

        des_incriptado(codigo_encriptado);
        return;
    }
    return;
}

function copiar() {
    const texto = document.getElementById('parrafo_caja').innerText;

    const copiarContenido = async() => {
        //Intentamos hacer la copia
        try {
            //Si todo sale bien copiamos y damos un mensaje
            await navigator.clipboard.writeText(texto);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            //En caso de error lazamos el error en la consola
            console.error('Error al copiar: ', err);
        }
    }
    copiarContenido(); //llamamos a nuestra mini funcion

}


function desincriptar() {
    let val = validateTextarea();
    console.log(val);
    if (val == true) {
        let codigo = document.getElementById('codigo1').value;
        let codigo_minuscula = codigo.toLowerCase()
        let codigo_desencriptado = "";

        for (let index = 0; index < codigo.length; index++) {
            let letra = codigo_minuscula.charAt(index);
            if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                switch (letra) {
                    case 'a':
                        letra = 'a';
                        index++;
                        break;
                    case 'e':
                        letra = 'e';
                        index = index + 4;
                        break;
                    case 'i':
                        letra = 'i';
                        index = index + 3;
                        break;
                    case 'o':
                        letra = 'o';
                        index = index + 3;
                        break;
                    case 'u':
                        letra = 'u';
                        index = index + 3;
                        break;
                }
            }

            codigo_desencriptado += letra;
        }

        des_incriptado(codigo_desencriptado);
        return;

    }
}


inicial();