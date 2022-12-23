import { PageHeader } from '@ant-design/pro-layout';
import React from 'react';
import { Card, Col, Row, Table, Space } from 'antd';
import { Link } from 'umi';

const Agreement = () => {
  const column = [
    {
      title: '序号',
      dataIndex: 'no',
      width: 100,
      render: (_t, _r, index) => <span>{index + 1}</span>,
    },
    {
      title: '项目编号',
      dataIndex: 'code',
      render: (text, record, index) => {
        return (
          <Space>
            <Link to={`/agreement/${record.id}/info`}>{record.text}</Link>
          </Space>
        );
      },
    },
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: '合同金额',
      dataIndex: 'money',
    },
    {
      title: '收入金额',
      dataIndex: 'get',
    },
  ];
  return (
    <PageHeader title="合同管理">
      <Card>
        <Row gutter={16} style={{ height: 'calc(100vh - 190px)' }}>
          <Col span={5} style={{ height: '100%' }}></Col>
          <Col span={19} style={{ height: '100%' }}>
            <Table columns={column} bordered={true} />
          </Col>
        </Row>
      </Card>
    </PageHeader>
  );
};

export default Agreement;
