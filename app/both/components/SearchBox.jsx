SearchBox = React.createClass({
  doSearch() {
    var query = ReactDOM.findDOMNode(this.refs.searchInput).value.toLowerCase();
    this.props.doSearch(query);
  },

  render() {
    return (
      <form className="morphsearch-form">
        <input className="morphsearch-input" type="text" ref="searchInput" placeholder="Search 61B..." value={this.props.query} onChange={this.doSearch} />
        <span className="morphsearch-submit">Search</span>
      </form>
    );
  }
});