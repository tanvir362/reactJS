import React from 'react'
import { List, Card } from 'antd';
import Movies from '../movies/MovieImporter'


const MovieList = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 3,
    }}
    dataSource={ Movies }
    renderItem={item => (
      <List.Item
      extra={
        <img
          width={250}
          alt="logo"
          src={item.imgsrc}
        />
      }

      >
        <List.Item.Meta
          title={<a href={item.src}>{item.name}</a>}
          description={item.description}
        />
        {/* <span title={item.src}>Link</span> */}
        {/* <Card title={item.name}>{item.description}</Card> */}
      </List.Item>
    )}

/>
)

export default MovieList