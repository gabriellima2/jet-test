import { AlertCircle, Check, X } from 'lucide-react'

import { CarStatus } from '@/entities/car.entity'
import { CAR_STATUS } from '@/helpers/car-status'
import { cn } from '@/helpers/cn'

export type StatusDefaultProps = {
	status: CarStatus
	className?: string
}

const DEFAULT_ICONS = {
	available: Check,
	unavailable: X,
}

const getVariants = (status: CarStatus) => ({
	isAvailable: status === CAR_STATUS.available,
	isUnavailable: status === CAR_STATUS.unavailable,
})

function Text(props: StatusDefaultProps) {
	const { status, className } = props
	const statusText = !CAR_STATUS[status] ? 'Invalid Status' : status
	const variants = getVariants(status)
	return (
		<p
			className={cn(
				'rounded-md bg-gray-200 px-[10px] py-[2px] text-xs font-medium capitalize text-gray-800',
				{
					'bg-green-100 text-green-800': variants.isAvailable,
					'bg-red-100 text-red-800': variants.isUnavailable,
				},
				className
			)}
		>
			{statusText}
		</p>
	)
}

function Icon(props: StatusDefaultProps) {
	const { status, className } = props
	const StatusIcon = DEFAULT_ICONS[status] || AlertCircle
	const variants = getVariants(status)
	return (
		<div
			className={cn(
				'flex h-6 w-6 items-center justify-center rounded-full bg-gray-600',
				{
					'bg-[#057A55]': variants.isAvailable,
					'bg-red-700': variants.isUnavailable,
				},
				className
			)}
		>
			<StatusIcon size={16} color="#ffffff" />
		</div>
	)
}

export const Status = { Text, Icon }
