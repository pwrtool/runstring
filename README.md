# Runstring

Runstrings are provided as the second argument when running powertool kits. Your `run.sh` file is called with:

```bash
/some/path/to/a/run.sh <runstring>
```

The runstring is a JSON string that corresponds to the following typescript interface:

```ts
export interface ParsedRunstring {
  tool: string;
  from: string;
  arguments: Map<string, string>;
  autoAnswer: boolean;
  answers: string[];
}
```

Each of the properties means:

- tool - the tool being run from your kit
- from - the directory where your kit was called
- arguments - a map of arguments passed as strings. It's on you to parse those into whatever they need to be.
- autoAnswer - a boolean telling you if you can ask questions to the user. If it's true, the user is trying to automate your kit and you should respect that by using answers from the `answers` array
- answers - a list of answers to command line questions
