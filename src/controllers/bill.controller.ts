import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBillDto, UpdateBillDto } from '../core/dtos';
import { BillUseCases } from '../uses-cases/bill/bill.use-case';

@Controller('api/bill')
export class BillController {

    constructor(private billUseCases: BillUseCases) { }

    @Get()
    async getAll() {
        return this.billUseCases.getAllBill();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return this.billUseCases.getBillById(id);
    }

    @Post()
    createBill(@Body() BillDto: CreateBillDto) {
        return this.billUseCases.createBill(BillDto);
    }

    @Put(':id')
    updateBill(
        @Param('id') clientId: string,
        @Body() updateBillDto: UpdateBillDto,
    ) {
        return this.billUseCases.updateBill(clientId, updateBillDto);
    }
}
