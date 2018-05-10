import socket from '../../websockets';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { allRepositories } from '../../actions'

import config from '../../config';
import RepositoryItem from './repository_item'

class RepositoriesList extends Component {

	componentDidMount() {
		socket.on('repos-update', this.props.allRepositories.bind(this));
		axios.get(`${config.baseServerUrl}/repos`)
			.then(res => this.props.allRepositories(res.data))
	}

	renderRepositoryItem () {
		return this.props.repos.map(repo => {
			return (
				<RepositoryItem
					key={repo._id}
					repo={repo}
					active={repo.hookEnabled}
				/>
			)
		})
	}

	render() {
		return (
			<ul className="dashboard__repository__list">
				{this.renderRepositoryItem()}
			</ul>
		)
	}
}

const mapStateToProps = ({ entities }) => ({
	repos: entities.repos
})

const mapDispatchToProps = (dispatch) => ({
	allRepositories: (repos) => dispatch(allRepositories(repos))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


