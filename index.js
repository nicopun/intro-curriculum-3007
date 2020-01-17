
/*配列に含まれる整数が 17 で割り切れるものだけにする*/

'use strict';

/*整数が17で割り切れるかどうかを判定する*/
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
