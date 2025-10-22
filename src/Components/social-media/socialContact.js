import Link from 'next/link';
function SocialContact() {
  return (

    <div className="social_media">
      <Link href="https://github.com/Glitch-CoD3" target="_blank" rel="noopener noreferrer">
        <img className='github' src="https://www.svgrepo.com/show/452211/github.svg" alt="social-icon" />
      </Link>

      <Link href="https://www.linkedin.com/in/md-juel-rana-944949202" target="_blank" rel="noopener noreferrer">
        <img className='linkedin' src="https://www.svgrepo.com/show/500918/linkedin.svg" alt="social-icon" />
      </Link>

      <Link href="https://www.facebook.com/juel.rana.chaya/" target="_blank" rel="noopener noreferrer">
        <img className='facebook' src="https://www.svgrepo.com/show/503338/facebook.svg" alt="social-icon" />
      </Link>

      <Link href="https://www.youtube.com/@mdjuelrana3500" target="_blank" rel="noopener noreferrer">
        <img className='youtube' src="https://www.svgrepo.com/show/486513/youtube-filled.svg" alt="social-icon" />
      </Link>
    </div>

  )
}

export default SocialContact