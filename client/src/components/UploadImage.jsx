/** @format */

import { useState } from "react";
import { Upload, message, Modal } from "antd";
import { FaPlus } from "react-icons/fa6";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadImage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [audioList, setAudioList] = useState([]);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Only JPG/PNG files are allowed!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    setFileList([...fileList, file]);
    return false;
  };
  const handleCancel = () => setPreviewOpen(false);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  //preview function
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
        Upload image
      </div>
    </button>
  );
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
      <Upload
        accept='.jpg,.png'
        beforeUpload={beforeUpload}
        fileList={fileList}
        action={(file) => {
          console.log(file);
        }}
        listType='picture-card'
        onPreview={handlePreview}
        onChange={handleChange}>
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
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
    </>
  );
};

export default UploadImage;
