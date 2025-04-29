"use client"
import React from 'react'
import saveData from '@/lib/action';
const Community = () => {
  console.log('Community');
  const handleClick = () => {
    console.log('clicked');
  }
  return (<>
    <div>Community</div>
    <form action={saveData}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <button type="submit" onClick={handleClick}>Submit</button>
    </form>
  </>
  )
}

export default Community