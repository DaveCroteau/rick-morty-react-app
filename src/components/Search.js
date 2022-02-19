import { useState } from 'react'

const Search = ({ getQuery, getPage }) => {
	const [text, setText] = useState('')
	const onChange = (q) => {
		setText(q)
		getQuery(q)
		getPage(1)
	}

	return (
		<section className="search">
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="search"
					className="form-control"
					placeholder="Search Characters"
					value={text}
					onChange={(e) => onChange(e.target.value.trim())}
					autoFocus
				/>
			</form>
		</section>
	)
}

export default Search
