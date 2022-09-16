import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoaderVideo : React.FC = () => {
  return (
    <div>
        <Skeleton width={400} height={400}/>
        <Skeleton width={500} height={30}/>
    </div>
  )
}

export default LoaderVideo