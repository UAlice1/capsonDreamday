export function getOrderStatus(status) {
	switch (status) {
		case 'PLACED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-purple-600 bg-purple-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'CONFIRMED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-blue-600 bg-blue-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'IN_PROGRESS':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'COMPLETED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'CANCELLED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
	}
}
