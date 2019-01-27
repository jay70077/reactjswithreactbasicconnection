import "../css/main.css"
import PropTypes from "prop-types"
import React, {Component} from "react";

export default class  Firstcomponent  extends Component{
    constructor(props){
        super(props);
        this.state={
         newName : props.name,
        }

    }
    changeProps = ()=>{
      this.props.onClick(this.state.newName)
    };
    changeData =(event) =>{
        this.setState({
            newName:event.target.value,
        })
    };

    render(){
        return(
            <div className ="col-md-12 text-center">
                 <input type="name" ref ="name" value={this.state.newName} onChange={this.changeData}/>
                <input type="submit" ref ="submit" value="submit"  onClick={this.changeProps}/>
            </div>


        )

    }

}
Firstcomponent.PropTypes={
  name : PropTypes.string,
  onClick : PropTypes.func,
};

