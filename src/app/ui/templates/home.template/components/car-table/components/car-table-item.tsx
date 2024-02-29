import Image from 'next/image'

import { MenuButton } from '@/app/ui/atoms/menu-button'
import { Rating } from '@/app/ui/components/rating'
import { Status } from '@/app/ui/components/status'
import { Table } from '@/app/ui/components/table'

import { getDateText } from '@/helpers/get-date-text'
import { CarEntity } from '@/entities/car.entity'

export type CarTableItemProps = CarEntity

export function CarTableItem(props: CarTableItemProps) {
	return (
		<Table.Row>
			<Table.DataCell className="max-w-[298px]">
				<div className="flex flex-row items-center gap-2">
					<div className="relative min-h-[48px] w-[48px] min-w-[48px]">
						<Image
							src={props.imageUrl}
							alt={`Image of ${props.name}`}
							fill
							className="object-cover"
							priority
						/>
					</div>

					<p className="text-gray-900">{props.name}</p>
				</div>
			</Table.DataCell>
			<Table.DataCell>{getDateText(props.nextReservation)}</Table.DataCell>
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
