# 02 — Tiny MLP, toy 2D classification

`Neuron` → `Layer` → `MLP` built on the `01-autograd` engine. Manual SGD
loop: forward, `loss.backward()`, step, zero grad. Dataset:
`sklearn.datasets.make_moons` (or hand-rolled interleaved arcs if you want
zero extra dependencies).

**Correctness check:** loss drops monotonically; decision boundary plot
visibly separates the two classes.

## Run

    venv/bin/python 02-mlp-toy/train.py

## Results

_(fill in: final loss, decision boundary description)_
