import React,{Component} from 'react'
import axios from 'axios'
import Img1 from './img/1.gif'
import Style from './css/style'

class App extends Component{
    render(){
        return (
            <div>
                <h3 className={Style.special}>App00001组件</h3>
                <span className={Style.one}>good</span>
                <img src={Img1}/>
                <ul>
                {
                    [
                       <li key={1}>tom</li>, 
                       <li key={2}>jarry</li>, 
                       <li key={3}>susan</li> 
                    ].map((value)=>{
                        return value;
                    })
                }
                </ul>
                <div id='div1'>哈哈哈</div>
            </div>
        )
    }
    componentDidMount(){
       axios.get("/data")
       .then(res=>{
        console.log("res",res);
       });
    }
}
export default App;