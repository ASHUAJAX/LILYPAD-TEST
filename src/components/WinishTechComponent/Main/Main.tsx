import CardMain from './Card/CardMain'
import Filters from './Filters'

function Main() {
  return (
    <div className='flex-1 pr-10'>
      <Filters/>
      <CardMain/>
    </div>
  )
}

export default Main