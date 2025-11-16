import Body from './Body'
import FootLinks from './FootLinks'

export default function ShowListBody ({ description, descriptionE, links }) {
  if (!description && !descriptionE) return null
  return (
    <div className=''>
      <Body description={description} descriptionE={descriptionE} />
      <FootLinks links={links} />
    </div>
  )
}
