/** @format */
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { start, end } from "../features/ExamStart/examAuth";
import { useSelector, useDispatch } from "react-redux";

const ExamConfirmation = () => {
  const dispatch = useDispatch();
  const examStart = useSelector((state) => state.examAuth.value);
  const [modal, setModalOpen] = useState(false);
  return (
    <>
      <Button
        className=' w-[30%]'
        type='primary'
        size='medium'
        onClick={() => {
          setModalOpen(true);
        }}>
        Start Exam
      </Button>

      <Modal
        centered
        title='Confirmation to start exam'
        style={{
          top: 20,
        }}
        open={modal}
        onOk={() => {
          dispatch(start());
          setModalOpen(false);
        }}
        onCancel={() => setModalOpen(false)}>
        <ul>
          <li>Are you sure you want to start the exam?</li>
          <li>Once you start the exam you can not go back.</li>
        </ul>
      </Modal>
    </>
  );
};

export default ExamConfirmation;
