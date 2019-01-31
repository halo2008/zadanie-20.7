import React from 'react';

const Title = props =>
	<div>
		<h1>{props.title}</h1>
		<p>Task to complete: {props.numberOfTasks}</p>
	</div>;

export default Title;
