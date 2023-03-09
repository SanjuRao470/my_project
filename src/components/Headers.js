import React from 'react';
import { AppstoreOutlined,EyeOutlined ,QuestionCircleOutlined ,UpOutlined ,BellOutlined} from '@ant-design/icons';
import { Avatar,Typography } from 'antd';
import { Layout,  Menu} from 'antd';
const { Title } = Typography;

const { Header} = Layout;


function Headers() {

  return (
    <div>
      
      <Layout/>
      <Header >
      {/* <Title style={{color:'white',float:'revert'}} level={4} >ASM  Ant Design</Title> */}
    
      <Avatar style={{float:"right",marginTop:"15px",margin:'10px',color:'#00ffff'}}  icon={<QuestionCircleOutlined />} />
      <Avatar style={{float:"right",marginTop:"15px", margin:'10px',color:'#00ffff'}}  icon={<UpOutlined />} />
      <Avatar style={{float:"right",marginTop:"15px", margin:'10px'}}  src={<img src={'./gm.png'} alt="avatar" />} />
      <Avatar style={{float:"right",marginTop:"15px",margin:'10px',color:'#00ffff'}}  icon={<BellOutlined />} />
      <Avatar shape="square"   style={{margin:'10px',margin:'10px',color:'#00ffff'}} icon={<AppstoreOutlined />} />
      <Avatar shape="square"  style={{  color: '#00ffff' }} icon={<EyeOutlined />} />
      
   
      
      {/* <Title style={{color:'white'}}  icon={<AppstoreOutlined />} level={4} >ASM  Ant Design</Title> */}
       
      </Header>
      <Layout/>
    </div>
  )
}

export default Headers;
