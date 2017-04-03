import React from 'react'
import ListItem from './ListItem'

const styles={
	forms: {
		marginTop:'auto',
		boxShadow:10,
	}
}

export default React.createClass({
	getDefaultProps() {
		return {
			items: []
		}
	},
	render() {
		return (
			<ul style={styles.forms}>
				{this.props.items.map(item=>(
					<ListItem deleteItem={this.props.deleteItem} {...item} />
					))}
			</ul>
		)
	}
})