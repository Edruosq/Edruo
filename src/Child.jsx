import React from "react";
var Child=React.createClass({
    getDefaultProps:function(){
        alert("Child getDefaultProps 1");
        return{
            a:100
        }
    },
    getInitialState:function(){
        alert("Child getInitialState 2");
        return{
            b:200
        }
    },
    componentWillMount:function(){
        alert("Child componentWillMount");
    },
    render:function(){
        alert("Child render 4");
        return(
            <div>
                <h3>Child组件</h3>
                <p>child this.props:{this.props.a}</p>
                <p>child this.state:{this.state.b}</p>
                <p>父组件传递过来的this.props:{this.props.c}</p>
            </div>
        )
    },
    componentDidMount:function(){
        alert("Child componentDidMount 5")
    },
    componentWillReceiveProps:function(nextProps){
        alert("Child componentWillReceiveProps 6")
    },
    shouldCompoentUpdate:function(){
        alert("Child shouldComponentUpdate 7");
        return true;
    },
    componentWillUpdate:function(){
        alert("Child componentWillUpdate 8");
    },
    componentDidUpDate:function(){
        alert("Child componentDidUpdate 9");
    },
    componentWillUnmount:function(){
        alert("Child componentWillUnmount 10")
    }
})
export default Child;