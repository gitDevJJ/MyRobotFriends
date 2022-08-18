import React, {Component} from 'react';
import './Hello.css';

//here we're using JSX syntax!

class Hello extends Component
{
    render()
    {
        return (
            <div className="f1 tc">
                <h1>Hello!</h1>
                 <p>{this.props.power}</p>
            </div>
        );
    }
}

export default Hello;