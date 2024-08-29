import React from 'react'
import './category-page.css'
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'Mã',
    dataIndex: 'ma',
    key: 'ma',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'tendanhmuc',
    key: 'tendanhmuc',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'tinhtrang',
    key: 'tinhtrang',
  },
  {
    title: 'Sản phẩm',
    key: 'sanpham',
    dataIndex: 'sanpham',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <DeleteOutlined />
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    ma: 'TS-123',
    image: <FileImageOutlined />,
    tendanhmuc: 'Trà sữa',
    tinhtrang: 'Đang hoạt động',
    sanpham: 0,
  },
  
];

const Category = () => {
  return (
    <>
      <div className='category-page'>
        <div className='container'>
          <div className='text'>
            <p>Danh mục sản phẩm</p>
          </div>
          <Space>
            <Table columns={columns} dataSource={data} />
          </Space>
        </div>
      </div>
    </>
  )
}

export default Category