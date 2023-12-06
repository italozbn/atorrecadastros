import { RmqContext } from '@nestjs/microservices';

const ackErrors: string[] = ['E11000'];

export const executeServiceAction = async (
  context: RmqContext,
  actionFunction: () => Promise<any>,
) => {
  const channel = context.getChannelRef();
  const originalMessage = context.getMessage();
  try {
    await actionFunction();
    await channel.ack(originalMessage);
  } catch (error) {
    const foundAckErrors = ackErrors.filter((ackError) =>
      error.message.includes(ackError),
    );
    if (foundAckErrors.length > 0) {
      await channel.ack(originalMessage);
    }
  }
};
