import { DownloadOutlined, CarOutlined, CodeOutlined, ToolOutlined, CompassOutlined, DownOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Table, Tabs, Dropdown, Button, Space, Cascader, DatePicker, Typography, Avatar, Radio } from 'antd';
import { useState,useEffect } from 'react';
const { Header, Content, Sider, Footer } = Layout;
const { RangePicker } = DatePicker;
const { Title } = Typography;


// const item1 = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     ),
//   },
// ];

// const handleButtonClick = (e) => {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// };

// const handleMenuClick = (e) => {
//   message.info('Click on menu item.');
//   console.log('click', e);
// };

// const item = [
//   {
//     label: '1st menu item',
//     key: '1',
//     icon: <UserOutlined />,
//   },
//   {
//     label: '2nd menu item',
//     key: '2',
//     icon: <UserOutlined />,
//   },
//   {
//     label: '3rd menu item',
//     key: '3',
//     icon: <UserOutlined />,
//     danger: true,
//   },
//   {
//     label: '4rd menu item',
//     key: '4',
//     icon: <UserOutlined />,
//     danger: true,
//     disabled: true,
//   },
// ];

// const menuProps = {
//   item,
//   onClick: handleMenuClick,
// };


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <CompassOutlined />),
  getItem(<CodeOutlined />),
  getItem(<ToolOutlined />),
  getItem(<CarOutlined />),


];


const columns = [
  {
    title: 'CaseId',
    rowScope: 0,
    dataIndex: 'key',


  },
  {
    title: 'Alert',
    children: [
      {
        title: 'Alert Id',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ]
  },
  {
    title: 'Customer',
    children: [
      {
        title: 'Customer Id',
        dataIndex: 'street',
        key: 'street',
        width: 900,
      },
    ]
  },
  {
    title: 'Alert',
    children: [
      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ]
  },
  {
    title: 'Account',
    children: [
      {
        title: 'Account Number',
        dataIndex: 'street',
        key: 'street',
        width: 500,
      },
    ]
  },
  {
    title: 'Alert Source',
    children: [
      {
        title: '',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ]
  },
  {
    title: 'Address',
    display: 'flex',
    justifyContent: 'left',
    children: [
      {
        title: '',
        dataIndex: 'street',
        key: 'street',
        width: 3000,
      },
    ]
  },
  {
    title: 'Address',
    children: [
      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 40,
      },
    ]
  },
  {
    title: 'Address',
    children: [
      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ]
  },

];


// const data = [];
// for (let i = 0; i < 10; i++) {
//   data.push({
//     // key: i,
//     name: 'John Brown',
//     // age: i + 1,
//     street: 'Lake Park',
//   });
// }



function Sliders() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:5000/findData').then((res)=>res.json()).then((result)=>{
      setData(result)
    })
  },[])
  console.log(":?????",data)
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Header style={{ padding: 10, background: colorBgContainer }}>
            <Breadcrumb style={{ padding: '10px 0', marginLeft: "20px" }}>
              <Breadcrumb.Item style={{ color: '#00ffff' }}>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item style={{ color: '#000000' }}>Case by user group</Breadcrumb.Item>
              {/* <h1 style={{ padding: 10,color: '#000000' }}>All Cases;</h1> */}
            </Breadcrumb>
          </Header>
          <Header style={{ background: colorBgContainer }}>
            <h1 style={{ color: '#000000' }}>All Cases</h1>
          </Header>
        </div>

        <Content style={{ margin: '24px 16px 0' }}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space', width: '100%', marginBottom: '10px', }}>
            <p>By User Group</p>
            <p>By Investigator</p>
          </div>
          <div style={{ padding: 24, marginBottom: '80px', minHeight: 560, background: colorBgContainer, color: '#000000' }}>Cases by User Group
            <Avatar style={{ float: "right", marginTop: "15px", margin: '10px', background: '#ffffff', color: '#00ffff' }} icon={<DownloadOutlined />} />
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: 'User Group A',
                  key: '1',

                },
                {
                  label: 'User Group B',
                  key: '2',


                },
                {
                  label: 'User Group C',
                  key: '3',

                },
                {
                  label: 'User Group D',
                  key: '3',

                },
              ]}
            />
            {/* <p style={{ marginLeft: '10px' }}>Status</p>
            <Button> <Space> All <DownOutlined /></Space></Button> */}

            <Button size='small' style={{ float: "right", marginTop: "15px", margin: '10px', background: '#00ffff', color: 'white' }}>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>

            <p style={{ marginLeft: '30px' }}>Status</p>
            {/* <Space  > */}
            {/* <Space wrap style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space', margin: "10px", width: '100%' }}> */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
              <Cascader
                defaultValue={['All']}
              />
              {/* <Cascader size="small"  /> */}
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
              >
                <Radio.Group style={{ marginBottom: 8, }}>
                  <Radio.Button value="top">L1</Radio.Button>
                  <Radio.Button value="bottom" > L2</Radio.Button>
                  <Radio.Button value="left">L3</Radio.Button>
                </Radio.Group>
              </Dropdown>
              <Radio.Group style={{ marginBottom: 8, }}>
                <Radio.Button value="top">7 Days</Radio.Button>
                <Radio.Button value="bottom" > 30 Days</Radio.Button>
                <Radio.Button value="left">90 Days</Radio.Button>
                <Radio.Button value="right">180 Days</Radio.Button>
                <Radio.Button value="right">360 Days</Radio.Button>
              </Radio.Group>
              <RangePicker style={{ marginBottom: 10, }} />
            </div>
            <Table style={{ marginTop: '15px' }} columns={columns} dataSource={data} bordered />;
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout >

  )
}
export default Sliders;
