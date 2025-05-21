export type HexaflexProfile = {
  acceptance: number;
  defusion: number;
  presence: number;
  self: number;
  values: number;
  action: number;
};

export function calculateHexaflex(responses: number[]): HexaflexProfile {
  return {
    acceptance: responses[0],
    defusion: responses[1],
    presence: responses[2],
    self: responses[3],
    values: responses[4],
    action: responses[5]
  };
}

export function getActivePoles(profile: HexaflexProfile): string[] {
  const thresholds = {
    acceptance: 40,
    defusion: 40,
    presence: 40,
    self: 40,
    values: 40,
    action: 40
  };

  return Object.entries(profile)
    .filter(([key, value]) => value < thresholds[key as keyof HexaflexProfile])
    .map(([key]) => key);
}