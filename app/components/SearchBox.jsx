SearchBox = React.createClass({
  doSearch() {
    var query = ReactDOM.findDOMNode(this.refs.searchInput).value.toLowerCase();
    console.log(query);
    this.props.doSearch(query);
  },

  render() {
    return (
      <input className="new-task" type="text" ref="searchInput" placeholder="Search terms" value={this.props.query} onChange={this.doSearch} />
    );
  }
});