import { Outlet } from "@remix-run/react";


export default function FormbuilderLayout() {
  
  return (
    <div className="">
      <h1>Welcome to FormbuilderLayout</h1>
      <p>This is the  FormbuilderLayout</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}