"use client"
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const MealDetails = ({params, searchParams}:any) => {
  console.log(searchParams, "searchParams")
  return (
    <div>MealDetails for {params.slug}</div>
  )
}

export default MealDetails