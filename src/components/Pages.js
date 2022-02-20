import { useState } from 'react'

const Pages = ({ data, page, getPage }) => {
	const max = data?.info?.pages || 1

	const [pageReq, setPageReq] = useState(page)

	const onChange = p => {
		setPageReq(p)
	}

	const onBlur = pageReq => {
		getPage(pageReq)
	}

	const onClick = p => {
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
				value={pageReq}
				onChange={e => onChange(e.target.value)}
				onBlur={e => onBlur(Number(pageReq) > 0 ? Number(pageReq) : 1)}
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
