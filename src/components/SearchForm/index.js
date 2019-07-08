/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';

const { Option } = Select;

class SearchForm extends React.Component {
  state = {
    expand: false,
  };

  getFields() {
    const count =
      this.props.searchForm.length > 6
        ? this.state.expand
          ? this.props.searchForm.length
          : 6
        : this.props.searchForm.length;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < this.props.searchForm.length; i++) {
      if (this.props.searchForm[i].type === 'input') {
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <Form.Item label={this.props.searchForm[i].name}>
              {getFieldDecorator(this.props.searchForm[i].fields, {})(
                <Input placeholder={this.props.searchForm[i].placeholder} />
              )}
            </Form.Item>
          </Col>
        );
      } else if (this.props.searchForm[i].type === 'select') {
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <Form.Item label={this.props.searchForm[i].name}>
              {getFieldDecorator(this.props.searchForm[i].fields, {})(
                <Select placeholder={this.props.searchForm[i].placeholder}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        );
      }
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.getData(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch} className="ant_advanced_search_form">
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a
              style={{
                marginLeft: 8,
                fontSize: 12,
                display: this.props.searchForm.length > 6 ? 'block' : 'none',
              }}
              onClick={this.toggle}
            >
              {this.state.expand ? '关闭' : '展开'}
              <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

const AdvancedSearchForm = Form.create({ name: 'advanced_search' })(SearchForm);

export default AdvancedSearchForm;
