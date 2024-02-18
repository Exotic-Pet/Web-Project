import { Outlet } from "react-router-dom";

export default function GatheringLayout() {
  return (
    <>
      {/* Banner */}
      <div className="bg-green-light bg-no-repeat bg-center bg-[url('../assets/gathering/banner.svg')] min-h-[133px] mt-20"></div>
      <Outlet />
    </>
  );
}
