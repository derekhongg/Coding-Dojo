import React from "react";

const Display = (props) => {
    const { boxColorArray } = props;

    return (
        <div>
            {
                boxColorArray.map((box, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: box.height,
                        width: box.width,
                        backgroundColor: box.color
                        }}>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;