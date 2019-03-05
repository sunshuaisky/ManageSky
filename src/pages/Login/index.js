import React from 'react';
import styles from './index.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import config from 'config';
import { connect } from 'dva/index';

const FormItem = Form.Item;

class loginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "login/loading",
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: "login/login",
          payload: values,
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { login } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logoPath} />
          <span>{config.siteName}</span>
        </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('passWord', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem className="margin0">
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" loading={login.loading} className={styles.login_form_button}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(loginForm);

export default connect(({ login }) => ({
  login,
}))(Login);
