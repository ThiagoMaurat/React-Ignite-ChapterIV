import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Logo from "../Header/Logo";
import NotificatinsNav from "../Header/NotificatinsNav";
import Profile from "../Header/Profile";
import SearchBox from "../Header/SearchBox";

export function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificatinsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
