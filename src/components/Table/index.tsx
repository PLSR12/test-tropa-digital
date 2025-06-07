import styled from "styled-components";

export const ContainerTable = styled.div`
  .ant-table {
    font-family: "Roboto", sans-serif;

    th:before {
      display: none !important;
    }

    .ant-table-thead > tr > th {
      background: #fff;
      color: #cc6237;
      font-weight: 400;
      border-bottom: 1px solid #f4dfd5;
      border-right: none !important;
    }

    .ant-table-tbody > tr > td {
      border-bottom: 1px solid #f4dfd5;
      border-right: none !important;
    }

    .ant-table-tbody > tr:hover > td {
      background: #fff6f2;
    }
  }

  .ant-table-cell {
    border-right: none !important;
  }

  .ant-pagination {
    display: flex;
    justify-content: end;
    gap: 8px;
  }

  .ant-pagination-item,
  .ant-pagination-prev,
  .ant-pagination-next {
    border-radius: 999px !important;
    min-width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border: none;
    background-color: #f7f7f7;

    a,
    span {
      color: #1e1e1e;
    }
  }

  .ant-pagination-item-active {
    background-color: #cc6237;
  }

  .ant-pagination-item-active a {
    color: white !important;
  }

  .ant-pagination-prev span,
  .ant-pagination-next span {
    padding: 0 12px;
    color: #1e1e1e;
  }

  .ant-pagination-prev {
    background-color: #f7f7f7;
  }

  .ant-pagination-next {
    background-color: #cc6237;
    span {
      color: #f7f7f7 !important;
    }
  }

  .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination-next.ant-pagination-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ant-pagination-prev.ant-pagination-disabled span,
  .ant-pagination-next.ant-pagination-disabled span {
    color: #aaa;
  }
`;
