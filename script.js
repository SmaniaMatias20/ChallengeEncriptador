const shift = 3; // Desplazamiento fijo

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            outputText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            outputText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            // Non-alphabet characters
            outputText += inputText[i];
        }
    }

    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            outputText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            outputText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            // Non-alphabet characters
            outputText += inputText[i];
        }
    }

    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
