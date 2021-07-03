import React from 'react'
import styles from './Country.module.css'
import Link from 'next/link'

const Country = ({ countries }) => {
    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div>Name</div>
                </button>
                <button className={styles.heading_population}>
                    <div>Population</div>
                </button>
            </div>
            {countries.map((country) => (
                <Link href={`/country/${country.alpha3Code}`} key={country.alpha3Code}>

                    <div className={styles.row} >
                        <div className={styles.name}>{country.name}</div>
                        <div className={styles.population}>{country.population}</div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default Country
