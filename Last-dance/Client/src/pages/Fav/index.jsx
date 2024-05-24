import React, { useContext } from "react";
import { Table } from "antd";
import { FavContext } from "../../context/FavContext";

function Fav() {
    const { fav, setFav, setLocalFav } = useContext(FavContext);
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Image",
            dataIndex: "imgSrc",
            render: (record) => {
                return <img src={record} alt="" width={100} />;
            },
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Reset",
            render: (record) => {
                return (
                    <button onClick={() => {
                        const updated = fav.filter((q) => q._id !== record._id)
                        setFav(updated)
                        setLocalFav(updated)
                    }}>
                        reset
                    </button>
                )
            }
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };
    return (
        <Table
            style={{ marginTop: "80px" }}
            columns={columns}
            dataSource={fav}
            onChange={onChange}
        />
    );
};

export default Fav