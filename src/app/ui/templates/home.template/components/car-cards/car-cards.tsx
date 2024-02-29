import { CarCardsItem } from './components/car-cards-item'
import { CarEntity } from '@/entities/car.entity'

export type CarCardsProps = {
	items: CarEntity[]
}

export function CarCards(props: CarCardsProps) {
	const { items } = props
	return (
		<ul className="flex w-full flex-col border-b-2 border-b-zinc-200">
			{items.map((item) => (
				<CarCardsItem key={item.id} {...item} />
			))}
		</ul>
	)
}
