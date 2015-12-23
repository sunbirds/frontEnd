define(['react','comment'], function(React,Commentbox) {

    var Enter = React.createClass({displayName: "Enter",
        render: function() {
            return (
                React.createElement("div", null, 
                    "cdsfd", 
                    React.createElement(Commentbox, null)
                )
            );
        }
    });

    return Enter;

    

});
//@ sourceURL=demo.js