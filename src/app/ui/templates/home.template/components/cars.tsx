import { CarsItem } from './cars-item'
import { CarEntity } from '@/entities/car.entity'

export type CarsProps = {
	items: CarEntity[]
}

export function Cars(props: CarsProps) {
	const { items } = props
	return (
		<ul className="flex w-full flex-col">
			{items.map((item) => (
				<CarsItem key={item.id} {...item} />
			))}
		</ul>
	)
}
