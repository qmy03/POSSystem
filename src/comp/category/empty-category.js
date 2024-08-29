import React from 'react'
import './empty-category.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

const EmptyCategory = () => {
  const navigate = useNavigate();
  const handleCreateCategory = () => {
    navigate('/category/create-category');
  };
  return (
    <>
      <div className='empty-category'>
        <div className='container'>
          <div className='text'>
            <p>Danh mục sản phẩm</p>
          </div>
          <div className='content'>
            <div className='icon'>
              <img src='../image/emptystate.png'></img>
            </div>
            <div className='message'>
              <p className='title'>Chưa có danh mục sản phẩm</p>
              <p className='subtitle'>Sử dụng danh mục để nhóm các sản phẩm của bạn</p>
            </div>
            <Button type='primary' onClick={handleCreateCategory}>Tạo danh mục</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyCategory