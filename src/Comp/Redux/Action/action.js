export const getProducts=()=>async(dispatch)=>{
    try{
        const data =await fetch("https://webscraping-amazonclone.herokuapp.com/products",{
            method: "GET",
            headers: {
                "Content-type":"application/json"
            }
        });
        const res =await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    }catch(error){
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}
