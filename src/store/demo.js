import { observable,action,computed } from 'mobx';
class Demo {
    @observable squareId = '1';            
    @observable squareName = '豆壳教育广场';
    @observable squareArray = [{ id: '1', name: '豆壳教育广场' }];
    constructor(){
        this.name = "haha"
    }
}

export default new Demo();