function generateCodeFromObject(obj){
    //return a code generated string
    return generateCode(obj);
   }

function generateCode(obj) {
    let codeStr = "<"
    codeStr += toTitleCase(obj.name) + " "
    if (obj.style !== undefined && Object.keys(obj.style).length > 0) {
        var keys = Object.keys(obj.style)
        codeStr += "style={{"
        for (var i = 0; i < keys.length; i++) {
            codeStr += toCamelCase(keys[i]) + ':"' + obj.style[keys[i]] + '",'
        }
        codeStr = codeStr.substr(0, codeStr.length - 1) + "}}"
    }

    if (obj.children !== undefined && obj.children.length > 0) {
        codeStr += ">\n";
        for (var i = 0; i < obj.children.length; i++) {
            codeStr += generateCode(obj.children[i])
        }
        codeStr += "</" + toTitleCase(obj.name) + ">"
    }
    else {
        codeStr += '/>'
    }

    return codeStr
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    ).replace(" ", "");
}

function toCamelCase(str) {
    str = str.replace("-", " ")
    return str
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
}
   
   module.exports=generateCodeFromObject;
