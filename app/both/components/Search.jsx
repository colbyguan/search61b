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

  toggleHelp() {
    this.setState({showHelp: !this.state.showHelp});
  },

  render() {
    return (
      <div className="container">
        <div id="morphsearch" className="morphsearch">
          <span className={"morphsearch-close" + (this.state.showHelp ? " active" : "")} onClick={this.toggleHelp}>
            ?
            {this.state.showHelp ?
              <div className="help">
                Just start typing a term in the "Search..." box. All results are hyperlinks.
                You can search for related past CS61B labs, worksheets, lecture notes, and in the future, possibly
                Piazza posts, previous exams, and more.
                <div className="credits">Credits: got much of the styling from <a href="http://tympanus.net/codrops/2014/11/04/simple-morphing-search/">here</a></div>
              </div> : null}

          </span>
          <div id="coverup"></div>
          <SearchBox query={this.state.query} doSearch={this.doSearch} />
          <Results query={this.state.query} links={this.state.filteredData} />
          
        </div>
      </div>
    );
  }
});
