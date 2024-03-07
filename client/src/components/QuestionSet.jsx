/** @format */

import React from "react";
import { Button, Card, ConfigProvider, Watermark } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuestion } from "../features/Questions/questionsSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineDashboard, MdNavigateNext } from "react-icons/md";
const QuestionSet = () => {
  const currentQuestion = useSelector(
    (state) => state.questions.currentQuestion
  );
  console.log(currentQuestion);
  const dispatch = useDispatch();
  return (
    <div className=' flex justify-center items-center'>
      <Card
        className=' w-[80%]'
        title=<>
          <div className='w-full text-white flex justify-around p-2 flex-wrap bg-blue-500'>
            <span>Total Questions:{40}</span>
            <span>Solved:{0}</span>
            <span>Unsolved:{40}</span>
            <div>Time Remaining:{40}</div>
          </div>
        </>>
        <Watermark content={["Om shree", "Korean Language", "Center"]}>
          {/* conditional rendering if questions selected show question otherwise show questions */}
          {currentQuestion === null ? (
            <div className=' w-full flex gap-3 justify-between items-center'>
              <ConfigProvider
                theme={{
                  token: {
                    /* here is your global tokens */
                    colorTextHeading: "#283618",
                  },
                }}>
                <Card className=' w-1/2' title='Reading Questions'>
                  <div className=' w-full grid grid-cols-4 gap-4'>
                    <Button
                      className=' font-bold border-black '
                      onClick={() => {
                        dispatch(setCurrentQuestion(1));
                      }}
                      size='large'>
                      1
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      2
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      3
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      4
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      5
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      6
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      7
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      8
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      9
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      10
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      11
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      12
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      13
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      14
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      15
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      16
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      17
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      18
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      19
                    </Button>
                    <Button size='large' className=' font-bold border-black '>
                      20
                    </Button>
                  </div>
                </Card>
                <Card className=' w-1/2' title='Listening Questions'>
                  <div className=' w-full grid grid-cols-4 gap-4'>
                    <Button className=' font-bold border-black  ' size='large'>
                      21
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      22
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      23
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      24
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      25
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      26
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      27
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      28
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      29
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      30
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      31
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      32
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      33
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      34
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      35
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      36
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      37
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      38
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      39
                    </Button>
                    <Button size='large' className=' font-bold border-black  '>
                      40
                    </Button>
                  </div>
                </Card>
              </ConfigProvider>
            </div>
          ) : (
            <p>show the current selected question</p>
          )}

          {currentQuestion === null ? (
            <div className='w-full '>
              <Button
                className=' w-1/4 h-1/4 font-bold'
                type='primary'
                size='large'>
                Submit and Finish Test
              </Button>
            </div>
          ) : (
            <div className='w-full flex justify-around '>
              <Button
                className=' w-fit h-1/4 '
                icon={<GrFormPrevious />}
                type='primary'
                size='large'>
                Previous
              </Button>
              <Button
                className=' w-fit h-1/4 '
                icon={<MdOutlineDashboard />}
                type='primary'
                size='large'>
                Show Questions
              </Button>
              <Button className=' w-fit h-1/4 ' type='primary' size='large'>
                Next{<MdNavigateNext />}
              </Button>
            </div>
          )}
        </Watermark>
      </Card>
    </div>
  );
};

export default QuestionSet;
