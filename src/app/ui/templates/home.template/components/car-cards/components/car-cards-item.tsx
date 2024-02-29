import { Rating } from '@/app/ui/components/rating'
import { Status } from '@/app/ui/components/status'
import { Card } from '@/app/ui/components/card'

import { getDateText } from '@/helpers/get-date-text'
import { CarEntity } from '@/entities/car.entity'

export type CarCardsItemProps = CarEntity

export function CarCardsItem(props: CarCardsItemProps) {
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
					<div className="flex h-full flex-col justify-between gap-4">
						<div className="flex flex-col gap-2">
							<Card.Title>{props.name}</Card.Title>
							<Card.Paragraph>
								Next Reservation: {getDateText(props.nextReservation)}
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
