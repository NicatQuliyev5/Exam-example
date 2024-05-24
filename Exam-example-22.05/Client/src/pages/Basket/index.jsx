import { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import Button from "@mui/material/Button";
import { Table } from 'antd';
function Basket() {
    const { basket, setBasket, setLocalBasket } = useContext(BasketContext)
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
            defaultSortOrder: "descend",
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: "Count",
            dataIndex: "count",
        },
        {
            title: "Decrement",
            render: (record) => {
                return (
                    <>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                const updated = basket.find((b) => b._id == record._id)
                                if (updated.count > 1) {
                                    updated.count -= 1
                                    setBasket([...basket])
                                    setLocalBasket([...basket])
                                } else {
                                    const updated = basket.filter((b) => b._id != record._id)
                                    setBasket(updated)
                                    setLocalBasket(updated)
                                }
                            }}
                        >
                            -
                        </Button>
                    </>
                );
            },
        },
        {
            title: "Increment",
            render: (record) => {
                return (
                    <>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                const updated = basket.find((d) => d._id === record._id)
                                updated.count += 1
                                setBasket([...basket])
                                setLocalBasket([...basket])
                            }}
                        >
                            +
                        </Button>
                    </>
                );
            },
        },
        {
            title: "Reset",
            render: (record) => {
                return (
                    <>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                const updated = basket.filter((d) => d._id !== record._id)
                                setBasket(updated)
                                setLocalBasket(updated)
                            }}
                        >
                            Reset
                        </Button>
                    </>
                );
            },
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };
    return (
        <div className="container">
            <Table
                style={{ marginTop: "60px" }}
                columns={columns}
                dataSource={basket}
                onChange={onChange}
                showSorterTooltip={{
                    target: "sorter-icon",
                }}
                rowKey={basket._id}
            />
            <Button
                variant="contained"
                color="success"
                style={{ border: "none", backgroundColor: "#fda403", padding: "10px 40px", marginTop: "20px" }}
                onClick={() => {
                    setBasket([])
                    setLocalBasket([])
                }}
            >
                Order
            </Button>
        </div>
    );
}

export default Basket
