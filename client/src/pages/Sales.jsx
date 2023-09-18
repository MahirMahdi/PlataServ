import { Box, IconButton, Input, Select, Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { PieChart } from "../components/Shared/Charts";
import ReportCard from "../components/Shared/ReportCard";
import axios from "../api/api";
import moment from "moment/moment";
import { SalesTable, SpeedOfServiceTable } from "../components/Shared/Table";

export default function Sales() {
  const [salesTableFilterType, setSalesTableFilterType] = useState("Monthly");
  const [speedTableFilterType, setSpeedTableFilterType] = useState("Monthly");
  const [chartFilterType, setChartFilterType] = useState("Monthly");
  const [salesTableCalendarType, setSalesTableCalendarType] = useState("month");
  const [speedTableCalendarType, setSpeedTableCalendarType] = useState("month");
  const [chartCalendarType, setChartCalendarType] = useState("month");
  const [salesTablePeriod, setSalesTablePeriod] = useState(new Date());
  const [speedTablePeriod, setSpeedTablePeriod] = useState(new Date());
  const [chartPeriod, setChartPeriod] = useState(new Date());
  const [salesReports, setSalesReports] = useState([]);
  const [chartReports, setChartReports] = useState([]);
  const [speedReports, setSpeedReports] = useState([]);
  const [recentSale, setRecentSale] = useState();

  const getDefaultSalesReport = async () => {
    const response = await axios.post("/report/sales-details", {
      type: "monthly",
      month: salesTablePeriod,
    });
    setSalesReports(response.data.reports);
  };

  const getDefaultChartReport = async () => {
    const response = await axios.post("/chart/sales", {
      type: "monthly",
      month: chartPeriod,
    });
    setChartReports(response.data.reports);
  };

  const getDefaultSpeedReport = async () => {
    const response = await axios.post("/report/speed-of-service", {
      type: "monthly",
      month: speedTablePeriod,
    });
    setSpeedReports(response.data.reports);
  };

  const getRecentSale = async () => {
    const response = await axios.get("/recent/sale");
    setRecentSale(response.data.recent);
  };

  useEffect(() => {
    getDefaultSalesReport();
    getDefaultChartReport();
    getDefaultSpeedReport();
    getRecentSale();
  }, []);

  const handleSalesTableFilterType = (e) => {
    const value = e.target.value;
    setSalesTableFilterType(value);

    if (value === "Daily") {
      setSalesTableCalendarType("date");
    } else if (value === "Weekly") {
      setSalesTableCalendarType("week");
    } else {
      setSalesTableCalendarType("month");
    }
  };

  const handleChartFilterType = (e) => {
    const value = e.target.value;
    setChartFilterType(value);

    if (value === "Daily") {
      setChartCalendarType("date");
    } else if (value === "Weekly") {
      setChartCalendarType("week");
    } else {
      setChartCalendarType("month");
    }
  };

  const handleSpeedTableFilterType = (e) => {
    const value = e.target.value;
    setSpeedTableFilterType(value);

    if (value === "Daily") {
      setSpeedTableCalendarType("date");
    } else if (value === "Weekly") {
      setSpeedTableCalendarType("week");
    } else {
      setSpeedTableCalendarType("month");
    }
  };

  const handleSalesTablePeriod = (e) => {
    setSalesTablePeriod(e.target.value);
  };

  const handleChartPeriod = (e) => {
    setChartPeriod(e.target.value);
  };

  const handleSpeedTablePeriod = (e) => {
    setSpeedTablePeriod(e.target.value);
  };

  const querySalesReport = async () => {
    if (salesTableFilterType === "Daily") {
      const response = await axios.post("/report/sales-details", {
        type: "daily",
        date: salesTablePeriod,
      });
      setSalesReports(response.data.reports);
    } else if (salesTableFilterType === "Weekly") {
      const startDate = new Date(
        moment(salesTablePeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(salesTablePeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post("/report/sales-details", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });
      setSalesReports(response.data.reports);
    } else {
      const response = await axios.post("/report/sales-details", {
        type: "monthly",
        month: salesTablePeriod,
      });
      setSalesReports(response.data.reports);
    }
  };

  const queryChartReport = async () => {
    if (chartFilterType === "Daily") {
      const response = await axios.post("/chart/sales", {
        type: "daily",
        date: chartPeriod,
      });
      setChartReports(response.data.reports);
    } else if (chartFilterType === "Weekly") {
      const startDate = new Date(
        moment(chartPeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(chartPeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post("/chart/sales", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });
      setChartReports(response.data.reports);
    } else {
      const response = await axios.post("/chart/sales", {
        type: "monthly",
        month: chartPeriod,
      });
      setChartReports(response.data.reports);
    }
  };

  const querySpeedReport = async () => {
    if (speedTableFilterType === "Daily") {
      const response = await axios.post("/report/speed-of-service", {
        type: "daily",
        date: speedTablePeriod,
      });
      setSpeedReports(response.data.reports);
    } else if (speedTableFilterType === "Weekly") {
      const startDate = new Date(
        moment(speedTablePeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(speedTablePeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post("/report/speed-of-service", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });
      setSpeedReports(response.data.reports);
    } else {
      const response = await axios.post("/report/speed-of-service", {
        type: "monthly",
        month: speedTablePeriod,
      });
      setSpeedReports(response.data.reports);
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
        <Text
          padding={{ base: "1rem 0", sm: "0" }}
          fontFamily="'Poppins', sans-serif"
          fontSize="1.75rem"
          fontWeight="semibold"
          data-testid="sales-header"
        >
          Revenue
        </Text>
        <Box mt="1rem" display="grid" rowGap="1rem" paddingBottom="2.5rem">
          <Box display="flex" alignItems="center" columnGap="1rem">
            <Select
              placeholder="Select filter type"
              size="sm"
              type="month"
              borderRadius="5px"
              onChange={handleSalesTableFilterType}
              defaultValue={salesTableFilterType}
              w="10rem"
              data-testid="revenue-filter"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
            <Input
              placeholder="Select Date and Time"
              size="sm"
              onChange={handleSalesTablePeriod}
              type={salesTableCalendarType}
              borderRadius="5px"
              w="10rem"
              cursor="pointer"
              data-testid="revenue-period"
            />
            <IconButton
              size="sm"
              aria-label="Search database"
              icon={<BsSearch />}
              bgColor="#323130"
              color="white"
              onClick={querySalesReport}
              data-testid="query-revenue"
            />
          </Box>
          <Text
            padding={{ base: "1rem 0", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize="1.15rem"
            fontWeight="semibold"
            data-testid="revenue-filter-type"
          >
            {salesTableFilterType} Report
          </Text>
          <SalesTable reports={salesReports} />
          <Box
            mt="1rem"
            w="100%"
            display={{ base: "grid", lg: "flex" }}
            alignItems="center"
            justifyContent="space-between"
            columnGap="1.5rem"
            rowGap="1.5rem"
          >
            <Box
              w={{ base: "100%", lg: "35%" }}
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
                  data-testid="sales-chart-filter"
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </Select>
                <Input
                  placeholder="Select Period"
                  size="sm"
                  onChange={handleChartPeriod}
                  type={chartCalendarType}
                  borderRadius="5px"
                  w="10rem"
                  cursor="pointer"
                  data-testid="sales-chart-period"
                />
                <IconButton
                  size="sm"
                  aria-label="Search database"
                  icon={<BsSearch />}
                  onClick={queryChartReport}
                  bgColor="#323130"
                  color="white"
                  data-testid="query-sales-chart"
                />
              </Box>
              <PieChart reports={chartReports} />
            </Box>
            <Box w={{ base: "100%", lg: "40%" }} h="min-content">
              <ReportCard
                type={"sales"}
                total_amount={recentSale?.total_amount}
                total_quantity={recentSale?.total_quantity}
                date={recentSale?.date}
              />
            </Box>
          </Box>
          <Text
            padding={{ base: "1rem 0", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize="1.75rem"
            fontWeight="semibold"
            mt="2.5rem"
            data-testid="service-speed-header"
          >
            Speed of Service
          </Text>
          <Box display="flex" alignItems="center" columnGap="1rem">
            <Select
              placeholder="Select filter type"
              size="sm"
              type="month"
              borderRadius="5px"
              onChange={handleSpeedTableFilterType}
              defaultValue={speedTableFilterType}
              w="10rem"
              data-testid="service-speed-filter"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
            <Input
              placeholder="Select Date and Time"
              size="sm"
              onChange={handleSpeedTablePeriod}
              type={speedTableCalendarType}
              borderRadius="5px"
              w="10rem"
              cursor="pointer"
              data-testid="service-speed-period"
            />
            <IconButton
              size="sm"
              aria-label="Search database"
              icon={<BsSearch />}
              bgColor="#323130"
              color="white"
              onClick={querySpeedReport}
              data-testid="query-service-speed"
            />
          </Box>
          <Text
            padding={{ base: "1rem 0", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize="1.15rem"
            fontWeight="semibold"
            data-testid="service-speed-filter-type"
          >
            {speedTableFilterType} Report
          </Text>
          <SpeedOfServiceTable reports={speedReports} />
        </Box>
      </Box>
    </Box>
  );
}
