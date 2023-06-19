import React from 'react';
import { MailOutlined, BellFilled } from "@ant-design/icons";
import footerImage from '../../assets/footer.jpg';
import { Space, Typography, Badge } from 'antd';

function AppHeader() {
  return (
    <div className='AppHeader'>
      <img width={40} src={footerImage} alt='Footer' />
      <div className='title-container'>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>Dashboard de Gráfico</Typography.Title>
      </div>
      <Space className='icons-container'>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
