import Person from './js/person'
let p = new Person('马云', 80)
p.say('挣钱')
console.log(123)
//引入css
import './style'
import './sass.scss'
import '@font/iconfont.css'

//调接口
import axios from 'axios'
axios.get('/list?type="star"').then(({ data }) => { //接收数据并渲染
    console.log(data)
    let str = ``
    data.forEach((item) => {
        str += `<li>${item}</li>`
    })
    document.getElementById('list').innerHTML = str
})
//post
document.getElementById('submit').onclick = function () {
    let inputV = document.querySelector('input').value
    axios.post('/add', { name: inputV }).then(({ data }) => {
        console.log(data)
    })
}