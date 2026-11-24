import { mkdirSync, writeFileSync } from "node:fs";

// Developer Excuses entry — one line, under 200 characters: a funny excuse a developer gives when code breaks in production.
// Judge brief: the excuse that lands the bigger laugh wins the head-to-head rounds.
// Chosen line: the oldest excuse in the book, with the punchline that the developer only just learned production is not his machine.
const LINE =
  'It worked on my machine. Unfortunately, production is not my machine, and I have only just learned this.';
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
