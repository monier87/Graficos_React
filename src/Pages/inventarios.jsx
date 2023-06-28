import { Space, Typography, Table, Rate, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { getInventory } from '../API/API';

function Inventario() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={5}>Inventario</Typography.Title>
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={[
          {
            title: 'Miniatura',
            dataIndex: 'thumbnail',
            render:(link)=>{
              return <Avatar src={link} />;
            },
          },
          {
            title: 'Descripción',
            dataIndex: 'title',
          },
          {
            title: 'Precio',
            dataIndex: 'price',
            render:(value)=><span>${value}</span>,
          },
          {
            title: 'Clasificación',
            dataIndex: 'rating',
            render: (rating)=>{
              return <Rate value={rating} allowHalf disabled/>
            }
          },
          {
            title: 'Existencia',
            dataIndex: 'stock',
          },
          {
            title: 'Marca',
            dataIndex: 'brand',
          },
          {
            title: 'Categoría',
            dataIndex: 'category',
          },
        ]}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Inventario;
