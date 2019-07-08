import { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class SideMenu extends PureComponent {
  state = {
    openKey: '',
    selectedKey: '',
  };
  componentDidMount = () => {
    const path = this.props.location.pathname;
    this.setState({
      openKey: path.substr(0, path.lastIndexOf('/')),
      selectedKey: path,
    });
  };

  onClicks = e => {
    this.setState({
      selectedKey: e.key,
    });
  };

  onOpenChanges = e => {
    this.setState({
      openKey: e[e.length - 1],
    });
  };

  render() {
    const { global } = this.props;

    return (
      <Menu
        theme="dark"
        selectedKeys={[this.state.selectedKey]}
        openKeys={[this.state.openKey]}
        onClick={this.onClicks}
        onOpenChange={this.onOpenChanges}
        mode="inline"
      >
        {global.menuList.map(value =>
          value.childmenu.length === 0 ? (
            <Menu.Item key={value.url}>
              <Link to={value.url}>
                <Icon type={value.icon} />
                <span>{value.name}</span>
              </Link>
            </Menu.Item>
          ) : (
            <SubMenu
              key={value.url}
              title={
                <span>
                  <Icon type={value.icon} />
                  <span>{value.name}</span>
                </span>
              }
            >
              {value.childmenu.map((item, index) => {
                return (
                  <Menu.Item key={item.url}>
                    <Link to={item.url}>{item.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          )
        )}
      </Menu>
    );
  }
}

export default SideMenu;
