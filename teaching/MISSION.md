# Mission: Deep Learning

## Why
Build enough hands-on, from-the-mechanics understanding of deep learning to
credibly add learned models as a tool in trading/signal research — not to
memorize a framework's API, but to trust or distrust a neural net's output
the same way an existing hand-built statistical signal is already trusted
or distrusted: because the mechanism is fully known, not a black box.

## Success looks like
- Can implement backprop from scratch (scalar autograd, then hand-derived
  matrix gradients) and verify it with gradient checking, without copying a
  reference implementation.
- Can explain what a neural net computes at every layer — no hand-waving
  about "the model learns patterns."
- Has trained a from-scratch MLP on real market data (BTCUSDT volatility
  regime) and can say honestly whether it beat a naive baseline, backed by
  a confidence interval, not a vibe.
- Can read a PyTorch training loop and map every line onto the hand-built
  mechanics behind it.

## Constraints
- Minimal assistance on the actual build (`~/Music/deep-learning-from-scratch`)
  — wants to write the code solo. Lessons teach concepts and check
  understanding; they don't hand over working solutions.
- Experienced software engineer / quant, new specifically to deep learning.
  No condescension, no re-deriving things already known.
- Prefers concise, direct explanation over narrative padding.

## Out of scope
- Not aiming for research-level ML theory — no need for cutting-edge
  architectures, paper-heavy deep dives, or exotic areas (RL, GANs,
  diffusion) unless this mission is explicitly revised to include them.
- Not deciding whether ML belongs in the live trading stack — that's a
  separate, later decision gated by the trading repo's own measurement
  discipline, not by this mission.
