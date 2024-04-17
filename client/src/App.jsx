/** @format */

import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCurrentUser } from "./features/auth/authActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  console.log(user);
  console.log(token);
  function fetchUser() {
    dispatch(getCurrentUser());
  }
  // if user is not logged in redirect to login page
  useEffect(() => {
    fetchUser();
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div>
        <h1>App Component</h1>
        <Button onClick={fetchUser}>Fetch User</Button>
      </div>
      {user == null
        ? navigate("/login")
        : user.role === "admin"
        ? navigate("/admin")
        : navigate("/user")}
    </>
  );
}

export default App;
