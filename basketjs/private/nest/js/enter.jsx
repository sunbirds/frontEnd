
	require(['react'], function(React) {
		require(['comment'],function(Commentbox){
			var Enter = React.createClass({
				render: function() {
					return (
						<div>
							cdsfd
							<Commentbox />
						</div>
					);
				}
			});

			React.render(<Enter />,document.getElementById('content'));
		});
	});
