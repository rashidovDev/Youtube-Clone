
import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { loader } from '../utils/data'

const Loader  = ({videos}:any) => {
  return (
    <>
     <div  className='loader'>
     {loader.map((item, idx) => (
      <div key={idx} style={{marginBottom:"12px"}}>
       <div style={{paddingBottom:"5px"}}>
      <Skeleton width={320} height={180}/>
       </div>
      <div className="loader-bottom">
      <Skeleton circle={true} width={30} height={30}/>
      <div>
      <Skeleton  width={200} height={20} className='loader-text'/>
      <Skeleton  width={220} height={20}/>
      </div>
      </div>
      </div>
     ))}
       </div>
    </>
  )
}

export default Loader