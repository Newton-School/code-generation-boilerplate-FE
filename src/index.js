function generateCodeFromObject(obj){
    //return a code generated string
    return React.createElement("div", {
        name: "Clock",
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }
      }, React.createElement("div", {
        name: "Hour"
      }), React.createElement("span", {
        name: "Minute",
        style: {
          color: "green",
          fontSize: "30"
        }
      }));
   }
   
   module.exports=generateCodeFromObject;