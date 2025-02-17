import Preloader from '@/components/common/Preloader'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import PageLinksOne from "@/components/common/PageLinksOne";
export const metadata = {
  title: 'Terms || Learn-to-Code - Professional LMS Online Education Course NextJS Template',
  description:
      'Elevate your e-learning content with Learn-to-Code, the most impressive LMS template for online courses, education and LMS platforms.',

}
export default function page() {
  return (
      <div className="main-content  ">
        <Preloader/>

        <Header/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <PageLinksOne />
          <PrivacyPolicy/>
          <FooterOne/>
        </div>

      </div>
  )
}
