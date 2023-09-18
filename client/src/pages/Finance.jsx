import {
  Box,
  IconButton,
  Input,
  Select,
  Stat,
  Text,
  StatGroup,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { LineChart } from "../components/Shared/Charts";
import ReportCard from "../components/Shared/ReportCard";
import axios from "../api/api";
import moment from "moment/moment";
import { FinanceTable } from "../components/Shared/Table";

export default function Finance() {
  const [tableFilterType, setTableFilterType] = useState("Monthly");
  const [chartFilterType, setChartFilterType] = useState("Monthly");
  const [tableCalendarType, setTableCalendarType] = useState("month");
  const [chartCalendarType, setChartCalendarType] = useState("month");
  const [tablePeriod, setTablePeriod] = useState(new Date());
  const [chartPeriod, setChartPeriod] = useState(new Date());
  const [reports, setReports] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [chartReports, setChartReports] = useState();
  const [recentTransaction, setRecentTransaction] = useState();

  const getDefaultReport = async () => {
    const response = await axios.post("/report/cash", {
      type: "monthly",
      month: tablePeriod,
    });
    setReports(response.data.reports);
  };

  const getDefaultChartReport = async () => {
    const response = await axios.post("/chart/bank-info", {
      type: "monthly",
      month: tablePeriod,
    });
    setChartReports(response.data.reports);
  };

  const getRecentTransaction = async () => {
    const response = await axios.get("/recent/sale");
    setRecentTransaction(response.data.recent);
  };

  useEffect(() => {
    getDefaultReport();
    getDefaultChartReport();
    getRecentTransaction();
  }, []);

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

  const handleTablePeriod = (e) => {
    setTablePeriod(e.target.value);
  };

  const handleChartPeriod = (e) => {
    setChartPeriod(e.target.value);
  };

  const queryTableReport = async () => {
    if (tableFilterType === "Daily") {
      const response = await axios.post("/report/cash", {
        type: "daily",
        date: tablePeriod,
      });
      setReports(response.data.reports);

      const expense = await axios.post("/report/purchases", {
        type: "daily",
        date: tablePeriod,
      });
      setExpenses(expense.data.reports);
    } else if (tableFilterType === "Weekly") {
      const startDate = new Date(
        moment(tablePeriod).startOf("week").toDate()
      ).toISOString();
      const endDate = new Date(
        moment(tablePeriod).endOf("week").toDate()
      ).toISOString();
      const response = await axios.post("/report/cash", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });
      setReports(response.data.reports);

      const expense = await axios.post("/report/purchases", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });

      setExpenses(expense.data.reports);
    } else {
      const response = await axios.post("/report/cash", {
        type: "monthly",
        month: tablePeriod,
      });
      setReports(response.data.reports);

      const expense = await axios.post("/report/purchases", {
        type: "monthly",
        month: tablePeriod,
      });
      setExpenses(expense.data.reports);
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
      const response = await axios.post("/chart/bank-info", {
        type: "weekly",
        start_date: startDate,
        end_date: endDate,
      });
      setChartReports(response.data.reports);
    } else {
      const response = await axios.post("/chart/bank-info", {
        type: "monthly",
        month: chartPeriod,
      });
      setChartReports(response.data.reports);
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

  const totalExpense = (total_packs, pack_price) => {
    return Number((total_packs * pack_price).toFixed(2));
  };

  const total_expense = Number(
    expenses.reduce(
      (acc, curr) => acc + totalExpense(curr.total_packs, curr.pack_price),
      0
    )
  ).toFixed(2);

  const revenue = Number(
    reports?.filter((report) => report.label === "Gross sales")[0]
      ?.transaction_amount
  ).toFixed(2);

  const turnover = () => {
    const result = ([(revenue - total_expense) / revenue] * 100).toFixed(2);
    return isNaN(result) ? 0.0 : result;
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
        <Box display="flex" alignItems="center" columnGap="1rem">
          <Select
            placeholder="Select filter type"
            size="sm"
            type="month"
            borderRadius="5px"
            onChange={handleTableFilterType}
            defaultValue={tableFilterType}
            w="10rem"
            data-testid="finance-filter"
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
            data-testid="finance-period"
          />
          <IconButton
            size="sm"
            aria-label="Search database"
            icon={<BsSearch />}
            bgColor="#323130"
            color="white"
            onClick={queryTableReport}
            data-testid="query-finance"
          />
        </Box>
        <Text
          mt="1.5rem"
          padding={{ base: "1rem 0", sm: "0" }}
          fontFamily="'Poppins', sans-serif"
          fontSize="1.75rem"
          fontWeight="semibold"
          data-testid="finance-PL-header"
        >
          Profit & Loss
        </Text>
        <StatGroup
          mt="1rem"
          w="100%"
          border="1px solid #e0e0e0"
          padding="1rem 2rem"
          borderRadius="10px"
          data-testid="PL-stats"
        >
          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>${revenue}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Expenses</StatLabel>
            <StatNumber>${total_expense}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Profit/Loss</StatLabel>
            <StatNumber data-testid="PL-turnover">{turnover()}%</StatNumber>
            <StatHelpText>
              <StatArrow type={turnover() > 0 ? "increase" : "decrease"} />
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Text
          mt="2.5rem"
          padding={{ base: "1rem 0", sm: "0" }}
          fontFamily="'Poppins', sans-serif"
          fontSize="1.75rem"
          fontWeight="semibold"
          data-testid="finance-transactions-header"
        >
          Transactions
        </Text>
        <Box mt="1rem" display="grid" rowGap="1rem" paddingBottom="2.5rem">
          <Text
            padding={{ base: "1rem 0", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize="1.15rem"
            fontWeight="semibold"
            data-testid="finance-filter-type"
          >
            {tableFilterType} Report
          </Text>
          <FinanceTable reports={reports} />
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
                  data-testid="finance-chart-filter"
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
                  data-testid="finance-chart-period"
                />
                <IconButton
                  size="sm"
                  aria-label="Search database"
                  icon={<BsSearch />}
                  bgColor="#323130"
                  color="white"
                  onClick={queryChartReport}
                  data-testid="query-finance-chart"
                />
              </Box>
              <LineChart
                title={chartFilterType}
                reports={chartReports}
                label={"Baking Information"}
              />
            </Box>
            <Box w={{ base: "100%", lg: "40%" }} h="min-content">
              <ReportCard
                type={"finance"}
                transaction_type={recentTransaction?.transaction_type}
                total_amount={recentTransaction?.total_amount}
                date={recentTransaction?.date}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
