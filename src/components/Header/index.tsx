import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useMantineColorScheme } from "@mantine/core";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <header className={styles.root}>
      Header
      <Link to="dashboard">Dashboard</Link>
      <Link to="settings">Settings</Link>
    </header>
  );
};

export default Header;
