import React from 'react'
import styles from './Country.module.css'
import Layout from '../../components/Layout/Layout'

const country = ({ country }) => {
    return (
        <Layout title={country.name}>
            <div>
            <div className={styles.overview_panel}>
                <img 
                src={country.flag} 
                alt={country.name} 
                />
                <h1 className={styles.overview_name}>{country.name}</h1>
                <div className={styles.overview_region}>{country.region}</div>
            
                <div className={styles.overview_numbers}>
                <div className={styles.overview_population}>
                    <div className={styles.overview_value}>{country.population}</div>
                    <div className={styles.overview_label}>Population</div>
                </div>

                <div className={styles.overview_area}>
                    <div className={styles.overview_value}>{country.area}</div>
                    <div className={styles.overview_label}>Area</div>
                </div>
            </div>
            </div>

            <div className={styles.details_panel}>
                <h4 className={styles.details_panel_heading}>Details</h4>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Capital</div>
                    <div className={styles.details_panel_value}>{country.capital}</div>
                </div>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Subregion</div>
                    <div className={styles.details_panel_value}>{country.subregion}</div>
                </div>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Language</div>
                    <div className={styles.details_panel_value}>{country.languages.map(({name})=>name).join(',')}</div>
                </div>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Currency</div>
                    <div className={styles.details_panel_value}>{country.currencies.map(({code})=>code).join(',')}</div>
                </div>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Native name</div>
                    <div className={styles.details_panel_value}>{country.nativeName}</div>
                </div>

                <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Gini</div>
                    <div className={styles.details_panel_value}>{country.gini} %</div>
                </div>

            </div>            

            </div>
        </Layout>
    )
}

export default country;
export async function getServerSideProps({ params }) {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`)
    const country = await res.json()
    return {
        props: {
            country
        },
    }
}
