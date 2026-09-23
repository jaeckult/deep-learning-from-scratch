# 03 — Vectorized MLP in numpy (hand-derived backprop)

Matrices instead of a scalar graph. Derive and implement dL/dW2, dL/db2,
dL/dW1, dL/db1 by hand — no autograd this time.

**Task:** classify next-bar volatility regime (high vol vs low vol — e.g.
next bar's squared return above or below its trailing median) for BTCUSDT,
from lagged features (recent realized vol, recent return, recent volume,
whatever you engineer). Real data: Binance's public klines endpoint needs
no API key —

    GET https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=1000

**Why volatility regime and not price direction:** direction at this
frequency is close to a random walk (you already measured this elsewhere —
lag-1 autocorrelation on btc5m direction was +0.0007, indistinguishable
from noise). Volatility clustering is real, well-documented structure
(GARCH-type effects), so it's a task where "my backprop is correct" and
"there's something to learn" can both be true. This is a from-scratch DL
exercise, not new trading research — nothing here touches `.env.live` or
any live/paper daemon.

**Correctness check:** NOT a fixed accuracy threshold — a clean 90%+ bar
would either be fake or mean the label leaked. Instead: beat a naive
baseline (majority class, or "same regime as previous bar") by a margin
whose bootstrap CI excludes zero. Same discipline as `analysis/metrics.py`
in the trading repo — feel free to port that gate over rather than
rewriting it.

## Run

    venv/bin/python 03-mlp-numpy/train.py

## Results

_(fill in: architecture, hyperparameters, baseline accuracy, model accuracy, CI on the margin)_
