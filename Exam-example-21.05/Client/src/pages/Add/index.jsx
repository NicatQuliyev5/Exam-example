import React, { useEffect, useState } from "react";
import { Table } from "antd";
import styles from "./index.module.scss";
import { getAll } from "../../services";
import { deleteOne } from "../../services";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function Add() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getAll().then((res) => {
      setMenus(res.data.response);
    });
  }, []);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend"],
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
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              deleteOne(record._id).then((res) => {
                if (res.status === 200) {
                  const filtered = [...menus].filter(
                    (m) => m._id != record._id
                  );
                  setMenus(filtered);
                }
              });
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="container">
      <form>
        <h2>Add Form</h2>
        <TextField
          required
          id="outlined-required"
          label="Title"
          placeholder="Title"
        />
        <TextField
          required
          id="outlined-required"
          label="Price"
          placeholder="Price"
        />
        <TextField
          required
          id="outlined-required"
          label="Image Src"
          placeholder="Image Src"
        />
        <TextField
          required
          id="outlined-required"
          label="Description"
          placeholder="Description"
        />
        <Button variant="contained">Primary Button</Button>
      </form>
      <Table
        columns={columns}
        dataSource={menus}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        rowKey={menus._id}
      />
    </div>
  );
}

export default Add;
