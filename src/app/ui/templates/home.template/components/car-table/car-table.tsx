import { Table } from '@/app/ui/components/table'
import { CarTableItem } from './components/car-table-item'

import { CarEntity } from '@/entities/car.entity'

type CarTableProps = {
	items: CarEntity[]
}

export function CarTable(props: CarTableProps) {
	const { items } = props
	return (
		<Table.Root>
			<Table.Head>
				<Table.Row>
					<Table.HeaderCell className="max-w-[298px]">Car</Table.HeaderCell>
					<Table.HeaderCell>Next Reservation</Table.HeaderCell>
					<Table.HeaderCell>Status</Table.HeaderCell>
					<Table.HeaderCell>Rating</Table.HeaderCell>
					<Table.HeaderCell className="max-w-[92px]">Actions</Table.HeaderCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{items.map((item) => (
					<CarTableItem key={item.id} {...item} />
				))}
			</Table.Body>
		</Table.Root>
	)
}
