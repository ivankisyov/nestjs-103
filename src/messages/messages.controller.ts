import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  // constructor(private messagesService: MessagesService) {}
  @Get()
  listMessages() {
    // return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: MessageDto) {
    console.log('body', body);
    // return this.messagesService.create(body.content);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
    // return this.messagesService.findOne(id);
  }
}
