import ClickableImage from '../Components/Images/ClickableImage'
import Image from '../Components/Images/Image'
import { H1, H2, H3, H4, H5 } from '../Components/Title'
import Link from '../Components/Link'

export default function Header () {
  return (
    <header className='flex flex-col sm:flex-row gap rounded-lg'>
      {/* <div>
        <ClickableImage
          src={"https://i.ibb.co/WVL34pN/IMG-0808.jpg"}
          fullSrc={"https://img.hotimg.com/IMG_8426.jpeg"}
          className="hidden sm:block h-60 w-60 rounded-lg"
          alt="logo"
        />
      </div> */}
      <div className='flex-1 flex flex-col bg-slate-100 p-4 rounded-lg'>
        <div className='flex flex-col items-center'>
          <H1 className='underline'>Nutdranai Jaruthikorn</H1>
          <H4 notBold italic>
            <span>pond-nj.career at outlook.com</span> |{' '}
            <span>
              <Link href='https://www.linkedin.com/in/nutdranai-jaruthikorn-319a90171/'>
                linkedIn
              </Link>
            </span>
          </H4>
        </div>
        <div className=''>
          <div className='flex-1 py-2'>
            I am currently a year one Ph.D. student in Formal Verification at
            CUHK advised by{' '}
            <Link href='https://lmpick.github.io/'>Prof. Lauren Pick</Link>.
          </div>
          <div className='italic text-base'>
            Algorithm a day keeps the poverty away
          </div>
        </div>
      </div>
    </header>
  )
}
