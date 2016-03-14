import React from 'react';
import AppStore from '../stores/app-stores.js';

export default (InnerComponent, StateCallback) => class extends React.Component {
    constructor(props){
        super(props);
        this.state = StateCallback(props);
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount(){
        AppStore.addChangeListener(this._onChange)   
    }
    componentWillUnmount(){
        AppStore.removeChangeListener(this._onChange)   
    }
    _onChange(){
        this.setState(
            StateCallback(this.props)
        )   
    }
    render(){
        console.log("Mixin State: ",this.state);
        console.log("Mixin Prop: ",this.props)
        return (
            <InnerComponent {...this.state} {...this.props} />
        )   
    }
};