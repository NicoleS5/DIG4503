import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from '../components/CSS/styles.module.css';

const Name = () => {
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
          <li><a className={styles.li} href="/all">Pokemon List</a></li>
          <li><a className={styles.li} href="/random">Randomizer</a></li>
        </ul>
        
        <div className={styles.search}>
          <p>
            <Link href="/index">
              <a className={styles.a}>Back to Home</a>
            </Link>
          </p>

          <p>Insert a Name to Search for a Pokemon!</p>
          <NameSearch/>
          <div className={styles.result} id="reportingArea"></div>
        </div>
      </div>
    </div>
  );
}

export default Name;