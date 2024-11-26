"use client"
import {useState} from 'react'

import { Button, Space, Table, Tag } from 'antd';
import EditUserModal from './EditUserModal';
import Link from 'next/link';

const UserTable = ({user}) => {
    const [openModal, setOpenModal] = useState(true)
    const [userData, setUserData] = useState(null)

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'User Name',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          key: 'phone',
          dataIndex: 'phone',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={()=>{setOpenModal(true), setUserData(record)}}>Invite {record?.id}</Button>
              <a>Delete</a>
              <a hraf={`/users/${record.id}`}>Read More </a>
            </Space>
          ),
        },
      ];
      
  return (
    <div className="px-10 w-4/5 mx-auto">
        <Table bordered columns={columns} dataSource={user} />
        {
            openModal && userData  && <EditUserModal  openModal={openModal} setOpenModal={setOpenModal} user={userData}/>
        }

    </div>
  )
}

export default UserTable