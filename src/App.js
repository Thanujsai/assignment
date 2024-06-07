import logo from './logo.svg';
import './App.css';
import Template from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'antd';

function App() {
  const [counts, setCounts] = useState(Array(9).fill(0));
  const [sums, setSums] = useState(Array(9).fill(0));

  const resetCountsAndSums = () => {
    setCounts(Array(9).fill(0));
    setSums(Array(9).fill(0));
  };

  const incrementCount = (index, a) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);

    const newSums = [...sums];
    newSums[index] = newCounts[index] * a;
    setSums(newSums);
  };

  return (
    <div className="App">
      <h1>Thanuj</h1>
      <div className="container">
        <div className="row">
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="col-md-4" key={index}>
              <Template
                a={index + 1}
                count={counts[index]}
                sum={sums[index]}
                increment={() => incrementCount(index, index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
      <h3>Total Sum: {sums.reduce((acc, curr) => acc + curr, 0)}</h3>
      <Button danger className="btn" onClick={resetCountsAndSums}>Reset</Button>
    </div>
  );
}

export default App;
