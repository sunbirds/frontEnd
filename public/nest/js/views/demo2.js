define(['react','comment'], function(React,Commentbox) {

    var Enter = React.createClass({displayName: "Enter",
        render: function() {
            return (
                React.createElement("div", null, 
                    "demo2demo2demo2demo2demo2demo2demo2demo2", 
                    React.createElement(Commentbox, null)
                )
            );
        }
    });

    return Enter;

    

});
//@ sourceURL=demo.js