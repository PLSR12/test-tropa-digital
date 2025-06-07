const StatusIndicator = ({ status }: { status: string }) => {
  return (
    <div style={{ rowGap: 5 }}>
      <span style={{ color: status === "Ativo" ? "#4DEF00" : "red" }}>●</span>

      <span> {status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
};

export default StatusIndicator;
