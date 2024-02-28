import Image from 'next/image'

export type RatingProps = {
	value: number
}

const MAX_RATING = 5

export function Rating(props: RatingProps) {
	const { value } = props
	const rating = value > MAX_RATING ? MAX_RATING : value
	return (
		<div className="flex flex-row">
			{[...new Array(rating)].map((_, i) => (
				<Image
					key={i}
					src="/assets/icons/star.svg"
					alt="Star Icon"
					width={20}
					height={20}
				/>
			))}
		</div>
	)
}
