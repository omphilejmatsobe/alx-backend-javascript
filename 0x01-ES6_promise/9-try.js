export default function guardrail(mathFunction) {
  const queue = [];
  let m; // MathFunction

  try {
    m = mathFunction();
  } catch (error) {
    m = error.toString();
  }
  queue.push(m);
  queue.push('Guardrail was processed');
  return queue;
}
