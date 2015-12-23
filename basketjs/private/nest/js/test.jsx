

var React = require('react');


module.exports = React.createClass({

  render: function() {
    return (
        <html>
          <head>
          </head>
          <body>
            <div
              id="app"
              dangerouslySetInnerHTML={{__html: this.props.markup}}>
            </div>
          </body>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script>
          </script>
        </html>
      )
  }

});
