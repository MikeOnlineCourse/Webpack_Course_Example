import "index.scss";
import axios from "axios";


$(function(){
    
    axios.get("https://www.instagram.com/explore/tags/LeagueofLegends/?__a=1").then(res=>{
        console.log('LeagueofLegends: ',res.data);
    }).catch(err=> console.error(err));

})