import { useSearchParams } from 'react-router-dom';

function Viewer() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div>
      <h2>保存されたコード</h2>
      <pre style={{ backgroundColor: '#eee', padding: '1em' }}>
        {code}
      </pre>
    </div>
  );
}

export default Viewer;
