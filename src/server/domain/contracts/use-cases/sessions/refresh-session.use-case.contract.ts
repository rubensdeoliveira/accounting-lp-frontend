export interface RefreshSessionUseCaseContract {
  refresh: (
    input: RefreshSessionUseCaseContract.Input,
  ) => Promise<RefreshSessionUseCaseContract.Output>
}

export namespace RefreshSessionUseCaseContract {
  export type Input = { token: string }
  export type Output = { access_token: string; refresh_token: string }
}
