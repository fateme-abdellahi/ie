import "./LogPage.css";

import PageName from "../components/PageName";

const arr = [
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
  {
    name: "a",
    email: "a@a",
    date: "jan 23 2023",
    time: "6.43PM",
    event: "viewed Web status",
    ip: "123.255.123.255",
  },
];
const LogPage = () => {
  return (
    <div className="log-page-wrapper">
      <PageName name="Logs" />
      <div className="logs-wrapper">
        <div className="logs-title-wrapper">
          <div className="logs-item-title">User ID</div>
          <div className="logs-item-title">date</div>
          <div className="logs-item-title">event</div>
          <div className="logs-item-title">IP address</div>
        </div>
        {arr.map((item) => (
          <div className="log-items-wrapper">
            <div className="logs-name-email-wrapper">
              <div className="logs-item-title">{item.name}</div>
              <div className="logs-item-detail">{item.email}</div>
            </div>
            <div className="logs-date-time-wrapper">
              <div className="logs-item-title">{item.date}</div>
              <div className="logs-item-detail">{item.time}</div>
            </div>
            <div className="logs-item-title">{item.event}</div>
            <div className="logs-item-title">{item.ip}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LogPage;
