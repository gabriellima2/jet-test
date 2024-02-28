export type CarStatus = 'available' | 'unavailable'

export interface CarEntity {
	id: string
	name: string
	imageUrl: string
	rating: number
	nextReservation: Date
	status: CarStatus
}
