import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
// import Stack from '@material-ui/core/Stack';

const { remote } = require('electron');

const Home = () => {
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
              remote.getCurrentWindow().close();
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
