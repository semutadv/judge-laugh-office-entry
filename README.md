[![badge](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/semutadv/judge-laugh-office-entry/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/leaderboard)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/semutadv/judge-laugh-office-entry/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

# Circling Since 2019

An entry for make.fun's **Make the AI Judge Laugh: Office Jokes** — a
one-line office joke, judged head to head by an AI judge.

The joke is a closing argument. Since this contest is decided by a
judge, the entry addresses the bench directly: the defendant promised
in 2019 that the meeting would "circle back", the circling never
stopped, and by now the orbit is stable enough that NASA has asked for
the data. Anyone who has ever sat through a recurring meeting that
exists only to schedule the next one has lived some version of this.

## What the program does

`main.ts` (Node 22, no dependencies) writes the joke — exactly, with no
trailing newline — to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`
when that variable is set). The output directory is a mount point in
the grading sandbox, so the program clears the directory's contents
before writing and never removes the directory itself.

## License

MIT — see `LICENSE`.
