
const getJoke = async () => {
  var config = {
    method: 'get',
    url: 'http://localhost:3000/api/joke',
    headers: { }
  };
  try{
    const joke = await axios(config)
    return joke;
  } catch(error){
    console.log(error);
  }
}



