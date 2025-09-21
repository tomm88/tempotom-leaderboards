'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menubar } from 'primereact/menubar';

const TopNav = () => {
    const router = useRouter();

    const customHome = () => (
        <Link href={'/'}>
            <h1 className='pr-4 p-menuitem-link'>Logo Here</h1>
        </Link>
    )
  
    const items = [
      {
        label: "Games",
        command: () => router.push('/games')
      },
      {
        label: "Weekly Leaderboard",
        command: () => router.push('/weeklyleader')
      },
      {
        label: "IRL Challenges",
        command: () => router.push('/irlchallenge')
      },
      {
        label: "News",
        command: () => router.push('/news')
      },
      {
        label: "Forum",
        command: () => router.push('/forum')
      },
      {
        label: "Contact",
        command: () => router.push('/contact')
      },
      {label: "Login"}
    ]

    return (
      <Menubar model={items} start={customHome} />
    )

}

export default TopNav;