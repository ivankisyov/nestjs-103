import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

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
