import { PageHeader } from "@ant-design/pro-layout";
import React from "react";
import { Card, Table } from "antd";

const Agreement = () => {
  const column = [
    {
      title: '序号',
      dataIndex: 'no',
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
    <PageHeader title='合同管理'>
      <Card >
        <Table columns={column}/>
      </Card>
    </PageHeader>
  );
};

export default Agreement;