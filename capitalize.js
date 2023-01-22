export default function capitalize(string) {
    let code = string.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        return String.fromCharCode(code - 32) + string.slice(1);
    }
    return string;
}