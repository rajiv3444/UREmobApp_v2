
export class LoginResponse {
  constructor(

    id: number,
    superuser: boolean,
    administrator: boolean,
    manager: boolean,
    monitor: boolean,
    ad_user: boolean,
    target: boolean,
    timeout: number,
    auth_token: string,
    vault_user: false,
    source_id: number,
    timestamp: number
  ) { }
}