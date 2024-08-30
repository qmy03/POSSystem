import React, { useState } from 'react'
import './create-product.css'
import {
  ArrowLeftOutlined, UndoOutlined, RedoOutlined, DownOutlined,
  AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined,
  BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined,
  CodeOutlined, ClearOutlined, UnorderedListOutlined, OrderedListOutlined,
  LinkOutlined, FileImageOutlined,
  UploadOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Input, Button, ColorPicker, Space, Select, message, Upload, Checkbox } from 'antd';
import { useNavigate } from 'react-router';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';

const { Dragger } = Upload;
const onChange = (e) => {
  console.log('checked = ${e.target.checked}');
};

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
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

const CreateProduct = () => {
  const navigate = useNavigate();
  const handleCategory = () => {
    navigate('/category/category-page');
  };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const [showProductOption, setShowProductOption] = useState(false);

  const options = [
    { label: <AlignLeftOutlined />, value: 'align-left' },
    { label: <AlignCenterOutlined />, value: 'align-center' },
    { label: <AlignRightOutlined />, value: 'align-right' },
  ];

  const options1 = [
    { label: 'Đang hoạt động', value: 'Đang hoạt động' },
    { label: 'Ngoại tuyến', value: 'Ngoại tuyến' },
  ];

  const handleFormat = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleProductChange = (value) => {
    if (value === '1') {
      setShowProductOption(true);
    }
    else {
      setShowProductOption(false);
    }
  };

  return (
    <>
      <div className='create-product'>
        <div className='container'>
          <div className='frame'>
            <Button className='item' icon={<ArrowLeftOutlined />} />
            <p>Thêm sản phẩm</p>
          </div>
          <div className='content'>
            <div className='content1'>
              <div className='frame1'>
                <p>Tên sản phẩm</p>
                <Input placeholder='Ví dụ: Trà sữa thái xanh, Nước ép dưa hấu, Áo thun cầu lông' />
                <p>Mô tả</p>
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
                    <Button icon={<BoldOutlined />} onClick={() => handleFormat('BOLD')} />
                    <Button icon={<ItalicOutlined />} onClick={() => handleFormat('ITALIC')} />
                    <Button icon={<UnderlineOutlined />} onClick={() => handleFormat('UNDERLINE')} />
                    <Button icon={<StrikethroughOutlined />} onClick={() => handleFormat('STRIKETHROUGH')} />
                    <Button icon={<CodeOutlined />} onClick={() => handleFormat('CODE')} />
                    <Button icon={<ClearOutlined />} />
                    <Button icon={<UnorderedListOutlined />} />
                    <Button icon={<OrderedListOutlined />} />
                    <Button icon={<LinkOutlined />} />
                    <Button icon={<FileImageOutlined />} />
                  </div>
                  <div className='editor-container' style={{ fontSize: '14px' }}>
                    <Editor
                      editorState={editorState}
                      onChange={setEditorState}
                    />
                  </div>
                </div>
              </div>
              <div className='frame1'>
                <p>Phương tiện</p>
                <Space>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      {/* <FileImageOutlined style={{ fontSize: '30px', width: '517px', justifyContent: 'center', color: '#4F46E5' }} /> */}
                      <UploadOutlined style={{ fontSize: '20px', width: '517px', justifyContent: 'center', color: '#4B5563' }} />
                    </p>
                    <p className="ant-upload-hint" style={{ fontSize: '14px', fontWeight: 400 }}>Thêm hình ảnh, video</p>
                  </Dragger>
                </Space>
              </div>
              <div className='frame1'>
                <p>Kho hàng</p>
                <div className='field-container'>
                  <div className='field'>
                    <h6>SKU (Đơn vị lưu kho)</h6>
                    <Input />
                  </div>
                  <div className='field'>
                    <h6>Barcode (ISBN, UPC, GTIN, v.v)</h6>
                    <Input />
                  </div>
                </div>
              </div>
              <div className='frame1'>
                <p>Mẫu mã</p>
                <Button icon={<PlusOutlined />} style={{ color: '#4F46E5', justifyContent: 'flex-start', border: 'none', boxShadow: 'none', padding: 0 }}>Thêm các lựa chọn mẫu mã</Button>
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
                <Space>
                  <Checkbox onChange={onChange}>Bán trực tiếp trên cửa hàng</Checkbox>
                </Space>
              </div>
              <div className='frame1'>
                <p>Sắp xếp sản phẩm</p>
                <div>
                  <h6>Danh mục sản phẩm</h6>
                  <Space>
                    <Select
                      showSearch
                      placeholder="Chọn danh mục"
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: '1',
                          label: 'Trà sữa',
                        },
                        {
                          value: '2',
                          label: 'Nước ép',
                        },
                        {
                          value: '3',
                          label: 'Quần áo',
                        },
                      ]}
                    />
                  </Space>
                </div>
                <div>
                  <h6>Loại sản phẩm</h6>
                  <Space>
                    <Select
                      showSearch
                      placeholder="Chọn loại"
                      onChange={handleProductChange}
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: '1',
                          label: 'Sản phẩm chính',
                        },
                        {
                          value: '2',
                          label: 'Sản phẩm phụ đi kèm',
                        },
                      ]}
                    />
                  </Space>
                </div>
                {showProductOption && (
                    <div>
                      <h6>Tùy chọn sản phẩm phụ đi kèm</h6>
                      <Space>
                        <Select
                          showSearch
                          placeholder="Chọn sản phẩm"
                          filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                          }
                          options={[
                            {
                              value: '1',
                              label: 'Trà sữa thái xanh',
                            },
                            {
                              value: '2',
                              label: 'Nước ép dưa hấu',
                            },
                            {
                              value: '3',
                              label: 'Áo thun cầu lông',
                            },
                          ]}
                        />
                      </Space>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className='action-box'>
            <Button onClick={handleCategory} style={{ color: '#1F2937', border: '1px solid #9CA3AF' }}>Hủy bỏ</Button>
            <Button onClick={handleCategory} style={{ backgroundColor: '#4F46E5', color: '#FFF', border: 'none' }}>Thêm</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProduct