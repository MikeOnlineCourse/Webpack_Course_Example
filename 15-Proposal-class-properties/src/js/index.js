import "../index.html";
import "../scss/index.scss";
console.log('載入成功');

//正統 class 需要 bind 才可以拿到 this
class Index{
    constructor(){
        this.name = "mike";
        this.address = "台灣";
        document.querySelector('.myBtn1').addEventListener('click', this.OpenStateFn);
        // document.querySelector('.myBtn1').addEventListener('click', this.OpenStateFn.bind(this));
    }
    OpenStateFn(){
        console.log("Index: ",{
            name: this.name,
            address: this.address
        });
    }
}

//Babel 提供的 plugin-proposal-class-properties 寫法可以避免 bind
class IndexBabel{

    name = "mike";
    address = "台灣";

    constructor(){
        document.querySelector('.myBtn2').addEventListener('click', this.OpenStateFn);
    }
    
    OpenStateFn = () =>{
        console.log("IndexClass: ",{
            name: this.name,
            address: this.address
        });
    }

}

new Index();
new IndexBabel();