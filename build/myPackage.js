// @ts-check
// JSDoc 
// 코드를 완전히 타입스크립트 코드로 바꿀 필요 x
// 코멘트만 적으면 된다 단축키  : /** */
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
// 타입스크립트의 보호를 받는법
// 1. @ts-check
// 2. tsconfig.json에서 allowJs:true
// 3. 코멘트 달아주기
