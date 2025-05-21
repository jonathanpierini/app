export function calculateHexaflex(responses: number[]) {
  return {
    acceptance: responses[0],
    defusion: responses[1],
    presence: responses[2],
    self: responses[3],
    values: responses[4],
    action: responses[5]
  };
}