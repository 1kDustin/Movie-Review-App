import React from 'react';
import createComments from './createComments';

export default class Reviews extends React.Component {
    constructor(props){
        super(props); 
        this.title = this.props.title;
        this.body = this.props.body;
        this.movieName = this.props.movieName;
        this.imageUrl = this.props.imageUrl // https://cdn3.movieweb.com/i/article/1wGSR78PMsJoRpOYfGYm7kQUihFGdH/1200:100/The-Other-Guys-10th-Anniversary-Restrospective.jpg
        this.thoughts = this.props.thoughts;
        this.leaveReview = false;
        this.setLeaveReview = this.setLeaveReview.bind(this);
        this.pullAPI = this.pullAPI.bind(this);
        this.state = {
           Comments: [
            {
                "movieName": "Test",
                "stars": "5",
                "name": "Dylan",
                "review": "Dylan"
            }
           ]   
        };
    }
    setLeaveReview() {
        this.leaveReview = !this.leaveReview;
        this.setState({});
    }
    pullAPI() {
            // Code to GET 
            // https://moviereviewlist.herokuapp.com/api/comments?movieName=Test
            let myHeaders = new Headers();
            let apiOptions_getComments = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            let apiUrl = "https://moviereviewlist.herokuapp.com/api/comments?movieName=" + "Test Movie 4"
            myHeaders.append("Content-Type", "application/json");
            fetch(apiUrl, apiOptions_getComments)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => console.log('error', error));
        }
    componentDidMount(){
        this.pullAPI()
    }
    render() {
        return <div className="container" style={ {backgroundImage: 'https://www.pngjoy.com/pngm/7/245519_film-reel-film-strip-transparent-background-png-download.png'}}>
                <div className="card promoting-card">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h4 className="card-title font-weight-bold mb-2">{this.title}</h4>
                                <div className="rating">
                                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                </div>
                        </div>
                        <div className="card-body d-flex flex-row">
                        <button onClick = {() => this.setLeaveReview()} className="btn btn-primary">Leave Review</button>
                        </div>
                    </div>
                    <div className="view overlay">
                        <img className="card-img-top rounded-0" src={this.imageUrl} alt="Card image cap"></img>
                            <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                    </div>
                    <div className="card-body">
                    {!this.leaveReview ? <div><p>
                            <a className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                {this.body}
                            </a>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                {this.thoughts}
                            </div>
                        </div></div> : <createComments />}
                    </div>
                    </div>
                </div>
    }
}