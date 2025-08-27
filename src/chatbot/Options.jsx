import React from "react";

const Options = (props) => {
    const options = [
        {
            text: "Tư vấn chọn sách",
            handler: props.actionProvider.handleBookAdvice,
            id: 2,
        },
    ];

    return (
        <div className="options-container">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={option.handler}
                    className="option-button"
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default Options;
