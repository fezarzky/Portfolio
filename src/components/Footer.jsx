import React from 'react'

export const Footer = () => {
  return (
    <footer className='pt-20'>
        <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Feza Rzky. All rights reserved.
        </p>
    </footer>
  )
}