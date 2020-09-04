import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.stars = this.props.stars;
        this.review = this.props.review;
    }
    render() {
        return <div className = "collapse" id="collapseExample">
            <div className = "card card-body">
                {this.name} {this.stars} {this.reviews}
            </div>
        </div>
    };
}