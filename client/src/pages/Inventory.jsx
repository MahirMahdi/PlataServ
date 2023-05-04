import { Box, IconButton, Input, Select, Text } from "@chakra-ui/react";
import { MobileSidebar } from "../components/Sidebar/Sidebar";
import { BsCurrencyDollar, BsSearch } from "react-icons/bs";
import { MdOutlineInventory2, MdOutlineFoodBank } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Tab from "../components/Inventory/Tab";
import { useState, useEffect } from "react";
import ReportTable from "../components/Shared/Table";
import BarChart from "../components/Shared/Charts";
import ReportCard from "../components/Shared/ReportCard";
import axios from "../api/api";
import moment from "moment/moment";

export default function Inventory() {
  const [tabType, setTabType] = useState("Purchases");
  const [tableFilterType, setTableFilterType] = useState("Monthly");
  const [chartFilterType, setChartFilterType] = useState("Monthly");
  const [tableCalendarType, setTableCalendarType] = useState("month");
  const [chartCalendarType, setChartCalendarType] = useState("month");
  const [tablePeriod, setTablePeriod] = useState(new Date());
  const [chartPeriod, setChartPeriod] = useState(new Date());
  const [reports, setReports] = useState([]);
  const [chartReports, setChartReports] = useState();
  const [recentData, setRecentData] = useState();

  const getDefaultReport = async () => {
    if (tabType !== "Inventory") {
      const response = await axios.post(
        `/report/${tabType.toLocaleLowerCase()}`,
        { type: "monthly", month: tablePeriod }
      );
      setReports(response.data.reports);
    } else {
      const response = await axios.get("/report/inventory");
      setReports(response.data.reports);
    }
  };

  const getDefaultChartReport = async () => {
    if (tabType !== "Inventory") {
      const response = await axios.post(
        `/chart/${tabType.toLocaleLowerCase()}`,
        { type: "monthly", month: chartPeriod }
      );
      setChartReports(response.data.reports);
    }
  };

  const getRecentData = async () => {
    if (tabType !== "Inventory") {
      const response = await axios.get(
        `/recent/${tabType.toLocaleLowerCase()}`
      );
      setRecentData(response.data.recent);
    }
  };

  useEffect(() => {
    getDefaultReport();
    getDefaultChartReport();
    getRecentData();
  }, [tabType]);

  const handleTabType = (value) => {
    setTableFilterType("Monthly");
    setTableCalendarType("month");
    setTablePeriod(new Date());
    setChartFilterType("Monthly");
    setChartCalendarType("month");
    setChartPeriod(new Date());
    setTabType(value);
  };

  const handleTableFilterType = (e) => {
    const value = e.target.value;
    setTableFilterType(value);

    if (value === "Daily") {
      setTableCalendarType("date");
    } else if (value === "Weekly") {
      setTableCalendarType("week");
    } else {
      setTableCalendarType("month");
    }
  };

  const handleChartFilterType = (e) => {
    const value = e.target.value;
    setChartFilterType(value);

    if (value === "Weekly") {
      setChartCalendarType("week");
    } else {
      setChartCalendarType("month");
    }
  };

  const handleTablePeriod = (e) => {
    setTablePeriod(e.target.value);
  };

  const handleChartPeriod = (e) => {
    setChartPeriod(e.target.value);
  };

  const queryTableReport = async () => {
    if (tableFilterType === "Daily") {
      const response = await axios.post(
        `/report/${tabType.toLocaleLowerCase()}`,
        { type: "daily", date: tablePeriod }
      );
      setReports(response.data.reports);
    } else if (tableFilterType === "Weekly") {
      const startDate = new Date(
        moment(tablePeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(tablePeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post(
        `/report/${tabType.toLocaleLowerCase()}`,
        { type: "weekly", start_date: startDate, end_date: endDate }
      );
      setReports(response.data.reports);
    } else {
      const response = await axios.post(
        `/report/${tabType.toLocaleLowerCase()}`,
        { type: "monthly", month: tablePeriod }
      );
      setReports(response.data.reports);
    }
  };

  const queryChartReport = async () => {
    if (chartFilterType === "Weekly") {
      const startDate = new Date(
        moment(chartPeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(chartPeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post(
        `/chart/${tabType.toLocaleLowerCase()}`,
        { type: "weekly", start_date: startDate, end_date: endDate }
      );
      setChartReports(response.data.reports);
    } else {
      const response = await axios.post(
        `/chart/${tabType.toLocaleLowerCase()}`,
        { type: "monthly", month: chartPeriod }
      );
      setChartReports(response.data.reports);
    }
  };

  return (
    <Box display="flex" w="100vw" h="100vh">
      <Box
        w={{ base: "100vw", lg: "85vw" }}
        padding={{
          base: "0 1rem",
          sm: "0 1.5rem",
          md: "0 1.75rem",
          lg: "1.5rem 2rem",
        }}
        ml={{ lg: "17.5vw", xl: "15vw" }}
        minH="100vh"
      >
        <MobileSidebar />
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap="1rem"
        >
          {inventory_tabs_data.map((tab, i) => (
            <Tab
              handleClick={handleTabType}
              tab_state={tabType}
              key={i}
              data={tab}
            />
          ))}
        </Box>
        {tabType !== "Inventory" ? (
          <Box mt="2.5rem" display="grid" rowGap="1rem">
            <Box display="flex" alignItems="center" columnGap="1rem">
              <Select
                placeholder="Select filter type"
                size="sm"
                type="month"
                borderRadius="5px"
                onChange={handleTableFilterType}
                defaultValue={tableFilterType}
                w="10rem"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </Select>
              <Input
                placeholder="Select Date and Time"
                size="sm"
                onChange={handleTablePeriod}
                type={tableCalendarType}
                borderRadius="5px"
                w="10rem"
                cursor="pointer"
              />
              <IconButton
                size="sm"
                aria-label="Search database"
                icon={<BsSearch />}
                bgColor="#323130"
                color="white"
                onClick={queryTableReport}
              />
            </Box>
            <Text
              padding={{ base: "1rem 0", sm: "0" }}
              fontFamily="'Poppins', sans-serif"
              fontSize="1.15rem"
              fontWeight="semibold"
            >
              {tableFilterType} Report
            </Text>
            <ReportTable reports={reports} />
            <Box
              mt="1rem"
              w="100%"
              display={{ base: "grid", lg: "flex" }}
              alignItems="center"
              columnGap="1.5rem"
              rowGap="1.5rem"
            >
              <Box
                w={{ base: "100%", lg: "60%" }}
                h="fit-content"
                display="grid"
                rowGap="1.5rem"
              >
                <Box display="flex" alignItems="center" columnGap="1rem">
                  <Select
                    placeholder="Select filter type"
                    size="sm"
                    type="month"
                    borderRadius="5px"
                    onChange={handleChartFilterType}
                    defaultValue={chartFilterType}
                    w="10rem"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </Select>
                  <Input
                    placeholder="Select Period"
                    size="sm"
                    type={chartCalendarType}
                    onChange={handleChartPeriod}
                    borderRadius="5px"
                    w="10rem"
                    cursor="pointer"
                  />
                  <IconButton
                    size="sm"
                    aria-label="Search database"
                    icon={<BsSearch />}
                    bgColor="#323130"
                    color="white"
                    onClick={queryChartReport}
                  />
                </Box>
                <BarChart
                  title={chartFilterType}
                  label={tabType}
                  reports={chartReports}
                />
              </Box>
              <Box w={{ base: "100%", lg: "40%" }} h="min-content">
                <ReportCard
                  type={tabType.toLowerCase()}
                  total_quantity={recentData?.total_quantity}
                  total_amount={recentData?.total_amount}
                  date={recentData?.date}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box mt="2.5rem" display="grid" rowGap="1rem">
            <ReportTable reports={reports} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function Layout({
  tabType,
  handleTableFilterType,
  handleChartFilterType,
  tableCalendarType,
  chartCalendarType,
  tableFilterType,
  chartFilterType,
  handleTablePeriod,
  queryTableReport,
  reports,
}) {
  return (
    <>
      {tabType !== "Inventory" ? (
        <Box mt="2.5rem" display="grid" rowGap="1rem">
          <Box display="flex" alignItems="center" columnGap="1rem">
            <Select
              placeholder="Select filter type"
              size="sm"
              type="month"
              borderRadius="5px"
              onChange={handleTableFilterType}
              defaultValue={tableFilterType}
              w="10rem"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
            <Input
              placeholder="Select Date and Time"
              size="sm"
              onChange={handleTablePeriod}
              type={tableCalendarType}
              borderRadius="5px"
              w="10rem"
              cursor="pointer"
            />
            <IconButton
              size="sm"
              aria-label="Search database"
              icon={<BsSearch />}
              bgColor="#323130"
              color="white"
              onClick={queryTableReport}
            />
          </Box>
          <Text
            padding={{ base: "1rem 0", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize="1.15rem"
            fontWeight="semibold"
          >
            {tableFilterType} Report
          </Text>
          <ReportTable reports={reports} />
          <Box
            mt="1rem"
            w="100%"
            display={{ base: "grid", lg: "flex" }}
            alignItems="center"
            columnGap="1.5rem"
            rowGap="1.5rem"
          >
            <Box
              w={{ base: "100%", lg: "60%" }}
              h="fit-content"
              display="grid"
              rowGap="1.5rem"
            >
              <Box display="flex" alignItems="center" columnGap="1rem">
                <Select
                  placeholder="Select filter type"
                  size="sm"
                  type="month"
                  borderRadius="5px"
                  onChange={handleChartFilterType}
                  defaultValue={chartFilterType}
                  w="10rem"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </Select>
                <Input
                  placeholder="Select Period"
                  size="sm"
                  type={chartCalendarType}
                  borderRadius="5px"
                  w="10rem"
                  cursor="pointer"
                />
                <IconButton
                  size="sm"
                  aria-label="Search database"
                  icon={<BsSearch />}
                  bgColor="#323130"
                  color="white"
                />
              </Box>
              <BarChart title={chartFilterType} label={tabType} />
            </Box>
            <Box w={{ base: "100%", lg: "40%" }} h="min-content">
              <ReportCard />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box mt="2.5rem" display="grid" rowGap="1rem">
          <ReportTable reports={reports} />
        </Box>
      )}
    </>
  );
}

const inventory_tabs_data = [
  {
    icon: <BsCurrencyDollar />,
    name: "Purchases",
    color: "blue.300",
  },
  {
    icon: <RiDeleteBin6Line />,
    name: "Wastes",
    color: "red.600",
  },
  {
    icon: <MdOutlineInventory2 />,
    name: "Inventory",
    color: "yellow.500",
  },
  {
    icon: <MdOutlineFoodBank />,
    name: "Foodbank",
    color: "pink.400",
  },
];
