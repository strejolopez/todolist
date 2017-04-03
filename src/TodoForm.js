import React from 'react'

const styles= {
	textbox: {
  	width:343,
  	marginLeft:18,
  	height:35,
  	fontSize:18,
  	paddingLeft:37,
  	color:'rgb(109,109,109)'
  }
}

export default React.createClass({
	getInitialState() {
		return {
			task:''
		}

	},
	handleSubmit(e) {
		e.preventDefault()
		this.props.updateList(this.state.task)
		this.setState({
			task: ''
		})
	},
	handleChange(e) {
		this.setState({
			task:e.target.value
		})
	},
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input style={styles.textbox} type="text" placeholder="What needs to be done?" value={this.state.task} onChange={this.handleChange} />
			</form>
		)
	}
})