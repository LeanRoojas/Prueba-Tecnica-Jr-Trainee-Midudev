import { useEffect, useState } from "react"
import './App.css'

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState('')

    // get fact
    useEffect(() => {
        fetch(CAT_FACT_ENDPOINT)
            .then(res => {
                if (!res.ok) throw new Error('Error fetching fact')
                return res.json()
            })
            .then(data => {
                setFact(data.fact)
            })
            .catch(err => {

            })
    }, [])

    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ', 1)

        console.log(firstWord);

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImgURL(url)
            })
    }, [fact])



    return (
        <main>
            <h1>App de gatitos</h1>

            {fact && <p>{fact}</p>}
            {imgURL && <img src={`${CAT_PREFIX_IMG_URL}${imgURL}`} alt={`images extracted using the first word from ${fact}`} />}
        </main>
    )
}