import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAssignmentDto, UpdateAssignmentDto } from '../core/dtos';
import { AssignmentUseCases } from '../uses-cases/assignment/assignment.use-case';

@Controller('api/assignment')
export class AssignmentController {

    constructor(private assignmentUseCases: AssignmentUseCases) { }

    @Get()
    async getAll() {
         this.createAssignment({
            roommieId: 'string',
            houseId: 'string',
            isActive: 'string',
            create_at: 'string',
            roomie: '65a6b8c79533efebfa5b83cb',
        }) 
        return this.assignmentUseCases.getAllAssignment();
    }

    @Get(':id')
    async getById(@Param('id') id: any) {
        return this.assignmentUseCases.getAssignmentById(id);
    }

    @Post()
    createAssignment(@Body() AssignmentDto: CreateAssignmentDto) {
        return this.assignmentUseCases.createAssignment(AssignmentDto);
    }

    @Put(':id')
    updateAssignment(
        @Param('id') clientId: string,
        @Body() updateAssignmentDto: UpdateAssignmentDto,
    ) {
        return this.assignmentUseCases.updateAssignment(clientId, updateAssignmentDto);
    }
}
