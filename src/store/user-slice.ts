
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { RootState } from './configure-store'
import { User } from '@/core/domain/models'
import { ListUsers } from '@/core/application/services/users/list-users'
import { GetUser } from '@/core/application/services/users/get-user'

const userAdapter = createEntityAdapter<User>()

export const listUsersAsync = createAsyncThunk<
ListUsers.Output,
ListUsers.Query
>('user/listUsersAsync', async (__, thunkApi) => {
  try {
    return await new ListUsers().handle()
  } catch (error: any) {
    return thunkApi.rejectWithValue({ error: error.message })
  }
})

export const getUserAsync = createAsyncThunk<
GetUser.Output,
GetUser.Query
>('user/getUserAsync', async (input, thunkApi) => {
  try {
    return await new GetUser().handle(input)
  } catch (error: any) {
    return thunkApi.rejectWithValue({ error: error.message })
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    status: 'idle',
    usersLoaded: false
  }),
  reducers: {
    setuser: userAdapter.updateOne
  },
  extraReducers: (builder) => {
    builder.addCase(listUsersAsync.pending, (state) => {
      state.status = 'pendingListUsers'
      state.usersLoaded = false
    })
    builder.addCase(listUsersAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      if (action.payload?.length) {
        userAdapter.setAll(state, action.payload)
      }

      state.usersLoaded = true
    })
    builder.addCase(listUsersAsync.rejected, (state, action) => {
      state.status = 'idle'
      state.usersLoaded = false
    })

    builder.addCase(getUserAsync.pending, (state) => {
      state.status = 'pendinggetUser'
      state.usersLoaded = false
    })
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      console.log('executou')

      if (action.payload) {
        userAdapter.setOne(state, action.payload)
      }

      state.usersLoaded = true
    })
    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.status = 'idle'
      state.usersLoaded = false
    })
  }
})

export const { setuser } = userSlice.actions

export const userSelectors = userAdapter.getSelectors(
  (state: RootState) => state.users
)
