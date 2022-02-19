import { useState, useEffect } from 'react'

const Pages = ({ data, page, getPage }) => {
	const max = data?.info?.pages || 1

	const onChange = (p) => {
		getPage(p)
	}

	const onClick = (p) => {
		getPage(p)
	}

	return (
		<section className="pages">
			<button className="btn" onClick={() => onClick(page - 1 > 0 && page < max ? page - 1 : 1)}>
				prev
			</button>
			<input
				type="number"
				className="current-page"
				value={page}
				onChange={(e) => onChange(Number(e.target.value) > 0 ? Number(e.target.value) : 1)}
			/>
			<button className="btn" onClick={() => onClick(page + 1 > max ? max : page + 1)}>
				next
			</button>
			<button className="btn" onClick={() => onClick(max)}>
				...{max}
			</button>
		</section>
	)
}

export default Pages
