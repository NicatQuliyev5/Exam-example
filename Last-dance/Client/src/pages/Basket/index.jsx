import React, { useContext, useEffect, useState } from 'react';
import { BasketContext } from '../../context/BasketContext'
import { Table } from 'antd';
import Button from '@mui/material/Button';
import { getAll } from '../../services';

function Basket() {
  const { basket, setBasket, localBasket, setLocalBasket } = useContext(BasketContext)
  const columns = [
    {
      title: 'Image',
      dataIndex: 'imgSrc',
      render: (record) => {
        return <img src={record} alt="" width={100} />
      }
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Count',
      dataIndex: 'count'
    },
    {
      title: 'Decrement',
      render: (record) => {
        return (
          <>
            <Button variant="contained" color='error' onClick={() => {
              const decrement = basket.find((d) => d._id == record._id)
              if (decrement.count > 1) {
                decrement.count -= 1
                setBasket([...basket])
                setLocalBasket([...basket])
              } else {
                const decrement = basket.filter((d) => d._id != record._id)
                setBasket(decrement)
                setLocalBasket(decrement)
              }
            }}>-</Button>
          </>
        )
      }
    },
    {
      title: 'Increment',
      render: (record) => {
        return (
          <>
            <Button variant="contained" color='error' onClick={() => {
              const increment = basket.find((i) => i._id == record._id)
              increment.count += 1
              setBasket([...basket])
              setLocalBasket([...basket])
            }}>+</Button>
          </>
        )
      }
    },
    {
      title: 'Reset',
      render: (record) => {
        return (
          <>
            <Button variant="contained" color='error' onClick={() => {
              const resetPro = basket.filter((r) => r._id != record._id)
              setBasket(resetPro)
              setLocalBasket(resetPro)
            }}>Reset</Button>
          </>
        )
      }
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={basket}
        onChange={onChange}
      />
    </>
  )
}

export default Basket