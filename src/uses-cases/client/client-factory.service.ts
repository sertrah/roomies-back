import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos';

@Injectable()
export class ClientFactoryService {
  createNewClient(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.firstName = createClientDto.firstName;
    newClient.lastName = createClientDto.lastName;
    newClient.name = createClientDto.name;
    newClient.clientId = createClientDto.clientId;

    return newClient;
  }

  updateClient(updateClientDto: UpdateClientDto) {
    const newClient = new Client();
    newClient.firstName = updateClientDto.firstName;
    newClient.lastName = updateClientDto.lastName;

    return newClient;
  }
}
