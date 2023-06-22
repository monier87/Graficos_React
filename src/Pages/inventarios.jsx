import { Space, Typography, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getInventory } from '../API/API';

function Inventario() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then(res => {
      setDataSource(res.products);
    });
  }, []);

  return (
    <Space size={20}>
      <Typography.Title level={5}>Inventario</Typography.Title>
      <Table
        dataSource={dataSource}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
        ]}
      />
    </Space>
  );
}

export default Inventario;
