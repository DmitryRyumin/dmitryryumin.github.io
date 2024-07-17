---
layout: post
title: Введение в глубокое машинное обучение
date: 2024-07-05
description: Краткое руководство по основам глубокого машинного обучения
tags: Intro-to-DL Perceptron Activation-Functions ReLU ELU PReLU LeakyReLU ReLU6 RReLU SELU CELU GELU Sigmoid SiLU LogSigmoid Hardsigmoid Tanh Tanhshrink Hardtanh Hardshrink Hardswish Mish Softplus Softshrink Softsign Threshold GLU MultiheadAttention Dense-Layer Single-Layer Hidden-Layer Deep-Neural-Network Loss-Functions L1Loss MSELoss PoissonNLLLoss GaussianNLLLoss KLDivLoss CrossEntropyLoss NLLLoss BCELoss BCEWithLogitsLoss MarginRankingLoss Regression Classification Ranking Optimization-Algorithms
categories: Deep-Learning
author: Дмитрий Рюмин
last_updated: 2024-07-06
# toc:
#   - name:
# _styles: >
---

## Что такое глубокое машинное обучение?

{% include figure.liquid loading="eager" path="assets/img/posts/intro_dl_ru.svg" class="mt-3 px768 mx-auto d-block" %}

## Почему именно глубокое машинное обучение?

> Ручное извлечение признаков требует много времени, ненадежно и плохо масштабируется на практике. Глубокое машинное обучение позволяет извлекать **важные признаки** напрямую из данных.

{% include figure.liquid loading="eager" path="assets/img/posts/features_ru.svg" class="mt-3 px768 mx-auto d-block" %}

## Перцептрон (один нейрон)

> Фундаментальный строительный блок нейросети.

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/perceptron_ru.svg" class="mt-3 px480 d-block" %}

<div>
<span>
$$
\overbrace{\hat{y}}^{\text{Выход}} = \overbrace{g\left(\underbrace{w_0}_{\text{Смещение}} + \sum_{i=1}^m \underbrace{x_i}_{\text{Вход}} \underbrace{w_i}_{\text{Вес}}\right)}^{\text{Нелинейная функция активации}}
$$
</span>

<hr />

<span>
$$
\hat{y}=g\left(w_0+\boldsymbol{X}^T \boldsymbol{W}\right)
$$

$$
\text{где:} \quad \boldsymbol{X}=\left[\begin{array}{c}x_1 \\ \vdots \\ x_m\end{array}\right] \quad \text{и} \quad \boldsymbol{W}=\left[\begin{array}{c}w_1 \\ \vdots \\ w_m\end{array}\right]
$$
</span>
</div>
</div>

## Функции активации

> Контроль активации и передачи сигнала между нейронами для нелинейности и адаптации к выявлению сложных шаблонов в данных.

$$
\hat{y}=\textcolor{DarkGoldenrod}{g}\left(w_0+\boldsymbol{X}^T \boldsymbol{W}\right)
$$

### <a href="https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity" target="_blank">Разновидности функции активации</a>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/types_of_activation_function_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/types_of_activation_function_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}

## Построение нейросетей с перцептроном

### Упрощенная версия перцептрона

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

### Упрощенная версия многовыходного перцептрона

> Все входы соединены со всеми выходами, эти слои называются **полносвязными** (**Dense**).

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
{% assign jupyter_path = 'assets/jupyter/dense_layer_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/dense_layer_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}

### Однослойная нейросеть

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/single_layer_nn_ru.svg" class="mt-3 px360 d-block" %}
</div>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/single_layer_nn_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/single_layer_nn_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}

### Глубокая нейросеть

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/deep_nn_ru.svg" class="mt-3 px640 d-block" %}
</div>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/dnn_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/dnn_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}

## Функции потерь

> Стоимость ошибок предсказаний.

<div class="d-flex align-items-center justify-content-center gap-10px">
{% include figure.liquid loading="eager" path="assets/img/posts/loss_ru.svg" class="mt-3 px480 d-block" %}

<div>
<span>
$$
\mathcal{L}\left(\underbrace{f\left(x^{(i)} ; \boldsymbol{W}\right)}_{\text{Предсказание}}, \underbrace{y^{(i)}}_{\text{Факт}}\right)
$$
</span>
</div>
</div>

### <a href="https://pytorch.org/docs/stable/nn.html#loss-functions" target="_blank">Разновидности функции потерь</a>

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/types_of_loss_function_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/types_of_loss_function_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}

## Алгоритмы оптимизации

> Оптимизация параметров нейросетевой модели для минимизации функции потерь.

### <a href="https://pytorch.org/docs/stable/optim.html#algorithms" target="_blank">Разновидности алгоритмов оптимизации</a>
