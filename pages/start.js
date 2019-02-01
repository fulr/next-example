import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';

export default function StartPage(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData([
        { id: 1, name: 'bla' },
        { id: 2, name: 'bla' },
        { id: 3, name: 'bla' },
        { id: 4, name: 'bla' },
        { id: 5, name: 'bla' }
      ]);
      setLoading(false);
    }, 2000);
  }, [1]);

  return (
    <Layout title="Willkommen">
      <div>
        <table>
          {loading && <div>Loading</div>}
          {data.map(x => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  );
}
