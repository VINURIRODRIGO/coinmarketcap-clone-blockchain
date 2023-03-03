import type { NextPage } from 'next'
import Head from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Head />
      <div className='mt-10' />
      {/* <Trending /> */}
      <div className='mt-20' />
      {/* <CMCtable /> */}
    </div>
  )
}

export default Home
