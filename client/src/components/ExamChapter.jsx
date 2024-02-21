/** @format */

import { Avatar, Button, Card, Tag, Image } from "antd";
import Logo from "../assets/Logo.png";
const { Meta } = Card;

const Exams = () => {
  return (
    <>
      <div className=' overflow-y-auto w-full h-full'>
        {" "}
        <p className=' text-xl text-[#BC6C25] font-bold '>Chapter Tests</p>
        <hr className=' border-2 border-[#BC6C25] -mt-4' />
        <div className=' bg-gray-100 py-3 justify-evenly flex gap-4 flex-wrap'>
          <Card
            hoverable
            size='small'
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image
                  className=' block mx-auto'
                  preview={false}
                  width={200}
                  src={Logo}
                />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-01-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            size='small'
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image preview={false} width={200} src={Logo} />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-02-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            size='small'
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image preview={false} width={200} src={Logo} />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-03-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            size='small'
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image preview={false} width={200} src={Logo} />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-04-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            hoverable
            size='small'
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image
                  className=' block mx-auto'
                  preview={false}
                  width={200}
                  src={Logo}
                />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-05-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            size='small'
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image preview={false} width={200} src={Logo} />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-06-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
          <Card
            size='small'
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <div className=' w-full text-center'>
                <Image preview={false} width={200} src={Logo} />
              </div>
            }
            actions={[
              <Button className=' w-[45%]' size='medium'>
                Start Exam
              </Button>,
            ]}>
            <Meta
              title='Chapter-07-Test [Free]'
              description=<div className=' flex'>
                <Tag color='magenta'>UBT test</Tag>
                <Tag color='green'>Private</Tag>
                <Tag color='blue'>Avilable</Tag>
              </div>
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Exams;
