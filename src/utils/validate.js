/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
/** 
 *  @param {string} user
 * @returns {Boolean}
 */
export function validUsername(user) {
    const userArr = ["admin", "editor"];
    return userArr.indexOf(user.trim()) > 0;
}