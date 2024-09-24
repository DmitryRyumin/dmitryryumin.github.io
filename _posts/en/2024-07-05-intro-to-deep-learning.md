---
layout: post
title: Introduction to Deep Learning
date: 2024-07-05
description: A concise guide to the fundamentals of deep learning
tags: Intro-to-DL Perceptron Activation-Functions ReLU ELU PReLU LeakyReLU ReLU6 RReLU SELU CELU GELU Sigmoid SiLU LogSigmoid Hardsigmoid Tanh Tanhshrink Hardtanh Hardshrink Hardswish Mish Softplus Softshrink Softsign Threshold GLU MultiheadAttention Dense-Layer Single-Layer Hidden-Layer Deep-Neural-Network Loss-Functions L1Loss MSELoss PoissonNLLLoss GaussianNLLLoss KLDivLoss CrossEntropyLoss NLLLoss BCELoss BCEWithLogitsLoss MarginRankingLoss Regression Classification Ranking Optimization-Algorithms
categories: Deep-Learning
author: Dmitry Ryumin
last_updated: 2024-09-24
# toc:
#   - name:
# _styles: >
---

## What is Deep Learning?

{% include figure.liquid loading="eager" path="assets/img/posts/intro_dl_en.svg" class="mt-3 px768 mx-auto d-block" %}

## Why Deep Learning?

> Hand-crafted features are time-consuming, brittle, and not scalable in practice. Deep learning allows us to learn the **underlying features** directly from the data.

{% include figure.liquid loading="eager" path="assets/img/posts/features_en.svg" class="mt-3 px768 mx-auto d-block" %}

## The Perceptron

> The structural building block of deep learning.

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/perceptron_en.svg" class="mt-3 px480 d-block" %}

<div>
<span>
$$
\overbrace{\hat{y}}^{\text{Output}} = \overbrace{g\left(\underbrace{w_0}_{\text{Bias}} + \sum_{i=1}^m \underbrace{x_i}_{\text{Input}} \underbrace{w_i}_{\text{Weight}}\right)}^{\text{Non-Linear Activation Function}}
$$
</span>

<hr />

<span>
$$
\hat{y}=g\left(w_0+\boldsymbol{X}^T \boldsymbol{W}\right)
$$

$$
\text{where:} \quad \boldsymbol{X}=\left[\begin{array}{c}x_1 \\ \vdots \\ x_m\end{array}\right] \quad \text{and} \quad \boldsymbol{W}=\left[\begin{array}{c}w_1 \\ \vdots \\ w_m\end{array}\right]
$$
</span>
</div>
</div>

## Activation Functions

> Control activation and signaling between neurons for nonlinearity and adaptation to detect complex patterns in data.

$$
\hat{y}=\textcolor{DarkGoldenrod}{g}\left(w_0+\boldsymbol{X}^T \boldsymbol{W}\right)
$$

### <a href="https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity" target="_blank">Types of Activation Function</a>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/types_of_activation_function_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/types_of_activation_function_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

## Building Neural Networks with a Perceptron

### A Perceptron Simplified Version

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/perceptron_simplified.svg" class="mt-3 px360 d-block" %}

<div>
<span>
$$
z=w_0+\sum_{j=1}^m x_j w_j
$$
</span>
</div>
</div>

### Simplified Version of Multi-Output Perceptron

> All inputs are connected to all outputs, these layers are called **Dense**.

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/multi_perceptron_simplified.svg" class="mt-3 px360 d-block" %}

<div>
<span>
$$
z_\textcolor{DarkGoldenrod}{i}=w_{0, \textcolor{DarkGoldenrod}{i}}+\sum_{j=1}^m x_j w_{j, \textcolor{DarkGoldenrod}{i}}
$$
</span>
</div>
</div>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/dense_layer_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/dense_layer_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

### Single Layer Neural Network

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/single_layer_nn_en.svg" class="mt-3 px360 d-block" %}
</div>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/single_layer_nn_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/single_layer_nn_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

### Deep Neural Network

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/deep_nn_en.svg" class="mt-3 px640 d-block" %}
</div>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/dnn_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/dnn_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

## Loss Functions

> The cost of prediction errors.

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/loss_en.svg" class="mt-3 px480 d-block" %}

<div>
<span>
$$
\mathcal{L}\left(\underbrace{f\left(x^{(i)} ; \boldsymbol{W}\right)}_{\text{Prediction}}, \underbrace{y^{(i)}}_{\text{Actual}}\right)
$$
</span>
</div>
</div>

### <a href="https://pytorch.org/docs/stable/nn.html#loss-functions" target="_blank">Types of Loss Function</a>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/types_of_loss_function_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/types_of_loss_function_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

## Optimization Algorithms

> Optimization of neural network model parameters for loss function minimization.

### <a href="https://pytorch.org/docs/stable/optim.html#algorithms" target="_blank">Types of Optimization Algorithms</a>
