
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './Store/index.jsx'
import App from './App.jsx'
import './index.css' 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* //Provider is used to connect react application with redux as we passed store component in it. */}
  <App />
</Provider>,
)
