import Image from 'next/image'

import { MenuButton } from '@/app/ui/atoms/menu-button'
import { Rating } from '@/app/ui/components/rating'
import { Status } from '@/app/ui/components/status'
import { Table } from '@/app/ui/components/table'

import { CarStatus } from '@/entities/car.entity'

type CarTableItemProps = {
	id: string
	name: string
	imageUrl: string
	nextReservation: Date
	status: CarStatus
	rating: number
}

export function CarTableItem(props: CarTableItemProps) {
	const nextReservationText = `${props.nextReservation.getDate()}/${props.nextReservation.getMonth()}`
	return (
		<Table.Row>
			<Table.DataCell className="max-w-[298px]">
				<div className="flex flex-row items-center gap-2">
					<Image
						src={props.imageUrl}
						alt={`Image of ${props.name}`}
						width={48}
						height={46}
					/>
					<p className="text-gray-900">{props.name}</p>
				</div>
			</Table.DataCell>
			<Table.DataCell>{nextReservationText}</Table.DataCell>
			<Table.DataCell>
				<Status.Text status={props.status} />
			</Table.DataCell>
			<Table.DataCell>
				<Rating value={props.rating} />
			</Table.DataCell>
			<Table.DataCell className="max-w-[92px]">
				<MenuButton />
			</Table.DataCell>
		</Table.Row>
	)
}
