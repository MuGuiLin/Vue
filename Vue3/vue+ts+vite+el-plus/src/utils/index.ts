export function verifyJsonPase(str: string = "{}") {
    try {
        const obj = JSON.parse(str);
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            return obj;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

