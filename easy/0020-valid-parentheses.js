/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const oldLength = s.length;
    s = s.replace("[]","").replace("()","").replace("{}","");
    if(s == "") return true;
    if(s.length < oldLength)    return isValid(s);
    return false;
};
