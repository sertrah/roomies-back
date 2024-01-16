import { Client } from '../entities';

export class CreateClientResponseDto {
  success: boolean;

  createdClient: Client;
}
