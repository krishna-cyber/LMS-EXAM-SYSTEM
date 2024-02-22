/** @format */
import { Card, Avatar, Button, Modal } from "antd";
import { useState } from "react";

const ExamInstruction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Card title='Exam Details'>
        <div className=' w-full text-lg gap-3 flex flex-col justify-center items-center'>
          <Avatar
            style={{
              width: 100,
              height: 100,
            }}
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
          />
          <span>
            <span className='  font-semibold'>Exam Name: </span>
            <span>Set - 01</span>
          </span>
          <span>
            <span className='  font-semibold'>Name of Student: </span>
            <span>Krishna Tiwari</span>
          </span>
          <span>
            <span className='  font-semibold'>Exam Id: </span>
            <span> IbD45</span>
          </span>
          <Button
            type='primary'
            className=' w-[25%] text-lg font-medium'
            onClick={() => setModalOpen(true)}>
            Start Exam
          </Button>
          {/* create a cancel button */}
          <Button>Cancel</Button>
        </div>
      </Card>
      <Card>
        ***Note***
        <ol>
          <li>
            If internet disconnects during exam then exam is counted but result
            will not be saved{" "}
          </li>
          <li>
            You can give a answer or can leave it, It will be marked as not
            attempted
          </li>
          <li>If you leave the exam then it will be marked as not attempted</li>
          <li>You can not go back to previous question</li>
        </ol>
      </Card>
      <Modal
        title='Exam Start Confirmation'
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}>
        <p className=''>
          Are you sure you want to start the exam? Once you start the exam you
          can not go back.
        </p>
      </Modal>
    </>
  );
};

export default ExamInstruction;
