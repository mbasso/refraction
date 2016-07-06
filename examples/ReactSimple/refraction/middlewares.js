const eventMiddleware = (channel, param) => {
  const result = param;
  if (result.type === 'event' && result.payload.target) {
    result.payload = result.payload.target.value;
  }
  return result;
};

const logger = (channel, param) => {
  // eslint-disable-next-line no-console
  console.log({
    channel,
    param,
  });
  return param;
};

export default [
  eventMiddleware,
  logger,
];
