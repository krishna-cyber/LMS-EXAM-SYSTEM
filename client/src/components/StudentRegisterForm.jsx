/** @format */

import { Form, Input, DatePicker, Upload, Modal, Button } from "antd";
import FormList from "antd/es/form/FormList";
import generator from "generate-password-browser";
import { useState } from "react";
import { IoSync } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const StudentRegisterForm = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log(values, fileList, firstName, lastName);
  };
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type='button'>
      <FaPlus />
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </button>
  );
  return (
    <Form className=' w-[45%]' onFinish={onFinish}>
      <Form.Item
        className=' w-[60%]'
        name='Username'
        hasFeedback
        required
        label='Full Name'>
        <Input allowClear placeholder=' UserName' />
      </Form.Item>
      <Form.Item
        name='email'
        hasFeedback
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        required
        label='Email'>
        <Input className=' w-[60%]' allowClear placeholder='Email' />
      </Form.Item>
      <Form.Item name='dob' hasFeedback required label='Date of Birth'>
        <DatePicker
          format={(value) => `${value.format("YYYY-MM-DD")}`}
          placeholder=' Date of Birth'
        />
      </Form.Item>
      <Form.Item name='address' hasFeedback required label='Address'>
        <Input className=' w-[60%]' placeholder='Address' />
      </Form.Item>
      <Form.Item
        name='Mobile'
        hasFeedback
        required
        rules={[
          {
            required: true,
            message: "Please input your Mobile!",
          },
          {
            min: 10,
            message: "Mobile number should be 10 digits",
          },
        ]}
        label='Mobile'>
        <Input className=' w-[60%]' allowClear placeholder='Mobile' />
      </Form.Item>
      <Form.Item name='password' hasFeedback required label='Generate Password'>
        <Input
          disabled
          value={password}
          className=' w-[60%]'
          allowClear
          placeholder='Click button to generate password'
        />
        <Button
          icon={<IoSync />}
          className=' ml-3 w-fit'
          type='primary'
          onClick={() => {
            setPassword(generator.generate({ length: 10, numbers: true }));
          }}>
          Generate
        </Button>
      </Form.Item>
      <Form.Item
        label='Photo'
        valuePropName='fileList'
        getValueFromEvent={normFile}>
        <Upload
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
          listType='picture-card'>
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img
          alt='example'
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default StudentRegisterForm;
