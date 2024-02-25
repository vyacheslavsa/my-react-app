import { FC } from "react";
import { useGetOneCallAPIQuery } from "../../api/oneCallAPI2.5";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { data } = useGetOneCallAPIQuery(null);
  console.log("data:", data);

  return <div>Dashboard</div>;
};

export default Dashboard;
