/** @format */
import { useState } from "react";
import { Button, Upload } from "antd";
import { GrAttachment } from "react-icons/gr";

const UploadAudio = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <Upload accept='audio/*'>
      <Button icon={<GrAttachment />}>Select Audio</Button>
    </Upload>
  );
};

export default UploadAudio;
