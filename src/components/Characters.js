import CharacterItem from './CharacterItem'

const Characters = ({ data }) => {
	if (data.error) {
		return <h1 className="center">{data.error}...</h1>
	} else {
		return (
			<section className="cards">
				{data.results.map((item) => (
					<CharacterItem key={item.id} item={item} />
				))}
			</section>
		)
	}
}

export default Characters
