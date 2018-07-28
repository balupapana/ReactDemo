import React, { Component } from 'react';

export default class FormOne extends Component {

	constructor () {
	super ();
	this.state = {
		name: 'Balu Papana',
		location: 'guntur',
		//newName:'',
		newLocation: ''
	}

this.handleNameChange = this.handleNameChange.bind(this);
this.handleLocationChange = this.handleLocationChange.bind(this);
}

handleNameChange(event) {
	this.setState ({
		name: event.target.value
		
		});
	};
handleLocationChange(event) {
	this.setState ({
		location: event.target.value
	},()=>{

		this.state.newLocation = this.state.location;
			
		});

};
	render () {

		this.state.newName = this.state.name;
		
	 return (
	 	<div class="container-fluid">
	 	<h2>Horizontal Form</h2>

	 	<input type="text" placeholder="enter name"  value={this.state.name} onChange={this.handleNameChange}/>

	 	<h3>{this.state.name}</h3>
	 	<h1>Updated Name: <span>{this.state.newName}</span></h1>
	 	<input type="text" placeholder="enter location" value={this.state.location} onChange={this.handleLocationChange}/>
	 	<h3>{this.state.location}</h3>
	 	<h1>Updated Location: <span>{this.state.newLocation}</span></h1>
	 		 	</div>
	 	);
	 }
}