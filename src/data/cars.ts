import { CarEntity } from '@/entities/car.entity'
import { CAR_STATUS } from '@/helpers/car-status'
import { randomUUID } from 'crypto'

export const cars: CarEntity[] = [
	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.jpeg',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},
]
