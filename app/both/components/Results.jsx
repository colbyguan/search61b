/**
 * Always render in 3 columns with left-to-right priority
 * If nothing is in the search box, choose 10 random links
 */
Results = React.createClass({
  statics: {
    defaultLength: 15,
    defaultSlice1: 5,
    defaultSlice2: 10 
  },

  render() {
    var rows = [[], [], []];
    
    // http://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
    if (this.props.links != null && this.props.query == '') {
      var n = Results.defaultLength;
      var arr = this.props.links;
      result = new Array(n);
      var len = arr.length;
      var taken = new Array(len);

      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
      }
      rows[0] = result.slice(0, Results.defaultSlice1).map(linkToHTML);
      rows[1] = result.slice(Results.defaultSlice1, Results.defaultSlice2).map(linkToHTML);
      rows[2] = result.slice(Results.defaultSlice2, Results.defaultLength).map(linkToHTML);
    }
    else if (this.props.links != null) {
      var len = this.props.links.length;
      var slice1 = Math.ceil(len/3);
      var slice2 = Math.ceil(len * 2/3);
      rows[0] = this.props.links.slice(0, slice1).map(linkToHTML);
      rows[1] = this.props.links.slice(slice1, slice2).map(linkToHTML);
      rows[2] = this.props.links.slice(slice2, len).map(linkToHTML);
    }

    return (
      <div className="morphsearch-content">
        <div className="dummy-column">
          {rows[0]}
        </div>
        <div className="dummy-column">
          {rows[1]}
        </div>
        <div className="dummy-column">
          {rows[2]}
        </div>
      </div>
    );
  }
});

function linkToHTML(link) {
  return <a className="dummy-media-object" href={link.url} key={link._id}>
         <img className="round" src="/magnifier.svg" alt={link.semester}/>
         <h3>{link.title}</h3></a>
}
