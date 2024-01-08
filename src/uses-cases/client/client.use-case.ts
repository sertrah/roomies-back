import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos';
import { ClientFactoryService } from './client-factory.service';

@Injectable()
export class ClientUseCases {
  constructor(
    private dataServices: IDataServices<Client>,
    private clientFactoryService: ClientFactoryService,
  ) { }

  getAllClients(): Promise<Client[]> {
    return this.dataServices.clients.getAll();
  }

  getClientById(id: any): Promise<Client> {
    return this.dataServices.clients.get(id);
  }

  createClient(createClientDto: CreateClientDto): Promise<Client> {
    const Client = this.clientFactoryService.createNewClient(createClientDto);
    return this.dataServices.clients.create(Client);
  }

  updateClient(ClientId: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const Client = this.clientFactoryService.updateClient(updateClientDto);
    return this.dataServices.clients.update(ClientId, Client);
  }
}
