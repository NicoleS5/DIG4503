import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from '../components/CSS/styles.module.css';

const ID = () => {
  return (
      <div className={styles.body}>

        <Head>
          <title>Pokemon Database Lab9</title>
        </Head>

        <div>

          <h1 className={styles.head}><img className={styles.img} src="https://cdn140.picsart.com/321414779017201.png?type=webp&to=crop&r=256" alt="Pokemon Ball"/>Pokemon Database</h1>
          
          <ul className={styles.nav}>
            <li><a className={styles.li} href="/name">Search by Name</a></li>
            <li><a className={styles.li} href="/type">Search by Type</a></li>
            <li><a className={styles.li} href="/id">Search by ID</a></li>
          </ul>
          
          <div className={styles.search}>
            <p>
              <Link href="/index">
                <a className={styles.a}>Back to Home</a>
              </Link>
            </p>

            <p>Insert an ID Number to Search for a Pokemon!</p>
            <IdSearch/>
            <div className={styles.result} id="reportingArea"></div>
          </div>
        </div>
      </div>
    );
  }

export default ID;