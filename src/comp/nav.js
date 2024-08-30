import React from 'react';
import './nav.css';
import { HomeOutlined, AppstoreOutlined, TagOutlined, UserOutlined, SunOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        key: 'sub1',
        label: <Link to="/home">Trang chủ</Link>,
        icon: <HomeOutlined />,
    },
    {
        key: 'sub2',
        label: <Link to="/category/category-page">Danh mục sản phẩm</Link>,
        icon: <AppstoreOutlined />,
    },
    {
        key: 'sub3',
        label: <Link to="/product/empty-product">Sản phẩm</Link>,
        icon: <TagOutlined />,
    }
];

const Nav = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div className="aside">
                <div className="name">
                    <h1>POS</h1>
                </div>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 235,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    theme="light"
                />

                {/* <div className="item-container">
                    <div className="item">
                        <div className="icon">
                            <div className="icon-bg"><HomeOutlined /></div>
                        </div>
                        <div className="text">Trang chủ</div>
                    </div>
                    <div className="item active">
                        <div className="icon">
                            <div className="icon-bg active-bg"><AppstoreOutlined /></div>
                        </div>
                        <div className="text">Danh mục sản phẩm</div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <div className="icon-bg"><TagOutlined /></div>
                        </div>
                        <div className="text">Sản phẩm</div>
                    </div>
                </div> */}
            </div>
            <div className='header'>
                <div className='user'>
                    <img src='../image/avatar.png'></img>
                    <p>FULLNAME</p>
                </div>
                <div className='item-container'>
                    <Button className='item' icon={<UserOutlined />} />
                    <Button className='item' icon={<SunOutlined />} />
                    <Button className='item' icon={<LogoutOutlined />} />
                </div>
            </div>
        </>
    );
};

export default Nav;
