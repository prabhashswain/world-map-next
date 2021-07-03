import React from 'react'
import styles from './Search.module.css'
import SearchRounded from "@material-ui/icons/SearchRounded";

const Search = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <SearchRounded color="inherit" />
            <input className={styles.input} {...rest} />
        </div>
    )
}

export default Search
