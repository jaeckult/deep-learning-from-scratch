# 04 — PyTorch capstone

Same volatility-regime task as `03-mlp-numpy`, same architecture,
reimplemented in PyTorch (~30 lines). Confirm comparable accuracy (and the
same baseline-beating margin), then map every PyTorch call onto the piece
you hand-built: `nn.Linear` = your `W @ x + b`, `.backward()` = your
hand-derived gradients, `optim.SGD.step()` = your update loop.

## Run

    venv/bin/python 04-pytorch-capstone/train.py

## Results

_(fill in: accuracy vs 03-mlp-numpy, anything that surprised you)_
