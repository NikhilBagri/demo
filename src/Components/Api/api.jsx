

const api = () => {

    let API = "http://api.coinlayer.com/live?access_key=4ebef74513b8f7443bafdb2a26e24574";
    const fetchApiData = async (url) =>{
        try {
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchApiData(API);
    },[])
  return (
    <div>
      
    </div>
  )
}

export default api
