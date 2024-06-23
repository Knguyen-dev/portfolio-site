import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="tw-min-h-screen tw-bg-slate-900">
      <Outlet />
    </div>
  );
}
