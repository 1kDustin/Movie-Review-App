import React from 'react';
import Navbar from './components/navbar';
import ReviewList from './components/reviewList';
import Comments from './components/createComments';

function App() {
  return (
    <div className="App">
    <Navbar />,
    <h2 className="title">Movie Reviews</h2>

    <ReviewList 
    title="The Other Guys" 
    body="Read Reviews" 
    imageUrl="https://cdn3.movieweb.com/i/article/1wGSR78PMsJoRpOYfGYm7kQUihFGdH/1200:100/The-Other-Guys-10th-Anniversary-Restrospective.jpg" 
    thoughts="This movie is probably one of my favorite movies as far as comedy goes. It is packed with tons of dry humor along with the obliviousness of Det. Allen Gamble plays so well together. In our opinion this movie will surely
    make you laugh your butt off!"
    movieName = "Test"
    />
    </div>
  );
}

export default App;