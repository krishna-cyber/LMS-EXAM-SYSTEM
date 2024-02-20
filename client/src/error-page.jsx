/** @format */

import { useRouteError } from "react-router-dom";
import { Button } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className=' flex justify-center items-center gap-4 flex-col h-screen w-screen'
      id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className='buttons flex gap-3 w-[20%] justify-between'>
        <Button
          className=' font-semibold bg-red-700'
          type='primary'
          onClick={() => {
            window.location.reload();
          }}>
          Refresh
        </Button>
        <Button
          className=' bg-green-700 font-semibold'
          type='primary'
          onClick={() => {
            window.location.assign("/");
          }}>
          Go Home
        </Button>
        <Button
          className='bg-blue-700 font-semibold'
          type='primary'
          onClick={() => {
            window.history.back();
          }}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
