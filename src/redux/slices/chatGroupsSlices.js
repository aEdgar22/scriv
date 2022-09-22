import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    groups: [],
    active: null
}

const chatGroupsSlices = createSlice({
  name: 'chatGroups',
  initialState,
  reducers: {
    
  }
});

export const {} = chatGroupsSlices.actions

export default chatGroupsSlices.reducer