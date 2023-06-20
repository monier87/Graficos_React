import React, { useEffect, useState } from 'react';
import { DollarCircleOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Typography, Space, Statistic, Table } from 'antd';
import getOrders from '../API/API';

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={5}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Ordenes"
          value={12345}
        />
        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Inventario"
          value={12345}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Usuarios"
          value={12345}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Renovaciones"
          value={12345}
        />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
    
  );
}
function RecentOrders(){
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading]= useState(false)


  useEffect(() => {
    setLoading(true)
    getOrders().then((res)=>{
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);


  return (
  <Table   
  columns={[
    {
      title: "Descripcion",
      dataIndex: "title",
    },
    {
      title: "Cantidad",
      dataIndex: "quantity",
    },
    {
      title: "Precio",
      dataIndex: "discountedPrice",
    },
  ]}
  loading={loading}
  dataSource={dataSource}
  >
   
  </Table>
  )
}


export default Dashboard;
