import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppShell, Burger, Group, Title } from "@mantine/core";
import { NavLink as NavLinkMantine } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiStack } from "react-icons/pi";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header>
        <Group h="100%" px="sm">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group>
              <TiWeatherPartlySunny size="2rem" />
              <Title order={3}>Weather App</Title>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLinkMantine
          label="Dashboard"
          leftSection={<RxDashboard size="2rem" />}
          onClick={() => navigate("dashboard")}
          active={pathname.includes("dashboard")}
        />

        <NavLinkMantine
          label="Settings"
          leftSection={<IoSettingsOutline size="2rem" />}
          onClick={() => navigate("settings")}
          active={pathname.includes("settings")}
        />

        <NavLinkMantine
          label="About App"
          leftSection={<PiStack size="2rem" />}
          onClick={() => navigate("about")}
          active={pathname.includes("about")}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
