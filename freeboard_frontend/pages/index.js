import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My freeboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>



        <Nav>
          <Link href='/boards/new'>게시판등록</Link>
        </Nav>
      </main>

    </div>
  )
}


const Nav = styled.div` 

`