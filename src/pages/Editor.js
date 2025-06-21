import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Editor() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    // encodeURIComponentでURL安全にエンコード
    const encoded = encodeURIComponent(code);
    navigate(`/view?code=${encoded}`);
  };

  return (
    <div>
      <h2>コードを入力してください</h2>
      <textarea
        rows="10"
        cols="60"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>リンクを作成</button>
    </div>
  );
}

export default Editor;
