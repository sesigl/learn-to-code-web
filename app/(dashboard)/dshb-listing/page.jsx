











import Preloader from '@/components/common/Preloader'

import Listing from '@/components/dashboard/listing/Listing'

import Sidebar from '@/components/dashboard/Sidebar'
import HeaderDashboard from '@/components/layout/headers/HeaderDashboard'
import React from 'react'

export const metadata = {
  title: 'Dashboard-listing || Learn-to-Code - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Learn-to-Code, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <HeaderDashboard/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <div id='dashboardOpenClose'  className="dashboard -home-9 js-dashboard-home-9">
                <div  className="dashboard__sidebar scroll-bar-1">
                    <Sidebar/>

                </div>
                <Listing/>
              </div>
          </div>
        </main>
    </div>
  )
}
