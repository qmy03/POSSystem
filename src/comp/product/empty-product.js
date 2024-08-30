import React from 'react'
import './empty-product.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

const EmptyProduct = () => {
    const navigate = useNavigate();
    const handleCreateProduct = () => {
        navigate('/product/create-product');
    };
    return (
        <>
            <div className='empty-product'>
                <div className='container'>
                    <div className='text'>
                        <p>Sản phẩm</p>
                    </div>
                    <div className='content'>
                        <div className='icon'>
                            <img src='../image/personalized.png'></img>
                        </div>
                        <div className='message'>
                            <p className='title'>Chưa có sản phẩm</p>
                            <p className='subtitle'>Hãy thêm những sản phẩm mà khách hàng sẽ yêu thích vào cửa hàng của bạn</p>
                        </div>
                        <Button type='primary' onClick={handleCreateProduct}>Thêm sản phẩm</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmptyProduct