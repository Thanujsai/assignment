import { Button, Flex, Card } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useState } from 'react';

function Template({a}) {

    console.log("a is "+a)
    const [sum,setSum] = useState(0);
    const [count,setCount] = useState(0);

    const increment = () => {
        summ();
        setCount(count+1)
    }
    const summ = () => {
        setSum(count*a)
    }
  return (
      <div className="card-wrap">
      <Card className='Card'>
        Click Count : {count}<hr></hr>
        Sum : {sum}
        <Button type="primary" onClick={increment}>{a}</Button>
      </Card>
      </div>
  );
}

export default Template;
