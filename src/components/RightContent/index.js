import { PureComponent } from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import styles from './index.css';

class RightContent extends PureComponent {
  logout = () => {
    console.log('tuichu');
    this.props.dispatch({
      type: "global/logout",
    })
  }

  render() {
    const { global } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" />个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={this.logout}>
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={styles.right}>
        <Dropdown overlay={menu}>
          <a className={styles.action} href="#">
            <Avatar className={styles.avatar}>USER</Avatar>
            { global.userInfo.userName } <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default RightContent;
