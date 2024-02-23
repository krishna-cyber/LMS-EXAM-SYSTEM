/** @format */

import { Button, Modal } from "antd";
import { useCallback, useState } from "react";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreenExam = () => {
  const handle = useFullScreenHandle();
  const [modalOpen, setModalOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const reportChange = useCallback(
    (state, handle) => {
      if (handle === handle) {
        console.log("Screen 1 went to", state, handle);
      }
    },
    [handle]
  );
  return (
    <div className=' w-full flex justify-center items-center'>
      <Button
        type='primary'
        className=' w-[25%] text-lg font-medium'
        onClick={() => setModalOpen(true)}>
        Start Exam
      </Button>

      {/* show contenet only when full screen is activated */}

      {fullScreen && (
        <FullScreen handle={handle} onChange={reportChange}>
          <div className='full-screenable-node' style={{ background: "red" }}>
            First
            <button onClick={handle.enter}>Switch</button>
            <button onClick={handle.exit}>Exit</button>
          </div>
        </FullScreen>
      )}
      <Modal
        title='Exam Start Confirmation'
        centered
        open={modalOpen}
        onOk={() => {
          setFullScreen(true);
          setModalOpen(false);
          handle.enter();
        }}
        onCancel={() => setModalOpen(false)}>
        <p className=''>
          Are you sure you want to start the exam? Once you start the exam you
          can not go back.
        </p>
      </Modal>
    </div>
  );
};

export default FullScreenExam;
