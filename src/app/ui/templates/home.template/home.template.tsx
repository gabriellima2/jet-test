import { cars } from '@/data/cars'

import { CarTable } from './components/car-table'
import { Cars } from './components/cars'

export function HomeTemplate() {
	return (
		<div>
			<CarTable items={cars} />
			<Cars items={cars} />
		</div>
	)
}
