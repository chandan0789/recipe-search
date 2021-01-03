import React from 'react';
import './App.css'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import axios from 'axios';
import List from './components/List';
import { AppId, ApiKey } from './ApiKey';

const api = {
  appId: AppId,
  apikey: ApiKey,
  base: "https://api.edamam.com/search?q="
}


class App extends React.Component {
  // const[query, setQuery] = useState();
  // const[recipe, setRecipe] = useState({ });
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      recipes: []
    }
    this.search = React.createRef();
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.search.current.innerHTML = "searching...";
    axios.get(`${api.base}${this.state.query}&app_id=${api.appId}&app_key=${api.apikey}`)
      .then(response => {
        this.setState({
          recipes: response.data,
          query: ''
        })
      })
      .catch(err => console.log(err))
    this.search.current.innerHTML = "Search";
  }
  render() {
    return (
      <div className="App">
        <div className="header-app">
          <Header />
          <div className="search-box">
            <h1>Enter the ingredient to search...</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Enter ingredient.." />
              <button type="submit" ref={this.search}>Search</button>
            </form>
          </div>
          {typeof this.state.recipes.hits != 'undefined' ? <div className="slide"><h4>Slide Down</h4><p> > </p></div> : ""}
        </div>

        <div className="data">
          {typeof this.state.recipes.hits != 'undefined' ? this.state.recipes.hits.map(recipe => <List item={recipe} key={recipe.recipe.label} />) : ''}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
