import React from 'react';
import { connect } from 'dva/index';
import AdvancedSearchForm from '@/components/SearchForm';
import { Table } from 'antd';

const columns = [
  {
    title: '名称',
    width: 200,
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '作者',
    width: 100,
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '简介',
    dataIndex: 'main',
    key: 'main',
  },
  {
    title: '分类',
    width: 100,
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">action</a>,
  },
];

class LiteratureIndex extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'literature/getList',
      payload: {
        limit: {},
      },
    });
  }

  search(values) {
    this.props.dispatch({
      type: 'literature/getList',
      payload: {
        limit: values,
      },
    });
  }

  render() {
    const { literature } = this.props;
    console.log(literature);
    return (
      <div className="list_body">
        <div style={{ padding: 24, background: '#fff' }}>
          <AdvancedSearchForm {...literature} getData={this.search.bind(this)} />
        </div>
        <div style={{ padding: 24, background: '#fff', marginTop: 20 }}>
          <Table columns={columns} dataSource={literature.list.data} scroll={{ x: 1500 }} />
        </div>
      </div>
    );
  }
}

export default connect(({ literature }) => ({
  literature,
}))(LiteratureIndex);
