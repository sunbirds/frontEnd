
// define(['react'], function(React) {
// 		var CommentBox = React.createClass({
// 			render: function() {
// 				return ( 
// 					<div>kkkdsfsd
// 					</div>
// 				);
// 			}
// 		});


// 		return CommentBox;
// });
// tutorail1.js

define(['react'], function(React) {
 


	var CommentList = React.createClass({displayName: "CommentList",

		render: function() {

			return ( 
				React.createElement("div", {className: "commentList"}, 
					"list   lkdsjhlkf"
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




