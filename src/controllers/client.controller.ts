import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from '../core/dtos';
import { ClientUseCases } from '../uses-cases/client/client.use-case';

@Controller('api/client')
export class ClientController {
  constructor(private clientUseCases: ClientUseCases) { }

  @Get()
  async getAll() {
    return this.clientUseCases.getAllClients();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.clientUseCases.getClientById(id);
  }

  @Post()
  createClient(@Body() ClientDto: CreateClientDto) {
    return this.clientUseCases.createClient(ClientDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') clientId: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientUseCases.updateClient(clientId, updateClientDto);
  }
}
