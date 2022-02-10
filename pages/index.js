import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function Home() {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <div className={styles.container}>
      <ReactQuill value={value} onChange={setValue}/>
    </div>
  )
}
