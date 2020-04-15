import "../index.html";
import "../scss/index.scss";
import "@babel/polyfill";
import axios from "axios";

//---------------------------------------------------------------------------------------------------------------------
async function asyncApiRes(){
    console.log('async: 1');
    let res1 = await axios.get("https://www.instagram.com/explore/tags/LeagueofLegends/?__a=1");
    console.log('async: 2');
    let res2 = await axios.get("https://www.instagram.com/explore/tags/Avengers/?__a=1");
    console.log('async: 3');
    console.log(
        {
            res1: res1.data, 
            res2: res2.data, 
        }
    );
    console.log('async: 4');
        
}
asyncApiRes();
//---------------------------------------------------------------------------------------------------------------------
function apiRes(){
    let res1 = null;
    let res2 = null;
    console.log('res: 1');
    axios.get("https://www.instagram.com/explore/tags/LeagueofLegends/?__a=1").then(res=>{
        console.log('res: 2');
        res1 = res.data;
    }).catch(err=> console.error(err));
    
    axios.get("https://www.instagram.com/explore/tags/Avengers/?__a=1").then(res=>{
        console.log('res: 3');
        res2 = res.data;
    }).catch(err=> console.error(err));
    console.log({res1, res2});
    console.log('res: 4');
}
apiRes();