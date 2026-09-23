# Deep Learning Resources

## Knowledge

- [Video: "The paradox of the derivative" — 3Blue1Brown, Essence of Calculus ch. 2](https://www.youtube.com/watch?v=9vKqVkMQHKk)
  ~17 min. Visual intuition for what a derivative is (instantaneous rate of change / sensitivity). Use for: Lesson 0001, or any time the limit definition feels like pure symbol-pushing.
- [Video: "Visualizing the chain rule and product rule" — 3Blue1Brown, Essence of Calculus ch. 4](https://www.youtube.com/watch?v=YG15m2VwSjA)
  ~18 min. Why sensitivities multiply along a composed chain. Use for: Lesson 0001, the mechanical basis of backprop.
- [Video: "Backpropagation calculus" — 3Blue1Brown, Deep Learning ch. 4](https://www.youtube.com/watch?v=tIeHLnjs5U8)
  ~15 min. Same chain rule, applied directly to a neural net's weights instead of a generic composed function. Use for: once computational graphs (not just single chains) are on the table — likely lesson 2 or 3.
- [Video: "The spelled-out intro to neural networks and backpropagation: building micrograd" — Andrej Karpathy](https://www.youtube.com/watch?v=VMj-3S1tku0)
  2h25m. Builds, live, the exact same `Value`/`.backward()`/topo-sort design that `01-autograd` asks for. Use for: right before or during writing `engine.py` — watch for the idea, then close it and write your own rather than transcribing.
- [Book: _Neural Networks and Deep Learning_ — Michael Nielsen](http://neuralnetworksanddeeplearning.com/)
  Free online book. [Chapter 2](http://neuralnetworksanddeeplearning.com/chap2.html) derives backprop as four equations (BP1–BP4) from first principles, more rigorously than either video above. Use for: once the intuitive version has landed and you want the tightened-up, fully-general version (matrix form, not just a single node).
- [Notes: "Backpropagation, Intuitions" — CS231n (Stanford)](https://cs231n.github.io/optimization-2/)
  Short, written. The "local gradient" / circuit framing, and the rule that gradients **add** when a variable branches (feeds into more than one downstream node). Use for: a quick-lookup reference while coding, not a sit-down read.
- [Notes: gradient checking — CS231n, Neural Networks Part 3](https://cs231n.github.io/neural-networks-3/#gradcheck)
  Central differences, relative vs. absolute error, common pitfalls (kinks in ReLU near zero). Use for: right before writing `gradcheck.py`.

## Wisdom (Communities)

- [fast.ai Course Forums](https://forums.fast.ai/)
  Practitioner-heavy, organized by course lesson, welcoming to people building real things rather than chasing papers. Use for: when a from-scratch implementation misbehaves and a second pair of eyes beyond me would help.

## Gaps

- No resource yet for matrix-form backprop / vectorized gradients specifically (needed for `03-mlp-numpy`) beyond Nielsen ch. 2's treatment — revisit before that milestone if his notation doesn't click.
- No resource yet on volatility clustering / GARCH-type effects to back the `03-mlp-numpy` task framing beyond what's already established in this repo's own memory — worth finding one primary source before that lesson.
