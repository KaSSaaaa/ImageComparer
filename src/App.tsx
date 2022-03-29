import { invoke } from '@tauri-apps/api';
import { WebviewWindow, appWindow } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';

export default function App() {
  const [s, setS] = useState('');
  useEffect(() => {
    const before = performance.now();
    invoke('test', {file: ''}).then(e => {
      const after = performance.now();
      setS(e as string)
      console.log(after - before);
    } );
  }, [])
  return (
    <>{s}</>
  );
}
