import { Card, Avatar} from 'antd'
import { HeartTwoTone } from '@ant-design/icons';
import React from 'react';

export default function Post({ post }) {
  return (
    <Card 
    hoverable
    actions={[
        <HeartTwoTone className='feed-hearth' twoToneColor="#eb2f96" />
    ]}
      style={{ width: 300 }}
      cover={
        <img alt={post.description} src={post.photo} />
      }
    >
      <Card.Meta
        avatar={<Avatar src="https://randomuser.me/api/portraits/men/7.jpg" />}
        title={post.username}
        description={post.description}
      />
    </Card>
  )
}