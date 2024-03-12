/** @format */

import { Form, Divider, Input, message, Button, Modal, Upload } from "antd";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import UploadImage from "./UploadImage";
import UploadAudio from "./UploadAudio";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const QuestionForm = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  // handle preview function for each option

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <div className=' p-4 items-center flex flex-col'>
        <h3 className=' text-center'>Current Question 1</h3>

        <Form
          className=' 
        w-[60%]'
          name='basic'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Divider orientation='left'>Question</Divider>
          <div className=' w-full flex flex-col gap-4'>
            <div className=' w-full'>
              <Form.Item className=' w-full' label='Question Title'>
                <Input />
              </Form.Item>
              <Form.Item className=' w-full' label='Question Description'>
                <Input />
              </Form.Item>
            </div>
            <div className=' self-end flex  gap-4'>
              <Form.Item
                // label='Upload'
                valuePropName='fileList'
                getValueFromEvent={normFile}>
                <UploadImage />
              </Form.Item>
              <UploadAudio />
            </div>
          </div>

          <div className='options flex justify-between flex-wrap'>
            <div className=' w-[46%] flex flex-col gap-4'>
              <Divider orientation='left'>Option 1</Divider>
              <div className=' w-full'>
                <Form.Item className=' w-full' label='Option Text:'>
                  <Input allowClear />
                </Form.Item>
              </div>
              <div className=' self-end flex  gap-4'>
                <Form.Item
                  // label='Upload'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}>
                  <UploadImage />
                </Form.Item>
                <UploadAudio />
              </div>
            </div>
            <div className=' w-[46%] flex flex-col gap-4'>
              <Divider orientation='left'>Option 2</Divider>
              <div className=' w-full'>
                <Form.Item className=' w-full' label='Option Text'>
                  <Input allowClear />
                </Form.Item>
              </div>
              <div className=' self-end flex  gap-4'>
                <Form.Item
                  // label='Upload'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}>
                  <UploadImage />
                </Form.Item>
                <UploadAudio />
              </div>
            </div>

            <div className=' w-[46%] flex flex-col gap-4'>
              <Divider orientation='left'>Option 3</Divider>
              <div className=' w-full'>
                <Form.Item className=' w-full' label='Option Text'>
                  <Input allowClear />
                </Form.Item>
              </div>
              <div className=' self-end flex  gap-4'>
                <Form.Item
                  // label='Upload'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}>
                  <UploadImage />
                </Form.Item>
                <UploadAudio />
              </div>
            </div>

            <div className=' w-[46%] flex flex-col gap-4'>
              <Divider orientation='left'>Option 4</Divider>
              <div className=' w-full'>
                <Form.Item className=' w-full' label='Option Text'>
                  <Input allowClear />
                </Form.Item>
              </div>
              <div className=' self-end flex  gap-4'>
                <Form.Item
                  // label='Upload'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}>
                  <UploadImage />
                </Form.Item>
                <UploadAudio />
              </div>
            </div>
          </div>

          <Button
            className=' w-full'
            size='large'
            type='primary'
            htmlType='submit'>
            Submit Question
          </Button>
        </Form>
      </div>
    </>
  );
};

export default QuestionForm;
