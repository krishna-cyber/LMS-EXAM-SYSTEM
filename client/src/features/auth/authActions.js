/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }) => {
    return await API.post("/api/auth/login", { role, email, password }).then(
      (res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          window.location.replace("/");
        }
        return res.data;
      }
    );
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        toast("User Registerd Successfully");
        window.location.replace("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    return await API.get("/api/auth/current-user").then((res) => {
      return res.data;
    });
  }
);
