import React from 'react'
import { useSelector } from 'react-redux'
import { GroupChatContanier } from './GroupStyles'

export const GroupChat = () => {

  const {userName} =  useSelector(state => state.auth)

  return (
    <GroupChatContanier>
        <img src="" alt="" />
        <span>Los cachiporra</span>
        <h1>{userName}</h1>

    </GroupChatContanier>
  )
}
