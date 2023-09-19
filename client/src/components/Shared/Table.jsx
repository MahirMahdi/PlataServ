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

  const total = Number(
    reports.reduce(
      (acc, curr) => acc + totalPrice(curr.total_packs, curr.pack_price),
      0
    )
  ).toFixed(2);

  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr data-testid="inventory-table-headers">
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
          {reports.length > 0 && (
            <Tr>
              <Td colSpan={4}></Td>
              <Td fontWeight="semibold">Total</Td>
              <Td data-testid="inventory-total">{total}</Td>
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
                <Td data-testid="gross-sales" textAlign="right">
                  {report.transaction_amount}
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Thead data-testid="payment-method-headers">
          <Tr>
            <Th colSpan={2}>By Payment Method</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="payment-method-body">
          {reports
            ?.filter((report) => report.type === "payment_method")
            .map((report) => (
              <Tr key={report.label}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
        <Thead data-testid="order-point-headers">
          <Tr>
            <Th colSpan={2}>By Order Point</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="order-point-body">
          {reports
            ?.filter((report) => report.type === "order_point")
            .map((report) => (
              <Tr key={report.label}>
                <Td>{report.label}</Td>
                <Td textAlign="right">{report.transaction_amount}</Td>
              </Tr>
            ))}
        </Tbody>
        <Thead data-testid="destination-headers">
          <Tr>
            <Th colSpan={2}>By Destination</Th>
          </Tr>
          <Tr>
            <Th>Type</Th>
            <Th textAlign="right">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="destination-body">
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
  const totalSales = Number(
    reports.reduce((acc, curr) => acc + curr.total_sales, 0)
  ).toFixed(2);
  const totalUnitsSold = reports.reduce(
    (acc, curr) => acc + curr.units_sold,
    0
  );

  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead>
          <Tr data-testid="sales-table-headers">
            <Th>Product type</Th>
            <Th>Units Sold</Th>
            <Th>Sales</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="sales-table-body">
          {reports?.map((report) => (
            <Tr key={report.type}>
              <Td>{report.type}</Td>
              <Td>{report.units_sold}</Td>
              <Td>{report.total_sales}</Td>
            </Tr>
          ))}
          <Tr>
            <Td fontWeight="semibold">Total</Td>
            <Td data-testid="sales-total-units-sold">{totalUnitsSold}</Td>
            <Td data-testid="sales-total-sales">{totalSales}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function SpeedOfServiceTable({ reports }) {
  const totalTicketCount = reports.by_period?.reduce(
    (acc, curr) => acc + curr.count,
    0
  );
  return (
    <TableContainer border=".25px solid #dfe6e0" borderRadius="5px">
      <Table
        variant="striped"
        colorScheme="gray"
        size={{ base: "sm", lg: "md" }}
      >
        <Thead data-testid="service-speed-period-table-headers">
          <Tr>
            <Th colSpan={3}>By Period</Th>
          </Tr>
          <Tr>
            <Th>Period</Th>
            <Th textAlign="center">Ticket count</Th>
            <Th textAlign="right">Avg ticket time(sec)</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="service-speed-period-table-body">
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
        <Thead data-testid="service-speed-timeline-table-headers">
          <Tr>
            <Th colSpan={3}>By Timeline</Th>
          </Tr>
          <Tr>
            <Th>Timeline</Th>
            <Th textAlign="center">Ticket count</Th>
            <Th textAlign="right">% of overall ticket time</Th>
          </Tr>
        </Thead>
        <Tbody data-testid="service-speed-timeline-table-body">
          {reports?.by_timeline?.map((report) => (
            <Tr key={report.label}>
              <Td>{report.label}</Td>
              <Td textAlign="center">{report.count}</Td>
              <Td textAlign="right">
                {report.percentage == null ? 0 : report.percentage}
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td fontWeight="semibold">Total</Td>
            <Td data-testid="service-speed-total-tickets" textAlign="center">
              {totalTicketCount}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
