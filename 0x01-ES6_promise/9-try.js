export default function guardrail(mathFunction) {

    const queue = [];

    try {
      const array = mathFunction();
      queue.push(array);
    }
    catch (err) {
      queue.push(`Error: ${err.message}`);
    }
    finally {
      queue.push('Guardrail was processed');
    }
    return queue;
  }