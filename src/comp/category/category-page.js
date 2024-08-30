import React, { useState } from 'react';
import './category-page.css';
import { Space, Table, Button, Modal } from 'antd';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router'

// Khai báo hàm `showDeleteConfirm` trong phạm vi của component
const Category = () => {
  const navigate = useNavigate();
  const handleCreateCategory = () => {
    navigate('/category/create-category');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteKey, setDeleteKey] = useState(null);

  const showDeleteConfirm = (key) => {
    setDeleteKey(key);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    // Xử lý xóa danh mục dựa trên deleteKey
    console.log(`Danh mục với key ${deleteKey} đã được xóa`);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'ma',
      key: 'ma',
      width: 80,
      render: (text) => <a>{text}</a>,
    },
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      width: 50,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'tendanhmuc',
      key: 'tendanhmuc',
      width: 200,
    },
    {
      title: 'Sản phẩm',
      key: 'sanpham',
      dataIndex: 'sanpham',
      width: 150,
    },
    {
      title: 'Tình trạng',
      dataIndex: 'tinhtrang',
      key: 'tinhtrang',
      width: 150,
    },
    {
      title: '',
      key: 'action',
      width: 40,
      render: (_, record) => (
        <Space size="middle">
          <DeleteOutlined onClick={() => showDeleteConfirm(record.key)} />
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

  return (
    <>
      <div className='category-page'>
        <div className='container'>
          <div className='text'>
            <p>Danh mục sản phẩm</p>
            <Button type="primary" onClick={handleCreateCategory}>Tạo danh mục</Button>
          </div>
          <Space>
            <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 945 }} />
          </Space>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div className="custom-modal-footer" key="footer">
            <Button key="back" onClick={handleCancel}>
              Hủy
            </Button>
            <Button key="submit"
                    type="primary"
                    style={{
                      backgroundColor: '#B91C1C',
                      color: '#FECACA',
                    }}
                    danger onClick={handleDelete}>
              Xóa
            </Button>
          </div>
        ]}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img
            src="../image/bin.png"
            alt="warning"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <p style={{ textAlign: 'center', fontWeight: 600, color: '#1F2937' }}>Bạn có chắc chắn muốn xóa danh mục này không?</p>
        <p style={{ textAlign: 'center', color: '#1F2937' }}>Thao tác này không thể hoàn tác.</p>
      </Modal>
    </>
  );
};

export default Category;
