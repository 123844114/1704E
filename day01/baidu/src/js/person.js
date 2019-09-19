/**
 * Person类
 */
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    say(dosomething){
        console.log(`我是${this.name},我会${dosomething}`)
    }
    
}
export default Person