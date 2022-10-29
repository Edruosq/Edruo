import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
var App=React.createClass({
    getDefaultProps:function(){
        //初始化Props
        alert("App getDefaultProps 1");
        return {
            title:"我是帅哥"
        }
    },
    getInitialState:function(){
        //初始化State
        alert("App getInitialState 2");
        return{
            name:"tom"
        }
    },
    //挂载前
    componentWillMount:function(){
        alert("App componentWillMount 3");
    },
    handleClick:function(){
        //修改this.state,只能通过异步方法this.setState才可以
        this.setState({
            name:"jarry"
        })
    },
    handleClick2:function(){
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    },
    //挂载
    render:function(){
        alert("App render 4");
        return(
            <div>
                <h3>App组件</h3>
                <p id="p1">哈哈哈哈</p>
                <p>this.props:{this.props.title}</p>
                <p>this.state:{this.state.name}</p>
                <button onClick={this.handleClick}>点击修改this.state.name</button>
                <hr />
                <Child c={this.state.name}/>
                <hr />
                <button onClick={this.handleClick2}>点击卸载组件</button>
            </div>
        )
    },
    
    //挂载后
    componentDidMount:function(){
        alert("App componentDidMount 5");
        console.dir(p1);
    },
    //是否准备更新
    shouldComponentUpdate:function(nextProps,nextState){
        console.log(this.props,this.state)
        console.log(nextProps,nextState)
        alert("App shouldComponentWillUpdate 7 ");
        if(nextProps!=this.props||nextState.name!=this.state.name){
            return true;
        }else{
            return false;
        }
    },
    //准备更新
    componentWillUpdate:function(){
        alert("App componentWillUpdate 8");
    },
    //更新后
    componentDidUpdate:function(){
        alert("App componentDidUpdate 9");
    },
    //准备卸载
    componentWillUnmount:function(){
        alert("App ComponentWillUnmount 10");
    }
})
export default App;