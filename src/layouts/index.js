import { PureComponent } from 'react';
import { Layout } from 'antd';
import SideMenu from '../components/Menu';
import Header from '../components/Header';
import config from 'config';
import { connect } from 'dva';

const { Footer, Sider, Content } = Layout;

class BasicLayout extends PureComponent {
  render() {
    const { global } = this.props;
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }} collapsed={global.collapsed}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <SideMenu {...this.props} />
        </Sider>
        <Layout>
          <Header {...this.props} />
          <Content style={{ margin: '24px 16px 0' }}>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              
            </div> */}
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>{config.copyright}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ global }) => ({
  global,
}))(BasicLayout);
