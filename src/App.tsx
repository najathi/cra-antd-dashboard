import { ConfigProvider } from 'antd';

import './App.css';

import ComponentRenderer from './routes/ComponentRenderer';

function App() {
  return (
    <ConfigProvider>
      <ComponentRenderer />
    </ConfigProvider>
  );
}

export default App;
