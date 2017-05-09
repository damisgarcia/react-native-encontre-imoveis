import axios from 'axios';

const baseuri = "https://api.nestoria.com.br/api";

export default {
  searchByPlaceName: (searchText, callback, error)=>{
    let params = {
      country: 'br',
      pretty: '1',
      encoding: 'json',
      listing_type: 'rent',
      action: 'search_listings',
      place_name: searchText
    };
    
    axios.get(baseuri, {params: params }).then(callback).catch(error);
  }
}

const parseParams = (params)=>{
  let urlSearchParams = new URLSearchParams()
  params.forEach( (value,key)=> {
    urlSearchParams.append(key, value)
  })

  return urlSearchParams.toString()
}
