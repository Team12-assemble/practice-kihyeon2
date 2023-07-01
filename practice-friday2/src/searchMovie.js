import React, {useEffect} from "react";
import { useState } from "react";

function Usefetch(url) {
    const [data , set_data] = useState([])
    const [query , set_query] = useState('')

    useEffect(() => {
        if (!query) {
           fetch(url)
        } else {
            const search_url = url + `&query_term=${query}`
            fetch(search_url)
        }
    }, [query])

    return {data,query ,set_query}
}

export default function SearchMovie() {
    const [text , set_text] = useState('')

    const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'

    const {data, query, set_query} = Usefetch(url)
    return (
        <div>
            <h1>검색어: {query}</h1>
            <h3>검색결과</h3>
            <input type="text" />
            <button>검색</button>

        </div>
    )
}