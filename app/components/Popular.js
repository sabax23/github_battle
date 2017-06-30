var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className='languages'> 
			{languages.map((lang) => {
				return (
					<li 
						style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}> 
						{lang} 
					</li>
				)
			})}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
		// initial state
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		// explicitly bind this in updateLanguage
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	// method to update initial state
	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang
			}
		});
	}
	// UI
	render() {
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)

	}
}


module.exports = Popular;