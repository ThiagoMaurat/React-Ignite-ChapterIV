import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";
import { theme } from "../styles/theme";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
//o módulo do apexchart necessita do window e dentro do node que roda no next
// não há o window. Portanto, pode-se utilizar o dynamic do next para isso.

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
        new Date("2022-04-11T00:00:00.000Z").toLocaleString("pt-BR", {
          day: "2-digit",
          month: "short",
        }),
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  },
};

const series = [{ name: "series1", data: [31, 40, 28, 51, 42, 109, 100] }];

export default function Dashboard() {
  return (
    <Flex direction={"column"} h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" borderRadius="8" bg="gray.800" pb="4">
            <Text>Inscritos da semana</Text>
            <Chart type="area" height="160" options={options} series={series} />
          </Box>
          <Box p="8" borderRadius="8" bg="gray.800" pb="4">
            <Text>Taxa de Abertura</Text>
            <Chart type="area" height="160" options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
