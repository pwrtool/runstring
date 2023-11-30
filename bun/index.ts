export interface ParsedRunstring {
  tool: string;
  from: string;
  arguments: Map<string, string>;
  autoAnswer: boolean;
  answers: string[];
}

export function generateRunstring(parsed: ParsedRunstring): string {
  return JSON.stringify(parsed);
}

export function parseRunstring(runstring: string): ParsedRunstring {
  const parsed = JSON.parse(runstring);

  return parsed as ParsedRunstring;
}
