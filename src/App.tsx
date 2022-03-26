import { dialog } from '@tauri-apps/api';
import { useEffect, useState } from 'react';


export default function App() {
  const [s, setS] = useState('');
  useEffect(() => {
    dialog.open({
       directory: true,
       multiple: false
    }).then(e => {
      setS(e as string);
    });
  }, [])
  return (
    <>{s}</>
  );
}
