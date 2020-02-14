import React from 'react';
import MovieList from './components/MovieList'
import 'antd/dist/antd.css'

import CustomLayout from './container/CustomLayout'

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <MovieList />
      </CustomLayout>
    </div>
  );
}

export default App;
