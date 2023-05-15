import { delay } from '@/core/application/utils'
import { User } from 'core/domain/models'
import { mockUsers } from '@/mocks/mock-users'

export class ListUsers {
  async handle (params?: ListUsers.Query): Promise<ListUsers.Output> {
    await delay(500)

    return Promise.resolve(mockUsers)
  }
}

export namespace ListUsers {
  export type Query = void

  export type Output = User[] | undefined
}
