---
title: Minimal RCE Scanner
description: Small PoC scanning HTTP endpoints for simple command injection patterns.
tags: RCE, Go, HTTP
---

This is a minimal project exploring request patterns that may trigger command injection in poorly validated endpoints.

- Supports basic payload lists
- Parallel scanning with rate limiting
- Structured output to JSON

Related writeup: [A quick note on input validation](../writeups/sample-writeup.md).
