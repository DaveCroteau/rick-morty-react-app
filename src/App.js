import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Characters from './components/Characters'
import Pages from './components/Pages'
import './App.css'
import Spinner from './components/Spinner'

function App() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)

	useEffect(() => {
		const fetchItems = async () => {
			try {
				setIsLoading(true)
				const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`)
				const dataSet = await response.json()
				setData(dataSet)
				setIsLoading(false)
			} catch (err) {
				setData({ error: err.message })
				setIsLoading(false)
			}
		}
		fetchItems()
	}, [query, page])

	return (
		<div className="container">
			<Header />
			<Search getQuery={q => setQuery(q)} getPage={p => setPage(p)} />
			{isLoading ? <Spinner /> : <Characters data={data} />}
			{!isLoading && <Pages data={data} page={page} getPage={p => setPage(p)} />}
		</div>
	)
}

export default App
