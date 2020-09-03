import React, { Component, useCallback } from "react";
import twitter from "../assets/twitter.png";
import List from "./List";
import "./twitter.css";

class Twitter extends Component {

  // this component should have the following props:
  // handleSubmit, handleChange and state.
  // the state should have the following properties and initial values:
  //loading (which is false), query (which is an empty string) and userList (which is an empty Array)
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    
    this.state = {
      loading: false,
      query: "",
      userList: []
    }
    
  }

  // the handleSubmit handler should make a get request from 'http://localhost:4000/api/users/{query}'
  handleSubmit = () => {
    fetch(`http://localhost:4000/api/users/${this.state.query}`).then(
      (info) => info.json())
    .then((info) => 
        this.setState({
          userList:info.data
        })
      
    )
  }


  // sorting by Name option they should appear in alphabetical order
  // sortings by tweets option they should appear in descending order (highest number
  // of tweets should appear first)
  // sorting by followers option they should appear in descending order (highest number
  // of followers should appear first)
  handleSort(sorter) {
    
    if (sorter.target.value === 'name'){
      this.state.userList.sort((a,b) => {
        if (a.name < b.name) {
          return -1;
        }
        else if (a.name > b.name) {
          return 1;
        }
        else {
          return 0;
        }
      })

      this.setState({
        userList:this.state.userList
      })
    }

    else if (sorter.target.value === 'followers'){
     
      this.state.userList.sort((a,b) => b.followers - a.followers);

      this.setState({
        userList:this.state.userList
      })
    }

    else if (sorter.target.value === 'tweets'){
      
      this.state.userList.sort((a,b) => b.tweets - a.tweets);

      this.setState({
        userList:this.state.userList
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value //make e the string
    })
  }


  render() {
    return (
      <div className="App">
        <article className="App-header">
          <img src={twitter} className="logo" alt="logo" />
          <p>Search for users on Twitter:</p>
          <div className="search-container">
            <input
              type="text"
              name="search"
              id="search"
              className="search-box"
              placeholder="Type text here"
              onChange = {this.handleChange}
            />
            <button className="search-button" onClick = {this.handleSubmit}>
              Search
            </button>
          </div>
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : this.state.userList === [] ? (
            <h3>No Users Found</h3>
          ) : (
            <>
              <List handleSort = {this.handleSort} result = {this.state.userList}/>
            </>
          )}
        </article>
      </div>
    );
  }
}

export default Twitter;
















