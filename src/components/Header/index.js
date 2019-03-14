import { PureComponent } from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.css';
import RightContent from '@/components/RightContent';

class Header extends PureComponent {
	handleMenuCollapse = () => {
		this.props.dispatch({
			type: 'global/changeLayoutCollapsed',
		});
	};

	componentDidMount (){
    this.props.dispatch({
      type: "global/isLogin",
    })
	}

	render() {
		const { global } = this.props;
		return (
			<Layout.Header className={styles.header}>
				<span className={styles.trigger} onClick={this.handleMenuCollapse}>
					<Icon type={global.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</span>
				<RightContent
					{...this.props}
				/>
			</Layout.Header>
		)
	}
}

export default Header;
