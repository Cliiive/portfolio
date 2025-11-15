---
title: A quick note on input validation
description: Observations while reviewing a small web API for obvious injection vectors.
tags: Validation, Web, Notes
---

When evaluating endpoints for potential injection, start with the most boring checks:

1. Is any input fed directly to a shell, interpreter, or SQL engine?
2. Are separators, metacharacters, or wildcards passed through unescaped?
3. Does error output leak control flow or stack traces?

See also: [Minimal RCE Scanner](../projects/sample-project.md).
