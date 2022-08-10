import React from "react";
import historyData from "./historyData";
import "./History.scss";

const History = () => {
  return (
    <div className="history">
      <div className="history-card">
        {historyData.map((data) => {
          return (
            <div className="details">
              <h4 className={data.class}>
                {data.title}
                <span>{data.icon}</span>
              </h4>
              <h2 className={data.class}>{data.number}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
