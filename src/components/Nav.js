import React from 'react'
import Novu from './sub/Novu'

export default function Nav() {
  return (
    <div className="relative">


    <nav className='fixed top-0 left-0 right-0 z-50'>
    
    <div className='flex justify-between'>
        
        <div className='flex gap-2 items-center'>
        <img
                // src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                src="./images/logo.png"
                alt=""
                className="p-4 h-20"
              />
              <div className='flex gap-2'>
              <ul>Home</ul>
            <ul>Profile</ul>

              </div>
                
        
        </div>
        <div className='flex items-center gap-2'>
        <img
                // src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                src="./images/meg.png"
                alt=""
                className="p-2 h-12"
              />
            <Novu/>
        <img
                src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                
                alt=""
                className="rounded-full p-5 h-20"
              />
            
        </div>
        </div>
      

</nav>
</div>

  )
}
