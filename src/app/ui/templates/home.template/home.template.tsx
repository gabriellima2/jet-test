import { cars } from '@/data/cars'

import { CarTable } from './components/car-table'
import { Cars } from './components/cars'

export function HomeTemplate() {
	return (
		<div className="w-full">
			<div className="hidden sm:block">
				<CarTable items={cars} />
			</div>
			<div className="sm:hidden">
				<Cars items={cars} />
			</div>
		</div>
	)
}
