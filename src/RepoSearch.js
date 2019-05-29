import React from "react";
import { connect } from "react-redux";
function RepoSearch(props) {
  return (
    <div>
      <h1>Repo Search</h1>
      <form
        onSubmit={event => props.handleSubmit(event, props.searchInputValue)}
      >
        <input
          value={props.searchInputValue}
          onChange={props.handleRepoSearch}
        />
      </form>
      <p>{props.searchInputValue}</p>
      <ul>
        {props.repos.map(repo => {
          return (
            <li key={repo.id} href={repo.html_url}>
              {repo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchInputValue: state.searchInputValue,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRepoSearch: event => {
      dispatch({ type: "REPOSEARCH", value: event.target.value });
    },
    handleSubmit: (event, query) => {
      event.preventDefault();
      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          dispatch({ type: "SET_REPO", repos: data.items });
        });
    }
  };
};
// const mapDispatch = () => {
//     return {

//     }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
