import { randomUUID } from 'crypto'

import { CarEntity } from '@/entities/car.entity'
import { CAR_STATUS } from '@/helpers/car-status'

export const cars: CarEntity[] = [
	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.png',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},
	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.png',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},
	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.png',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},

	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.png',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},
	{
		id: randomUUID(),
		name: 'Mini Cooper 2020',
		imageUrl: '/assets/images/car-image.png',
		rating: 5,
		status: CAR_STATUS.available,
		nextReservation: new Date(2024, 7, 11),
	},
]
