import type { NextPage } from 'next'
import styles from '@sass/pages/landing.module.scss';
import Heading from '../components/Heading';

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Heading>
        Landing Page
      </Heading>
      <hr />
    </div>
  )
}

export default Home
