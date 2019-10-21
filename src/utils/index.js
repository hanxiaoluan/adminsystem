/**
 * @param {string} url
 * @returns {object}
 */

export function param20bj(url) {
    const search = url.split("?")[1];
    if (!search) {
        return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '}"');
}
/**
 * @param {object} source
 * @returns {object}
 */
export function deepClone(source) {
    if (!source && typeof source !== object) {
        throw new Error("error arguments", "deepclone");
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys]);
        } else {
            targetObj[keys] = source[keys];
        }
    })
    return targetObj;
}