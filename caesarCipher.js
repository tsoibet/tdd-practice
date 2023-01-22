export default function caesarCipher(string, shift = 1) {
    if (shift === 0) {
        return string;
    }
    let encrypted = "";
    for (let char of string) {
        let code = char.charCodeAt(0);
        if (isLetter(code)) {
            let newCode = code + shift % 26;
            if (newCode > 122 || (shift > 0 && newCode < 97 && newCode > 90)) {
                newCode -= 26;
            } else if (newCode < 65 || (shift < 0 && newCode < 97 && newCode > 90)) {
                newCode += 26;
            }
            encrypted += String.fromCharCode(newCode);
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}

function isLetter(code) {
    if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
        return true;
    } else {
        return false;
    }
}
