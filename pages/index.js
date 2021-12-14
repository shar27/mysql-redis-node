import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  fetch("https://eu1-generous-cub-33977.upstash.io/get/foo", {
  headers: {
    Authorization: "Bearer AYS5ACQgMWZjMzFlMjItYTU5OC00Y2IwLTg3YWYtNTU0YTEyZWVjODNlMTliYzAwMjg5N2Y5NDJkYzgxOWIwZDdhZmFlYWM4YzI="
  }
}).then(response => response.json())
  .then(data => console.log(data));
  
  return (
    <div className={styles.container}>
     hey
         </div>
  )
}
