import React from 'react';

export default function Bomb(props){
	return (
		<div>
			<p>{props.count >= 8 ? 'Boom' : (props.count % 2 === 0 ? 'Tick' : 'Tock')}</p>
			<p>{props.count}</p>
		</div>
		)
}