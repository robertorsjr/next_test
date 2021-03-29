import Head from 'next/head'
import { NameHolder } from '../src/components'
import { getUsers }  from '../src/services/users'
import styles from '../src/styles/Home.module.css'
import { GetStaticProps } from 'next'


export default function Home({users}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>next_test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NameHolder users={users}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getUsers()
  const data = await response.data

  return{
    props:{
      users: data
    },
    revalidate: 5
  }
}

