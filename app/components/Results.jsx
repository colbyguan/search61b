Results = React.createClass({
  render() {
    var rows;
    console.log("links: " + this.props.links);
    if (this.props.links != null && this.props.query == '') {
      var n = 15;
      var arr = this.props.links;
      result = new Array(n);
      var len = arr.length;
      var taken = new Array(len);

      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
      }
      rows = result.map((link) => {
        return <li key={link._id}><a href={link.url}>{link.title}</a></li>
      });
    } else if (this.props.links != null) {
      rows = [];

      this.props.links.forEach((link) => {
        rows.push(<li key={link._id}><a href={link.url}>{link.title}</a></li>);
      });
    }

    return (
      <ul>
        {rows}
      </ul>
    );
  }
});