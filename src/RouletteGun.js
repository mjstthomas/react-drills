import React from 'react';


function RouletteGun(props){
	return (
		<div>
			<p>{props.spinning ? 'spinning the chamber and pulling the trigger!': (props.chamber === props.randomChamber ? 'Bang' : "You're Safe")}</p>
			<button onclick={props.clickHandle}>Pull the trigger!</button>
		</div>
	)

}

export default RouletteGun