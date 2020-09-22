function generateCodeFromObject(obj){
    //return a code generated string
    return (
        <>
            <Clock style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <Hour />
                <Minute style={{ color: "green", fontSize: 30 }} />
            </Clock>
        </>
    )
   }
   
   module.exports=generateCodeFromObject;