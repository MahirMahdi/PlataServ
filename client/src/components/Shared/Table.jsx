import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";

export default function InventoryTable({ reports }) {
  const totalPrice = (total_packs, pack_price) => {
    return Number((total_packs * pack_price).toFixed(2));
  };

  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Units in a pack</Th>
            <Th>Total packs</Th>
            <Th>Total units</Th>
            <Th>Pack price</Th>
            <Th>Total price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports.length > 0 ? (
            reports.map((report, i) => (
              <Tr key={i}>
                <Td>{report.name}</Td>
                <Td>{report.units_in_a_pack}</Td>
                <Td>{report.total_packs}</Td>
                <Td>{report.total_units}</Td>
                <Td>{report.pack_price}</Td>
                <Td>{totalPrice(report.total_packs, report.pack_price)}</Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={6}>
                {" "}
                <Text
                  padding={{ base: "1rem 0", sm: "0" }}
                  fontFamily="'Poppins', sans-serif"
                  fontSize="1rem"
                  fontWeight="semibold"
                  textAlign="center"
                >
                  No report found
                </Text>{" "}
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function FinanceTable({ reports }) {
  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr>
            <Th colSpan={2}>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports
            ?.filter((report) => report.label === "Gross sales")
            .map((report, i) => (
              <Tr key={i}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
        <Thead>
          <Tr>
            <Th colSpan={2}>By Payment Method</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports
            ?.filter((report) => report.type === "payment_method")
            .map((report) => (
              <Tr key={report.label}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
        <Thead>
          <Tr>
            <Th colSpan={2}>By Order Point</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports
            ?.filter((report) => report.type === "order_point")
            .map((report) => (
              <Tr key={report.label}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
        <Thead>
          <Tr>
            <Th colSpan={2}>By Destination</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports
            ?.filter((report) => report.type === "destination")
            .map((report) => (
              <Tr key={report.label}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function SalesTable({ reports }) {
  const totalPrice = (total_packs, pack_price) => {
    return Number((total_packs * pack_price).toFixed(2));
  };

  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr>
            <Th>Product type</Th>
            <Th>Units Sold</Th>
            <Th>Sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports?.map((report, i) => (
            <Tr key={i}>
              <Td>{report.type}</Td>
              <Td>{report.units_sold}</Td>
              <Td>{report.total_sales}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function SpeedOfServiceTable({ reports }) {
  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr>
            <Th colSpan={3}>By Period</Th>
          </Tr>
          <Tr>
            <Th>Period</Th>
            <Th textAlign="center">Ticket count</Th>
            <Th textAlign="right">Avg ticket time(sec)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports?.by_period?.map((report) => (
            <Tr key={report.label}>
              <Td>{report.label}</Td>
              <Td textAlign="center">{report.count}</Td>
              <Td textAlign="right">
                {report.avg_time == null ? 0 : report.avg_time}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Thead>
          <Tr>
            <Th colSpan={3}>By Timeline</Th>
          </Tr>
          <Tr>
            <Th>Timeline</Th>
            <Th textAlign="center">Ticket count</Th>
            <Th textAlign="right">% of overall ticket time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reports?.by_timeline?.map((report) => (
            <Tr key={report.label}>
              <Td>{report.label}</Td>
              <Td textAlign="center">{report.count}</Td>
              <Td textAlign="right">
                {report.percentage == null ? 0 : report.percentage}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
