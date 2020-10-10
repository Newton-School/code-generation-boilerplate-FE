function generateCodeFromObject(obj){
    return generateCode(obj)
   }
   
   function generateCode(obj) {
       let str = "<" + obj.name
       if(obj.keys == undefined && Object.keys(obj.style).length > 0) {
           str = str + " style {{"
           for(var key in obj.style) {
            str =
            str +
            key.replace(/-./, function (text) {
              return text.substr(1).toUpperCase();
            }) +
            ":" +
            `"${obj.style[key]}",`;
           }
           str = str.slice(0, -1)
           str = str + "}}"
   }
   if(obj.children == undefined && obj.children.length > 0) {
       str += ">/n"
       for(let i=0; i<obj.children.length; i++) {
           str += generateCode(obj.children[i])
       }
       str += "</" + obj.name + ">"
   }
   else {
       str += '/>'
   }
   return str
}

module.exports=generateCodeFromObject;