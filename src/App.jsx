import { useEffect, useState } from "react"


const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// const CAT_IMG_ENDPOINT = `https://cataas.com/cat/says/${firstword}?json=true`



export function App() {
    const [fact, setFact] = useState('')


    useEffect(() => {
        fetch(CAT_FACT_ENDPOINT)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])


    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}