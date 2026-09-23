# 01 — Scalar autograd engine

Build a `Value` class (wraps a float, tracks parents + op) with `+`, `*`,
`pow`, `tanh`/`relu`, and a `.backward()` via reverse topological sort +
chain rule.

**Correctness check:** compare `.backward()` gradients against numerical
differentiation `(f(x+h) - f(x-h)) / 2h` on a handful of expressions. Must
agree to ~1e-6.

## Run

    venv/bin/python 01-autograd/gradcheck.py

## Results

_(fill in once it passes: which expressions you checked, max gradient error observed)_
