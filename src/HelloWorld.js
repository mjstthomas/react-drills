import React from 'react'

export default function HelloWorld(props){
	return (
		<div>
			<p>Hello, {props.who}</p>
	        <button onClick={props.onClick} value="World">World</button>
	        <button onClick={props.onClick} value="Friend">Friend</button>
	        <button onClick={props.onClick} value="React">React</button>
		</div>
	)
}
