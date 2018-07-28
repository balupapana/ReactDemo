import React from 'react';
import $ from "jquery";

export default class Ajax extends React.Component{

	constructor(props){
		super(props);
		this.state={
			listOfContacts:[],
			enablemodal:false,
			selectedDeatils:[],
			selectedCompanyDetails:[]
		}
	}

	componentDidMount(){
		$.ajax({
		      url: 'https://jsonplaceholder.typicode.com/users/',
		      dataType: 'json',
		      success: function(data) {
			this.setState({listOfContacts: data});
		      }.bind(this),
		      error: function(error) {
				console.log(error)
		      }.bind(this)
		    });
	}

	itemClick(index){
		//console.log('Clicked Item: '+item);
		console.log('Clicked Item Id: '+index);
		this.setState({
			selectedDeatils:this.state.listOfContacts[index],
			selectedCompanyDetails:this.state.listOfContacts[index].company
		},()=>{
			console.log('Pushed Item',this.state.selectedDeatils);
			console.log('Pushed Company',this.state.selectedCompanyDetails);
		});
		console.log('selected Item',this.state.listOfContacts[index]);
		
	}

	render(){

		const listOfItems = this.state.listOfContacts.map((item,index) =>
			<tr key={index} onClick={this.itemClick.bind(this,index)}>
		        <td>{item.id}</td>
		        <td>{item.name}</td>
		        <td>{item.email}</td>
		        <td>{item.address.street+', ' +item.city+', ' +item.zipcode}</td>
		     </tr>

			);

		return (
			<div className="eachSampleContainer">
				
				<div className="left oneByTwoLeftSec">
					<div className="headerText">Ajax Data</div>
					<table className="fixedTable">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{this.state.listOfContacts.length ? listOfItems : <tr><td colSpan="4" className="text-center">No records found</td></tr>}
						</tbody>
					</table>
				</div>

				<div className="left oneByTwoLeftSec">
					<div className="headerText">Clicked Item details</div>
					<table className="fixedTable">
						<tbody>
							<tr>
								<th>Name</th>
								<td>{this.state.selectedDeatils.name}</td>
							</tr>
							<tr>
								<th>User Name</th>
								<td>{this.state.selectedDeatils.username}</td>
							</tr>
							<tr>
								<th>Phone</th>
								<td>{this.state.selectedDeatils.phone}</td>
							</tr>
							<tr>
								<th>Website</th>
								<td>{this.state.selectedDeatils.website}</td>
							</tr>
							<tr>
								<th>Company Name</th>
								<td>{this.state.selectedCompanyDetails.name}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="clear"></div>
			</div>
			);
	}
}