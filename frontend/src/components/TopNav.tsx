'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menubar } from 'primereact/menubar';
import { signIn, signOut, useSession } from 'next-auth/react';

const TopNav = () => {
    const router = useRouter();
      const { data: session } = useSession();
      console.log(session);

    function AuthHandle() {
      if (session) {
        signOut();
      } else {
        signIn();
      }
    }

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
      {
        label: session ? "Logout" : "Login",
        command: () => AuthHandle(),
      }
    ]

    return (
      <Menubar model={items} start={customHome} />
    )

}

export default TopNav;