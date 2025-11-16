import { ToggleDiv } from '../ToggleDiv'

export default function Body ({ description, descriptionE }) {
  let useDescription = descriptionE ? descriptionE : description

  return (
    <div className='flex-1'>
      <p className='text-justify'>{useDescription}</p>
    </div>
  )
}
