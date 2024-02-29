import { CarTable } from './components/car-table'
import { cars } from '@/data/cars'

export function HomeTemplate() {
	return <CarTable items={cars} />
}
