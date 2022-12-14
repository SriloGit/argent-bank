import { createSlice } from '@reduxjs/toolkit'
import { setFirstName, setLastName, getFirstName, getLastName } from '../services/user.service'

const initialState = {
  email: "",
  firstName: getFirstName(),
  lastName: getLastName(),
  createdAt: "",
  updatedAt: "",
  id: ""
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const data = action.payload
      console.log(data)
      setFirstName(data.firstName)
      setLastName(data.lastName)
      state.email = data.email
      state.firstName = getFirstName()
      state.lastName = getLastName()
      state.createdAt = data.createdAt
      state.updatedAt = data.updatedAt
      state.id = data.id
      
    },
  },
})

// Export everything
export const { userProfile } = profileSlice.actions
export default profileSlice.reducer