const getLeague = async function() {
    const apiUrl = "https://api.pandascore.co/lol/leagues";
    const apiKey = "7DAc9uNL_UK7s_uD4pxMdvSdnXG6XxmPaQlWHddR1QH-8a4lIfE";
    const response = await fetch(`${apiUrl}?token=${apiKey}`); 
    if(response.status == 200){
      return response.json()    
    }else{
      new Error(response.statusText)
    }
  }

  export { getLeague }
  

  const getTeamInLeague = async function(seriesid) {
    const apiUrl = `https://api.pandascore.co/lol/series/${seriesid}/teams`;
    const apiKey = "7DAc9uNL_UK7s_uD4pxMdvSdnXG6XxmPaQlWHddR1QH-8a4lIfE";
    const response = await fetch(`${apiUrl}?token=${apiKey}`); 
    if(response.status == 200){
      return response.json()    
    }else{
      new Error(response.statusText)
    }
  }

  export { getTeamInLeague }


const getNextMatches = async function() {
  const apiUrl = `https://api.pandascore.co/lol/matches/upcoming`;
  const apiKey = "7DAc9uNL_UK7s_uD4pxMdvSdnXG6XxmPaQlWHddR1QH-8a4lIfE";
  const response = await fetch(`${apiUrl}?token=${apiKey}`); 
  if(response.status == 200){
    return response.json()    
  }else{
    new Error(response.statusText)
  }
}

export { getNextMatches }

const getPreviousMatches = async function() {
  const apiUrl = "https://api.pandascore.co/lol/matches/past";
  const apiKey = "7DAc9uNL_UK7s_uD4pxMdvSdnXG6XxmPaQlWHddR1QH-8a4lIfE";
  const response = await fetch(`${apiUrl}?token=${apiKey}`); 
  if(response.status == 200){
    return response.json()    
  }else{
    new Error(response.statusText)
  }
}

export { getPreviousMatches }