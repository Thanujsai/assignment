import { Button, Card } from 'antd';
import { useEffect } from 'react';

function Template({ a, count, sum, increment }) {
  return (
    <div className="card-wrap">
      <Card className="Card">
        Click Count: {count}<hr />
        <Button type="primary" onClick={increment}>{a}</Button>
      </Card>
    </div>
  );
}

export default Template;
