import Link from 'next/link';
import styles from './projects.module.css';

export default function ProjectList() {
    return (
        <main>
            <h1>ProjectList</h1>

            <ul className={styles.ul}>
                <li>
                    <Link href='/projects/Jobit'>JobIt</Link>
                </li>
                <li>
                    <Link href='/projects/Carrent'>Car Rent</Link>
                </li>
                <li>
                    <Link href='/projects/Hipnode'>Hipnode</Link>
                </li>
            </ul>


        </main>
    )
}
