import React, { Component } from 'react';
import './App.css';
import Firstcomponent from "./component/firstcomponent"
import {Header} from "./component/Header";
import {connect} from 'react-redux';
class App extends Component {
    constructor(props){
       super(props);
    }
   // clickToChange = (data) =>{
   //    this.setState({
   //        name :data,
   //    })
   //  };
   //  Up = () =>{
   //    this.setState({
   //        age:this.state.age +1
   //    })
   //  };
   //  Down = () =>{
   //      this.setState({
   //          age:this.state.age -1
   //      })
   //  };
  render() {
    return (
        <div>
        {/*<Firstcomponent*/}
         {/*name ={this.state.name}*/}
         {/*onClick ={(data)=>this.clickToChange(data)}*/}
        {/*/>*/}
            {/*<Header myName={this.state.name}/>*/}
            {/*<a id ="myio" onClick={this.removeUrl} href ="www.google.com">google.com</a>*/}
            <input type="text" ref='text' value={this.props.age}/>
            <div className="btn btn-primary" onClick={this.props.Up}>Up</div>
            <div className="btn btn-primary" onClick={this.props.Down}>Down</div>

        </div>
    );
  }
}
const stateMap= (state)=>{
    return{
        age:state.age
    }
};

const dispatchMap =(dispatch)=>{
   return {
       Up: () => dispatch({type:'age_up',value:5}),
       Down: () => dispatch({type:'age_down',value:5})
   }
};

export default connect(stateMap,dispatchMap)(App);
