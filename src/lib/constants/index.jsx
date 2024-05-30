import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { MdEvent } from "react-icons/md"; // New icon for Halls link
import { RiCalendarLine } from "react-icons/ri"; // New icon for Booking link
import { IoMdTime } from "react-icons/io"; // New icon for Recents link

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Halls',
		label: 'Service',
		path: '/Halls',
		icon: <MdEvent /> // Changed icon for Halls link
	},
	{
		key: 'Booking',
		label: 'Booking',
		path: '/BookingDash',
		icon: <RiCalendarLine /> // Changed icon for Booking link
	},
	{
		key: 'Recents',
		label: 'Recents',
		path: '/RecentHall',
		icon: <IoMdTime /> // Changed icon for Recents link
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
