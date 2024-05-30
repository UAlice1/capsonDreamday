import React from 'react'
import DashboardStatsGrid from '../../Components/DashboardStatsGrid'
import RecentHall from '../../Components/RecentHall'
import CustomerprofilePieChart from '../../Components/CustomerProfilePieChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				{/* <TransactionChart /> */}
              
				<CustomerprofilePieChart/>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentHall/>
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}