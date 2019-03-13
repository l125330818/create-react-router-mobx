import { observable,action,computed } from 'mobx';
class Demo {
    constructor(){
        this.name = "不登录"
    }
    @observable name = '登录';            
   
    @action login = (obj = {})=>{
        alert("还没写登录")
    }
}

export default new Demo();