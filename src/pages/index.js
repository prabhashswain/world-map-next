import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import Search from '../components/Search/Search'
import Country from '../components/Country/Country'
import { useState } from 'react'

export default function Home({ countries }) {
  const [ keyword,setKeyword ] = useState("")

  const filterCountry = countries.filter(
    (country) =>
    country.name.toLowerCase().includes(keyword) ||
    country.region.toLowerCase().includes(keyword) ||
    country.subregion.toLowerCase().includes(keyword)
  )
  const onInpuChange = e=>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }
  return (
    <Layout title="World Rank Map" >
      <div className={styles.count}>Found {countries.length} countries</div>
      <Search placeholder="Filter by Name, Region or SubRegion" onChange={onInpuChange} />
      <Country countries={filterCountry} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const countries = await res.json()

  return {
    props: {
      countries
    },
  }
}