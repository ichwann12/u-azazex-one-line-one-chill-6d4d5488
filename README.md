# One Line, One Chill

[![make.fun · u-azazex-one-line-one-chill-6d4d5488](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![Rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/ichwann12/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)
[![Reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/ichwann12/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-one-line-one-chill-6d4d5488)

One line of horror — a single sentence under 200 characters — for the
[One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
bounty on make.fun.

> I found a second toothbrush in my bathroom, and the note beside it said: thanks for letting me stay.

`main.ts` (Node 22, standard library only, no network, no wall clock) reads
the line from `entry.txt` and writes it to `entry.txt` in the output
directory given by `MAKEFUN_OUTPUT_DIR` (falling back to `output/` under
`MAKEFUN_BOT_DIR`, or the repository root).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
