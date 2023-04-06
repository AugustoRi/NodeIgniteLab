import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('Voce tem uma nova mensagem'),
      category: 'message',
    });

    expect(notification).toBeTruthy();
  });
});
