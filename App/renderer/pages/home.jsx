import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

// import { app } from 'electron';

const { remote } = require('electron');

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hi My Boss</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Button
            variant='contained'
            size='large'
            style={{
              backgroundColor: '#2F4858',
              color: 'white',
            }}
            onClick={() => {
              router.push('/main');
            }}
          >
            START
          </Button>

          <Button
            variant='contained'
            size='large'
            style={{
              backgroundColor: '#2F4858',
              color: 'white',
              marginTop: '20px',
            }}
            onClick={() => {
              console.log('app------', remote);
              // app.quit();
            }}
          >
            QUIT
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
