import { FC } from "react";
import { useGetOneCallAPIQuery } from "../../api/oneCallAPI2.5";
import { Autocomplete } from "@mantine/core";
import styles from "./style.module.scss";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { data } = useGetOneCallAPIQuery(null);
  console.log("data:", data)

  return (
    <div className={styles.contentDashboard}>
      <Autocomplete
        placeholder="Search"
        data={["React", "Angular", "Vue", "Svelte"]}
        comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
        className={styles.autoComplete}
        radius={50}
      />
      <div className={styles.test}></div>
    </div>
  );
};

export default Dashboard;
