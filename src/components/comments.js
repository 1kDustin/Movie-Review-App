import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.stars = this.props.stars;
        this.review = this.props.review;
    }
    componentDidMount(){
        console.log("RAN!")
    }
    render() {
        return <div className = "card-body">
            <div>
                <h2>{this.name}</h2>
                <span>{this.stars}</span>
                <br></br>
                <p>{this.review}</p> 
            </div>
        </div>
    };
}