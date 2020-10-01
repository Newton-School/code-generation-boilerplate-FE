function generateCodeFromObject(obj) {
  //return a code generated string
  if (Object.keys(obj).length === 0) {
    return "";
  }
  return recurse(obj);
}

function recurse(obj) {
  let str = "<" + obj.name;
  if (obj.style) {
    if (Object.keys(obj.style).length !== 0) {
      str = str + " style={{";
      for (var key in obj.style) {
        str =
          str +
          key.replace(/-./, function (text) {
            return text.substr(1).toUpperCase();
          }) +
          ":" +
          `"${obj.style[key]}",`;
      }
      str = str.slice(0, -1);
      str = str + "}}";
    }
  }
  if (obj.children) {
    if (obj.children.length === 0) {
      str = str + "/>";
    } else {
      str = str + ">";
      for (var object of obj.children) {
        str = str + recurse(object);
      }
      str = str + "</" + obj.name + ">";
    }
  } else {
    str = str + "/>";
  }
  return str;
}
module.exports = generateCodeFromObject;
