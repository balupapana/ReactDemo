import React from 'react';
import $ from "jquery";

export default class Ajax extends React.Component {
	constructor(){
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/users/',
			dataType: 'json',
			success: function(data) {
				console.log('old', data)
				this.setState({data: data});
			}.bind(this),
			error: function(error) {
				console.log(error)
				}.bind(this)
			});

/*		axios.get('https://jsonplaceholder.typicode.com/users/')
		.then((data)=>{
			console.log("axios data", data.data)
			this.setState({
				data:data.data
          })

		})*/
			
			}


	render () {
		console.log('new', this.state.data)
		return (
			<div>
			<h1>Ajax Old</h1>
			<table className="table-bordered table-hover">

			<thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Address</th>
                </tr>
              </thead>
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                     <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>                      
                       <td>{item.address.street}<br />{item.address.city}<br />
                       {item.address.zipcode}<br />
                       <span>{item.address.geo.lat}{item.address.geo.lng}</span></td>
                  </tr>
                )
             
             })}</tbody>
       </table>
       </div>
			);
	}
}