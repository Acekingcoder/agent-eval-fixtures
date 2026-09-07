# agent-eval-fixtures

A small, hand-built benchmark of intentionally buggy pull requests, used to measure the
bug-detection accuracy of [`pr-review-agent`](https://github.com/Acekingcoder/pr-review-agent).

## Why this exists

Most "AI code review" demos show a single happy-path example. This repo exists to answer a
harder question instead: **does the agent actually catch real bugs, reliably, across different
categories of mistake?**

## What's here

6 open pull requests, each seeded with exactly one known bug from a different category:

| # | Bug category            |
|---|--------------------------|
| 1 | Missing `await`          |
| 2 | No error handling         |
| 3 | Race condition            |
| 4 | N+1 query                 |
| 5 | Missing input validation  |
| 6 | Listener leak              |

Each PR is realistic — a genuine code change, not a toy snippet — so the agent has to find the
bug the same way it would in a real review, not pattern-match on an obviously broken example.

## How it's used

[`pr-review-agent`](https://github.com/Acekingcoder/pr-review-agent)'s evaluation harness runs
against each of these PRs and uses a separate Claude call as an impartial judge to check whether
the agent's review actually identified the specific known bug — not brittle string matching.

**Current result: 6/6 (100%)** — full run details in `pr-review-agent`'s
[`examples/eval-run-1.md`](https://github.com/Acekingcoder/pr-review-agent/blob/main/examples/eval-run-1.md).

## Honest limitation

This is a small, first-pass benchmark — 6 PRs, one bug category each. It proves the agent works
on a clean, single-bug case per category; it doesn't yet test messier real-world scenarios like
multiple overlapping bugs in one PR, or adversarial cases designed to fool the agent specifically.
A larger, harder suite is the natural next step.
