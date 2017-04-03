import React from 'react'


const styles= {
	textbox: {
  	width:343,
  	marginLeft:18,
  	height:35,
  	fontSize:18,
  	paddingLeft:17,
  	color:'rgb(109,109,109)',
  	backgroundColor:'white',
  	border:'1px solid rgb(217,217,217)',
  	listStyleType:'none',
  	marginLeft:-22,
  	paddingTop:5,
  	boxShadow:(10, 10, 5, 888888)
   },
  checkbox: {
  	marginLeft:-10,
    marginRight:20,
  },
  button: {
  	float:'right',
  	marginTop:-1,
    border:'none',
    backgroundColor:'white',
    color:'rgb(207,159,158)',
    fontSize:17,
  },
}

export default React.createClass({
	handleClick(e) {
		e.preventDefault()
		this.props.deleteItem(this.props.id)
	},
	render() {
		return (
			<li  style={styles.textbox} key={this.props.id}>
				<input style={styles.checkbox} type="checkbox" id={this.props.id} />
				<label htmlFor={this.props.id}>{this.props.title}</label>
				<button style={styles.button} onClick={this.handleClick}>X</button>
			</li>
		)
	}
})