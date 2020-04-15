import axios from "axios";
export default function JqClick(){
    $("#app").on("click", e=> {

        axios.get("https://www.instagram.com/explore/tags/Avengers/?__a=1")
        .then(res=>{
            console.log('Avengers:', res.data);
        })
        .catch(err=> console.error(err));

    })
}