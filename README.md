# Deep Learning From Scratch

Hands-on deep learning fundamentals, building up from raw scalar autograd to a
PyTorch capstone. Each stage is self-contained; correctness is checked
empirically at every step (gradient checks, loss curves, test accuracy)
before moving on.

## Stages

1. [`01-autograd`](01-autograd/) — scalar autograd engine (pure Python), verified by numerical gradient checking.
2. [`02-mlp-toy`](02-mlp-toy/) — tiny MLP on the autograd engine, trained on a 2D toy classification set.
3. [`03-mlp-numpy`](03-mlp-numpy/) — vectorized MLP, backprop derived and implemented by hand in numpy, trained on `sklearn.datasets.load_digits`.
4. [`04-pytorch-capstone`](04-pytorch-capstone/) — same task in PyTorch, to map every hand-built piece onto its framework equivalent.

## Setup

    python3 -m venv venv
    venv/bin/pip install -r requirements.txt

Run everything with `venv/bin/python`, not bare `python`.
