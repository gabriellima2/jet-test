import { CarStatus } from '@/entities/car.entity'

export const CAR_STATUS: { [key in CarStatus]: CarStatus } = {
	available: 'available',
	unavailable: 'unavailable',
}
