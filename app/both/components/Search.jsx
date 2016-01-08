Search = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      links: Links.find({}).fetch()
    }
  },

  getInitialState() {
    return {
      query: '',
      filteredData: null
    }
  },

  doSearch(query) {
    var result = [];

    this.data.links.forEach(function(link) {
      if (link.title.toLowerCase().indexOf(query) != -1) {
        result.push(link);
      }
    });

    this.setState({
      query: query,
      filteredData: result
    });
  },

  render() {
    return (
      <div className="container">
        <div id="morphsearch" className="morphsearch">
          <div id="coverup"></div>
          <SearchBox query={this.state.query} doSearch={this.doSearch} />
          <Results query={this.state.query} links={this.state.filteredData} />
        </div>
      </div>
    );
  }
});
