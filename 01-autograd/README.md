# 01 — Scalar autograd engine

Build a `Value` class (wraps a float, tracks parents + op) with `+`, `*`,
`pow`, `tanh`/`relu`/`sigmoid`, and a `.backward()` via reverse topological
sort + chain rule.

**Correctness check:** compare `.backward()` gradients against numerical
differentiation `(f(x+h) - f(x-h)) / 2h`. Check a handful of plain
expressions first, then a small logistic circuit —

    z = w1*x1 + w2*x2 + b
    p = sigmoid(z)
    loss = binary_cross_entropy(p, y)

— checking dL/dw1, dL/dw2, dL/db. This is the atomic unit 02 and 03 scale
up into (one "signal → probability" node), so it's worth having solid here.
Must agree with the numerical gradient to ~1e-6.

## Run

    venv/bin/python 01-autograd/gradcheck.py

## Results

_(fill in once it passes: which expressions you checked, max gradient error observed)_
