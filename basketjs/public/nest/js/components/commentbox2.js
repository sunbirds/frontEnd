

define(['react'], function(React) {
 


	var CommentList = React.createClass({displayName: "CommentList",

		render: function() {

			return ( 
				React.createElement("div", {className: "commentList"}, 
					"list   lkdsjhlkfentFormCommentFormCommentFormentFormCommentFormCommentFormentFormCommentFormCommentForm"
				)
			);
		}
	});

	var CommentForm = React.createClass({displayName: "CommentForm",

		render: function() {
			return (
				React.createElement("div", null, 
					"CommentFormCommentFormCommentForm"
				)
			);
		}
	});

	var CommentBox = React.createClass({displayName: "CommentBox",
		render: function() {
			return ( 
				React.createElement("div", {className: "commentBox"}, 
					React.createElement("h1", null, "Comments"), 
					React.createElement(CommentList, null), 
					React.createElement(CommentForm, null), 
					React.createElement(CommentForm, null)
				)
			);
		}
	});


	return CommentBox;

});




