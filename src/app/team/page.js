import NavDirectori from '@/component/mudole/navDirectori/navDirectori'
import MainTeamPage from '@/component/template/mainTeamPage/mainTeamPage'
import teamModel from '@/models/team'
import connectToDb from '@/utils/db'
import React from 'react'

export default async function Team() {
    connectToDb()
    const team = await teamModel.find({})
  return (
    <>
        <NavDirectori />
        <MainTeamPage team={team}/>
    </>
  )
}
