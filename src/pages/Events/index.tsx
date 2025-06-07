import { useMemo, useState } from "react";
import { Table, type MenuProps, Skeleton, Dropdown, Col, Row } from "antd";
import { MoreOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { CardStyled, Container } from "./styles";
import { Input } from "../../components/Input";
import { ContainerTable } from "../../components/Table";
import { useGetListEvents } from "../../hooks/services/eventsService";
import type { IEvent } from "../../types/IEvents";
import type { ColumnsType } from "antd/es/table";
import { Button } from "../../components/Button";
import StatusIndicator from "../../components/StatusIndicator";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState({ page: 1 });
  const { data: events, isLoading } = useGetListEvents(pagination);
  const eventsFiltered = useMemo(() => {
    if (!events?.data) return events;

    const term = searchTerm.toLowerCase();
    if (!term) return events;

    return {
      ...events,
      data: events.data.filter((event) =>
        [event.name, event.date, event.status, String(event.teams)].some((field) =>
          field?.toLowerCase().includes(term),
        ),
      ),
    };
  }, [searchTerm, events]);

  const handleTableChange = (page: number) => {
    setPagination({
      page: page,
    });
  };

  function TableWithSkeleton() {
    if (!isLoading && events) {
      return (
        <ContainerTable>
          <Table
            columns={columns}
            dataSource={eventsFiltered?.data}
            pagination={{
              onChange: (page) => {
                handleTableChange(page);
              },
              current: events?.page,
              pageSize: events?.pageSize,
              total: events?.total,
              showSizeChanger: false,
              prevIcon: <span>Anterior</span>,
              nextIcon: <span>Próxima</span>,
            }}
            rowKey={(record) => record.id}
            scroll={{ x: true }}
          />
        </ContainerTable>
      );
    }
    return <Skeleton active paragraph={{ rows: 10 }} />;
  }

  const menuItems: MenuProps["items"] = [
    { key: "1", label: "Editar" },
    { key: "2", label: "Excluir", danger: true },
  ];

  const columns: ColumnsType<IEvent> = [
    {
      title: "Evento",
      key: "responsive",
      responsive: ["xs", "sm"],
      render: (_, record: IEvent) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <strong>{record.name}</strong>
          <span>Equipes: {record.teams}</span>
          <span>Data: {record.date}</span>
          <StatusIndicator status={record.status} />
        </div>
      ),
    },
    {
      title: "Nome do evento",
      dataIndex: "name",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Total de equipes",
      dataIndex: "teams",
      key: "teams",
      align: "left",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "left",
      responsive: ["md"],
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
      align: "left",
      responsive: ["md"],
    },
    {
      key: "actions",
      align: "right",
      responsive: ["md"],
      render: () => (
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
          <Button type="text" icon={<MoreOutlined style={{ color: "#cc6237" }} />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <Container>
      <h3 style={{ color: "#cc6237", fontWeight: 600, fontSize: 16, margin: 0 }}>Todos eventos</h3>

      <CardStyled
        extra={
          <div style={{ padding: "24px 0px", width: "100%" }}>
            <Row gutter={[8, 16]} justify="start" align="middle">
              <Col xs={24} sm={16}>
                <Input
                  placeholder="Buscar eventos"
                  prefix={<SearchOutlined />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  allowClear
                  style={{ width: "100%", border: "none" }}
                />
              </Col>
              <Col xs={14} sm={8}>
                <Button
                  block
                  type="primary"
                  icon={<PlusOutlined />}
                  style={{
                    backgroundColor: "#cc6237",
                    borderColor: "#cc6237",
                  }}
                >
                  Inserir novo
                </Button>
              </Col>
            </Row>
          </div>
        }
        style={{ borderRadius: 12, marginTop: 30, border: "none" }}
      >
        {TableWithSkeleton()}
      </CardStyled>
    </Container>
  );
};

export default EventsPage;
