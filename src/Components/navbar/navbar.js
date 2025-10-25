import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className='navigation'>
        <nav>
          <Link className='active' href="/">Home</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/education">Education</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

        </nav>
      </div>
    </>
  );
}
