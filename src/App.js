import logo from './logo.svg';
import './App.css';
import Template from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <h1>Thanuj</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Template a={1} />
          </div>
          <div className="col-md-4">
            <Template a={2} />
          </div>
          <div className="col-md-4">
            <Template a={3} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Template a={4} />
          </div>
          <div className="col-md-4">
            <Template a={5} />
          </div>
          <div className="col-md-4">
            <Template a={6} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Template a={7} />
          </div>
          <div className="col-md-4">
            <Template a={8} />
          </div>
          <div className="col-md-4">
            <Template a={9} />
          </div>
        </div>
      </div>
      <h3>Total Sum :</h3>
      <Button danger className='btn'>Reset</Button>   
    </div>
  );
}

export default App;
