import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';
import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import ModalButton from './Modal';

// Top navbar
export default function Navbar() {
  
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">web3build</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li> 
                <ModalButton eventData={null} />
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/hacker.png'} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

/*
<Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
*/