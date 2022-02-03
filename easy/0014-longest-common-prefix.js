var longestCommonPrefix = function(strs) {
    let prefix = "";
    let shortestLength = Math.min(...strs.map(word => word.length))
    for(let i = 0; i < shortestLength; i++){
        if(strs.map(word => word[i]).filter(letter => letter != strs[0][i]).length == 0)
            prefix+= strs[0][i];
        else return prefix;
    }
    return prefix;
};
