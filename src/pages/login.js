import {Button} from "antd";
// import React, { Component } from 'react';


import { inject, observer } from 'mobx-react';
@inject('store')
@observer
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    jump = ()=>{
        let { demoStore } = this.props.store;
        demoStore.login();
    }
    render(){
        let { demoStore } = this.props.store;

        return(
            <div>
                <Button 
                    onClick = {this.jump}
                    type = "primary">{demoStore.name}</Button>  
            </div>
        )
    }
}