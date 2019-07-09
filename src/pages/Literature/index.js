import React from 'react';
import { connect } from 'dva/index';
import AdvancedSearchForm from '@/components/SearchForm';
import { Table } from 'antd';

class LiteratureIndex extends React.Component {
  constructor(props) {
    super(props);

    this.types = [
      '玄幻魔法',
      '武侠修真',
      '现代都市',
      '言情小说',
      '历史军事',
      '游戏竞技',
      '科幻灵异',
      '耽美小说',
      '同人小说',
      '其他小说',
    ];

    this.columns = [
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
        title: '分类',
        width: 100,
        dataIndex: 'type',
        key: 'type',
        render: text => <div>{this.types[text]}</div>,
      },
      {
        title: '简介',
        dataIndex: 'main',
        key: 'main',
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text, record, index) => {
          return (
            <div>
              <a href="javascript:;" onClick={() => this.update(record)} style={{ marginRight: 8 }}>
                更新信息
              </a>
              <a href="javascript:;" onClick={() => this.detail(record)} style={{ marginRight: 8 }}>
                详情
              </a>
            </div>
          );
        },
      },
    ];
  }

  update(record) {
    console.log(record);
  }

  detail(record) {
    console.log(record);
  }

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

  onChange() {
    document.querySelectorAll('.list_body')[0].scrollTop = 0;
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
          <Table
            columns={this.columns}
            dataSource={literature.list}
            scroll={{ x: 1500 }}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default connect(({ literature }) => ({
  literature,
}))(LiteratureIndex);
