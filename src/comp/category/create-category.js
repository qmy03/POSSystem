import { React, useState } from 'react';
import './create-category.css';
import {
    ArrowLeftOutlined, UndoOutlined, RedoOutlined, DownOutlined,
    AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined,
    BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined,
    CodeOutlined, ClearOutlined, UnorderedListOutlined, OrderedListOutlined,
    LinkOutlined, FileImageOutlined,
    InboxOutlined
} from '@ant-design/icons';
import { Input, Button, ColorPicker, Space, Select, message, Upload } from 'antd';
const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        console.log(info);
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const CreateCategory = () => {
    const [open, setOpen] = useState(false);

    const options = [
        { label: <AlignLeftOutlined />, value: 'align-left' },
        { label: <AlignCenterOutlined />, value: 'align-center' },
        { label: <AlignRightOutlined />, value: 'align-right' },
    ];

    const options1 = [
        { label: 'Đang hoạt động', value: 'Đang hoạt động' },
        { label: 'Ngoại tuyến', value: 'Ngoại tuyến' },
    ]

    return (
        <div className='create-category'>
            <div className='container'>
                <div className='frame'>
                    <Button className='item' icon={<ArrowLeftOutlined />} />
                    <p>Tạo danh mục sản phẩm</p>
                </div>
                <div className='content'>
                    <div className='content1'>
                        <p>Tên danh mục</p>
                        <Input placeholder='Ví dụ: Trà sữa, Nước ép' />
                        <div className='text-editor'>
                            <div className='menu-bar'>
                                <Button icon={<UndoOutlined />} />
                                <Button icon={<RedoOutlined />} />
                                <Space direction="vertical">
                                    <ColorPicker
                                        defaultValue="#212529"
                                        size='small'
                                        open={open}
                                        onOpenChange={setOpen}
                                        showText={() => (
                                            <DownOutlined
                                                rotate={open ? 180 : 0}
                                                style={{ fontSize: '12px' }}
                                            />
                                        )}
                                    />
                                </Space>
                                <Select
                                    defaultValue="align-left"
                                    size='small'
                                    style={{ width: 43 }}
                                    options={options}
                                />
                                <Button icon={<BoldOutlined />} />
                                <Button icon={<ItalicOutlined />} />
                                <Button icon={<UnderlineOutlined />} />
                                <Button icon={<StrikethroughOutlined />} />
                                <Button icon={<CodeOutlined />} />
                                <Button icon={<ClearOutlined />} />
                                <Button icon={<UnorderedListOutlined />} />
                                <Button icon={<OrderedListOutlined />} />
                                <Button icon={<LinkOutlined />} />
                                <Button icon={<FileImageOutlined />} />
                            </div>
                            <div className='contents-area'>
                                <TextArea rows={4} />
                            </div>
                        </div>
                    </div>
                    <div className='content2'>
                        <div className='frame1'>
                            <p>Trạng thái</p>
                            <Space>
                                <Select
                                    defaultValue="Đang hoạt động"
                                    size='middle'
                                    style={{ maxWidth: 360, }}
                                    options={options1}
                                />
                            </Space>
                        </div>
                        <div className='frame2'>
                            <p>Hình ảnh</p>
                            <Space>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <FileImageOutlined style={{ fontSize: '30px', maxWidth: '326px', justifyContent: 'center' }} />
                                    </p>
                                    <p className="ant-upload-hint">Thêm hình ảnh</p>
                                </Dragger>
                            </Space>
                        </div>
                    </div>
                </div>
                <div className='action-box'>
                    <Button>Hủy bỏ</Button>
                    <Button>Tạo</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;
