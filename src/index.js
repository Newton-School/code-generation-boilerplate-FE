function generateCodeFromObject(obj) {
  //return a code generated string
  return begin(obj);
}
function begin(obj) {
  let str = "";
  str += "<" + obj.name;

  {
    obj.style && Object.keys(obj.style).length > 0
      ? (str +=
          " style={{" +
          createstyle(obj.style).map((style) => {
            return style;
          }) +
          "}} ")
      : "";
  }

  {
    obj.children && obj.children.length > 0
      ? (str +=
          ">" +
          obj.children
            .map((child) => {
              return begin(child);
            })
            .join(" ") +
          "</" +
          obj.name +
          ">")
      : (str += "/>");
  }
  return str;
}

function createstyle(styleobj) {
  var stylearr = [];
  for (var key of Object.keys(styleobj)) {
    let k = key.split("-");
    let style = "";
    {
      k.length == 1
        ? (style = k[0])
        : (style = k[0] + k[1].charAt(0).toUpperCase() + k[1].slice(1));
    }
    style = style + ":" + `"${styleobj[key]}"`;
    stylearr.push(style);
  }
  return stylearr;
}

module.exports = generateCodeFromObject;
