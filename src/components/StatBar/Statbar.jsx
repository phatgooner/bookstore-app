// StatBar.jsx
import React from "react";

const stats = [
    { label: "Tổng sản phẩm", value: 0 },
    { label: "Có giá", value: 0 },
    { label: "Đang giảm giá", value: 0 },
];

const StatBar = () => {
    return (
        <div className="stat-container">
            {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatBar;
