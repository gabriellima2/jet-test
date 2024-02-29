import { Rating } from '@/app/ui/components/rating'
import { Status } from '@/app/ui/components/status'
import { Card } from '@/app/ui/components/card'

import { CarEntity } from '@/entities/car.entity'

export type CarsItemProps = CarEntity

export function CarsItem(props: CarsItemProps) {
	const nextReservationText = `${props.nextReservation.getDate()}/${props.nextReservation.getMonth()}`
	return (
		<li className="w-full">
			<Card.Root>
				<div className="xs:w-auto relative w-full">
					<Card.Image src={props.imageUrl} alt={`Image of ${props.name}`} />
					<Status.Icon
						status={props.status}
						className="absolute left-[2px] top-[2px]"
					/>
				</div>
				<Card.Content>
					<div className="flex h-full flex-col justify-between">
						<div className="flex flex-col gap-2">
							<Card.Title>{props.name}</Card.Title>
							<Card.Paragraph>
								Next Reservation: {nextReservationText}
							</Card.Paragraph>
						</div>
						<Rating value={props.rating} />
					</div>
					<Card.Menu />
				</Card.Content>
			</Card.Root>
		</li>
	)
}
