import React from "react";
import TwitterCard from "./TwitterCard";
import "./list.css";

class List extends React.Component {

  handleChange = (event) => {
    this.props.handleSort(event);
  }

  // added an appropriate event and handler to the select tag
  // map over the result variable defined inside of the render method
  // and have it render a TwitterCard component for each object in the result
  // collection.
  // pass in the properties from each object:
  // handle, name, tweets, following, followers and profile.
  // I will need to assign a key prop to each instance of the TwitterCard component 
  // that is unique.
  render() {
    let { result } = this.props;
    const resultArray = result.map((elem, index) => 
    <TwitterCard 
          key={index}
          handle={elem.handle} 
          name={elem.name} 
          tweets={elem.tweets}
          following={elem.following}
          followers={elem.followers}
          profile={elem.profile} />
    )

    return (
      <>
        {result.length > 0 ? (
          <div>
            <label htmlFor="sortby">Sort By: </label>
            <select
              name="sortby"
              id="sortby"
              onChange = {this.handleChange}
            >
              <option value="select">Select...</option>
              <option value="name">Name</option>
              <option value="followers">Followers</option>
              <option value="tweets">Tweets</option>
            </select>
          </div>
        ) : null}
        <div className="output">
            {resultArray}
        </div>
      </>
    );
  }
}

export default List;










