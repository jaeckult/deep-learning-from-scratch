# Deep Learning From Scratch

Hands-on deep learning fundamentals, building up from raw scalar autograd to
a PyTorch capstone. Each stage is self-contained; correctness is checked
empirically at every step (gradient checks, loss curves, held-out accuracy
vs. a baseline) before moving on. Framed around algorithmic trading tasks
throughout — synthetic toy tasks where a known ground truth matters more
than realism, real market data once the goal shifts to "did I implement
this correctly."

## Stages

1. [`01-autograd`](01-autograd/) — scalar autograd engine (pure Python), gradient-checked on a small logistic "signal → probability" circuit.
2. [`02-mlp-toy`](02-mlp-toy/) — MLP on the autograd engine, trained on a synthetic 2D signal pair with a known nonlinear decision boundary.
3. [`03-mlp-numpy`](03-mlp-numpy/) — vectorized MLP, backprop derived and implemented by hand in numpy, trained on real BTCUSDT features to classify next-bar volatility regime.
4. [`04-pytorch-capstone`](04-pytorch-capstone/) — same task in PyTorch, to map every hand-built piece onto its framework equivalent.

## Setup

    python3 -m venv venv
    venv/bin/pip install -r requirements.txt

Run everything with `venv/bin/python`, not bare `python`.
