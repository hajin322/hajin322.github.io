---
title: Sovereign AI multi-agent Android pipeline
description: Korean LLM-backed multi-agent automation for Android, built for the 2026 AI Rookie Contest.
date: 2026-02-01
---

A team project for the 2026 인공지능 루키 대회 (AI Rookie Contest). We
built a multi-agent pipeline that automates Android tasks using a Korean
sovereign LLM as the orchestrator.

## Design decisions

- **Screen reading.** Accessibility Tree as the primary channel, not
  screenshots. Cheaper, less brittle, and structurally aligned with how
  Android exposes UI semantics.
- **Map and location APIs.** Kakao and Naver maps instead of Google —
  both for Korean-market coverage and to differentiate location-based
  service behavior from English-language baselines.
- **Task model.** Delegation-style. Because the pipeline has non-trivial
  latency, we give the agent coarse goals and let it plan sub-steps
  rather than forcing tight user-in-the-loop turns.

## Role

Led the architecture and the accessibility-tree parser. Coordinated the
agent-protocol design between the planner and executor modules.

## Stack

Python · LangGraph · Android Accessibility API · Kakao / Naver Maps.
