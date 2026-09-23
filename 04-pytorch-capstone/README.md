# 04 — PyTorch capstone

Same `load_digits` task, same architecture, reimplemented in PyTorch
(~30 lines). Confirm comparable accuracy to `03-mlp-numpy`, then map every
PyTorch call onto the piece you hand-built: `nn.Linear` = your `W @ x + b`,
`.backward()` = your topo-sort/hand-derived gradients, `optim.SGD.step()` =
your update loop.

## Run

    venv/bin/python 04-pytorch-capstone/train.py

## Results

_(fill in: accuracy vs 03-mlp-numpy, anything that surprised you)_
