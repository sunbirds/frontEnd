
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
 


	var CommentList = React.createClass({

		render: function() {

			return ( 
				<div className = "commentList" >
					list   lkdsjhlkf
				</div>
			);
		}
	});

	var CommentForm = React.createClass({

		render: function() {
			return (
				<div>
					CommentFormCommentFormCommentForm
				</div>
			);
		}
	});

	var CommentBox = React.createClass({
		render: function() {
			return ( 
				<div className = "commentBox" >
					<h1>Comments</h1>
					<CommentList />
					<CommentForm />
					<CommentForm />
				</div>
			);
		}
	});


	return CommentBox;

});




