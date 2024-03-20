import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findAll() {
    return this.messagesRepository.findAll();
  }

  findOne(id) {
    return this.messagesRepository.findOne(id);
  }

  create(content) {
    return this.messagesRepository.create(content);
  }
}
