import { delay } from '@/core/application/utils'
import { User } from '@/core/domain/models'
import { mockUsers } from '@/mocks/mock-users'

export class GetUser {
  async handle (params?: GetUser.Query): Promise<GetUser.Output> {
    await delay(500)

    return Promise.resolve(mockUsers.find(u => u.email === params.email))
  }
}

export namespace GetUser {
  export type Query = { email: string }

  export type Output = User | undefined
}
