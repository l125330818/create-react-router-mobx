/**
 * Created by luojie on 2018/3/12.
 * 按需加载处理逻辑。
 */
import React, { Component } from 'react';

export default class Bundle extends React.Component {

	state = {
		mod: null
	}
	static defaultProps = {
		isLogin: false,
	}
	componentWillMount() {
		this.load(this.props)
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
			mod: null
		})
		props.load((mod) => {
			this.setState({
				mod: mod.default ? mod.default : mod
			})
		})
	}

	render() {
		if (!this.state.mod)
			return false
		return this.props.children(this.state.mod)
	}
}