import { H3 } from '../Title'
import TagList from './TagList'

export default function ShowListHead ({
  title,
  date,
  tags,
  colorClass,
  subtitle,
  noUnderline = false
}) {
  return (
    <div className='flex flex-col gap-1'>
      <div className=' flex-1 flex-row flex justify-between'>
        <div>
          <H3 className={noUnderline ? '' : 'underline'}>{title}</H3>
          {subtitle ? <div className=''>{subtitle}</div> : null}
        </div>
        {date ? <div className=''>{date}</div> : null}
      </div>
      {tags ? <TagList tags={tags} colorClass={colorClass} /> : null}
    </div>
  )
}
